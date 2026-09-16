import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = process.env.PORT || 3000;
const PUBLIC_ROOT = path.resolve(__dirname);

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.ico': 'image/x-icon',
};

// Security Headers applied to all responses
const SECURITY_HEADERS = {
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'SAMEORIGIN',
  'X-XSS-Protection': '1; mode=block',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), payment=()',
  'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self'; frame-ancestors 'self'; base-uri 'self'; form-action 'self';",
  'Cache-Control': 'no-cache',
};

const server = http.createServer((req, res) => {
  // 1. Method Guard: Only allow safe idempotent read methods
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    res.writeHead(405, {
      'Content-Type': 'text/plain; charset=utf-8',
      'Allow': 'GET, HEAD',
      ...SECURITY_HEADERS,
    });
    res.end('405 Method Not Allowed');
    return;
  }

  // 2. Safe URL parsing & Path Traversal Prevention
  let rawPath;
  try {
    const parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
    rawPath = decodeURIComponent(parsedUrl.pathname);
  } catch {
    res.writeHead(400, { 'Content-Type': 'text/plain; charset=utf-8', ...SECURITY_HEADERS });
    res.end('400 Bad Request: Malformed URI');
    return;
  }

  // Strip null bytes
  rawPath = rawPath.replace(/\0/g, '');

  // Normalize and resolve absolute target file path
  let targetPath = path.resolve(PUBLIC_ROOT, '.' + rawPath);

  // Security Barrier: Reject any path attempting directory traversal outside PUBLIC_ROOT
  if (!targetPath.startsWith(PUBLIC_ROOT)) {
    res.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8', ...SECURITY_HEADERS });
    res.end('403 Forbidden: Access Denied');
    return;
  }

  // Reject access to hidden files/directories (starting with .)
  const pathParts = targetPath.slice(PUBLIC_ROOT.length).split(path.sep);
  if (pathParts.some(part => part.startsWith('.') && part !== '.' && part !== '..')) {
    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8', ...SECURITY_HEADERS });
    res.end('<h1>404 Not Found</h1><p><a href="/">Return Home</a></p>');
    return;
  }

  // Handle Directory requests -> index.html
  try {
    if (fs.existsSync(targetPath)) {
      const stat = fs.statSync(targetPath);
      if (stat.isDirectory()) {
        targetPath = path.join(targetPath, 'index.html');
      }
    } else if (fs.existsSync(targetPath + '.html')) {
      targetPath += '.html';
    }
  } catch {
    res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8', ...SECURITY_HEADERS });
    res.end('500 Internal Server Error');
    return;
  }

  // File existence & type check
  if (!fs.existsSync(targetPath) || fs.statSync(targetPath).isDirectory()) {
    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8', ...SECURITY_HEADERS });
    res.end('<h1>404 Not Found</h1><p><a href="/">Return Home</a></p>');
    return;
  }

  const ext = path.extname(targetPath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  if (req.method === 'HEAD') {
    res.writeHead(200, {
      'Content-Type': contentType,
      ...SECURITY_HEADERS,
    });
    res.end();
    return;
  }

  fs.readFile(targetPath, (err, content) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8', ...SECURITY_HEADERS });
      res.end('500 Internal Server Error');
      return;
    }
    res.writeHead(200, {
      'Content-Type': contentType,
      ...SECURITY_HEADERS,
    });
    res.end(content);
  });
});

server.on('error', (err) => {
  console.error('Server error encountered:', err);
});

server.listen(PORT, () => {
  console.log(`Octagram secure server running at http://localhost:${PORT}`);
});
