/**
 * Octagram - Modern Interactivity & Progressive Enhancement Fallbacks
 * Conforms to 2026 Web Standards
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Header Scroll Indicator
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });


  // 2. Interactive 3D tilt & Mouse spotlight on Service Cards
  setupServiceCardInteractivity();

  // 3. Fallbacks for Modern CSS Features
  setupScrollAnimationFallback();
  setupSiblingStaggerFallback();

  // 4. Ambient Background Particles
  setupAmbientParticles();

  // 5. Mobile Menu Interactivity
  setupMobileMenu();

  // 6. Interactive Cursor Attraction (Gravity Field)
  setupGravityField();

  // 7. Interactive Scroll-Driven Process Timeline
  initProcessScrollTimeline();

  // 8. Before We Build FAQ Accordion
  setupFaqAccordion();

  // 9. Interactive HUD Dashboard (Inspectors, Themes, Telemetry)
  initHudDashboard();

  // 10. Playful click-activated animations for the Hero Logo
  setupLogoClickAnimations();

  // 11. Back to Top smooth scroll button setup
  setupBackToTopButton();

  // 12. Self-building website compiler initiation
  initWebCompiler();
});


/**
 * JS Fallback for scroll-driven animations using standard IntersectionObservers.
 * Triggers only on browsers without native CSS animation-timeline view support (like Firefox).
 */
function setupScrollAnimationFallback() {
  // 1. Rotating Background Watermark fallback (Gears)
  const gearRight = document.querySelector('.gear-right');
  const gearLeft = document.querySelector('.gear-left');
  if (gearRight || gearLeft) {
    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? scrollTop / docHeight : 0;
      
      if (gearRight) {
        const cwAngle = scrollPercent * 180;
        gearRight.style.transform = `rotate(${cwAngle}deg)`;
      }
      if (gearLeft) {
        const ccwAngle = scrollPercent * -180;
        gearLeft.style.transform = `rotate(${ccwAngle}deg)`;
      }
    });
  }

  // 5. Hero Logo Scroll Exit fallback
  const heroLogo = document.querySelector('.hero-logo-wrapper');
  if (heroLogo) {
    window.addEventListener('scroll', () => {
      if (!CSS.supports('(animation-timeline: view()) and (animation-range: exit)')) {
        const scrollTop = window.scrollY;
        const fadeHeight = window.innerHeight * 0.7; // Fade out over first 70% of screen height
        const progress = Math.min(scrollTop / fadeHeight, 1);
        
        heroLogo.style.opacity = 1 - progress * 0.9;
        heroLogo.style.transform = `scale(${1 - progress * 0.3}) translateY(${progress * -60}px)`;
      }
    });
  }
}

/**
 * JS Fallback for stagger delay animations.
 * Triggers only on browsers without native CSS sibling-index() support (like Firefox).
 */
function setupSiblingStaggerFallback() {
  const nativeSupport = window.CSS && CSS.supports('animation-delay: calc(sibling-index() * 0.1s)');
  
  if (nativeSupport) {
    console.log('✨ Octagram: Native CSS sibling-index() stagger supported.');
    return;
  }
  
  console.log('ℹ️ Octagram: Using JS sibling-index variable fallback for stagger animations.');
  
  const serviceCards = document.querySelectorAll('#services-list > .service-card');
  serviceCards.forEach((card, index) => {
    card.style.setProperty('--sibling-index', index + 1);
  });
}

/**
 * Attaches mouse listeners to service cards to update coordinate variables
 * and apply a 3D tilt perspective hover transform.
 */
function setupServiceCardInteractivity() {
  const cards = document.querySelectorAll('.service-card');
  
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left; // Mouse X relative to card bounds
      const y = e.clientY - rect.top;  // Mouse Y relative to card bounds
      
      // Update spotlight position variables
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
      
      // Calculate 3D tilt angles (max tilt = 8 degrees)
      const width = rect.width;
      const height = rect.height;
      const mouseXFromCenter = x - width / 2;
      const mouseYFromCenter = y - height / 2;
      
      // Calculate rotate angles (rotateY depends on X offset, rotateX depends on Y offset)
      const rotateY = (mouseXFromCenter / (width / 2)) * 8;
      const rotateX = -(mouseYFromCenter / (height / 2)) * 8;
      
      // Apply perspective and tilt transformation (scale up slightly)
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    });
    
    card.addEventListener('mouseleave', () => {
      // Reset variables & smooth hover transformation
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
    });
  });
}

/**
 * Renders slowly floating background particles in a canvas.
 */
function setupAmbientParticles() {
  const canvas = document.createElement('canvas');
  canvas.id = 'ambient-particles';
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100vw';
  canvas.style.height = '100vh';
  canvas.style.pointerEvents = 'none';
  canvas.style.zIndex = '-3'; // Behind all elements
  document.body.appendChild(canvas);
  
  const ctx = canvas.getContext('2d');
  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;
  
  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });
  
  const particles = [];
  const particleCount = 25; // Subtle amount to keep it clean
  
  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.5 + 0.5,
      speedX: (Math.random() - 0.5) * 0.15,
      speedY: -Math.random() * 0.3 - 0.05,
      alpha: Math.random() * 0.4 + 0.1
    });
  }
  
  function animate() {
    ctx.clearRect(0, 0, width, height);
    
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(56, 189, 248, ${p.alpha})`; // Cobalt Blue highlights
      ctx.fill();
      
      // Move particles
      p.x += p.speedX;
      p.y += p.speedY;
      
      // Reset if they float off screen
      if (p.y < 0) {
        p.y = height;
        p.x = Math.random() * width;
      }
      if (p.x < 0 || p.x > width) {
        p.x = Math.random() * width;
      }
    });
    
    requestAnimationFrame(animate);
  }
  
  animate();
}

/**
 * Performs a matrix-style typographic decoding animation on load.
 */
function decodeText(element) {
  const originalText = element.textContent;
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&';
  let iterations = 0;
  
  const interval = setInterval(() => {
    element.textContent = originalText
      .split('')
      .map((char, index) => {
        if (index < iterations) {
          return originalText[index];
        }
        if (char === ' ') return ' ';
        return chars[Math.floor(Math.random() * chars.length)];
      })
      .join('');
    
    if (iterations >= originalText.length) {
      clearInterval(interval);
      element.textContent = originalText; // Ensure exact final text matches
    }
    
    iterations += 1 / 2.5; // Speed multiplier
  }, 25);
}

/**
 * Boots up the dynamic website compiling terminal and sequential scans.
 */
function initWebCompiler() {
  // Block user scrolling during compile overlay phase
  document.body.style.overflow = 'hidden';
  
  const terminal = document.getElementById('compiler-terminal');
  const body = document.getElementById('compiler-body');
  if (!terminal || !body) return;
  
  const logs = [
    "[System] Initializing Octagram Edge Compiler v2.0...",
    "[System] Connecting to local AI pipeline... [OK]",
    "[Build] Parsing index.html DOM structure...",
    "[Build] Compiling 2-column Hero template layout...",
    "[Build] Meshing rotating watermark elements... [OK]",
    "[Build] Importing Prussian Blue assets (#11304D)...",
    "[Build] Resolving 3D card tilt listeners... [OK]",
    "[System] Deploying website assets to edge network...",
    "[System] SUCCESS. Rendering page layout now."
  ];
  
  let currentLine = 0;
  const cursor = body.querySelector('.terminal-cursor');
  
  function printNextLine() {
    if (currentLine < logs.length) {
      const div = document.createElement('div');
      div.className = 'terminal-line';
      div.textContent = logs[currentLine];
      
      // Insert line before the cursor element
      body.insertBefore(div, cursor);
      body.scrollTop = body.scrollHeight; // Auto-scroll terminal body
      
      currentLine++;
      // Print next line with slightly randomized delay
      setTimeout(printNextLine, Math.random() * 100 + 60);
    } else {
      // Completed log outputs
      setTimeout(() => {
        // Trigger compiler collapse animation
        terminal.classList.add('compiled');
        // Restore user scroll
        document.body.style.overflow = '';
        
        // Trigger compile sweep Phase 2
        runHeroSectionCompile();
      }, 400);
    }
  }
  
  // Start logs
  setTimeout(printNextLine, 200);
}

/**
 * Phase 2: Simulates compilation laser-sweep and loads the Hero section.
 */
function runHeroSectionCompile() {
  const heroSection = document.getElementById('home');
  if (!heroSection) return;
  
  // Keep outline compiling/laser scan active for 1.2 seconds, then compile
  setTimeout(() => {
    heroSection.classList.remove('compiling');
    heroSection.classList.add('compiled');
    
    // Decode Hero tags and headings
    const heroTitle = heroSection.querySelector('h1 span');
    const heroTag = heroSection.querySelector('.section-tag');
    if (heroTitle) decodeText(heroTitle);
    if (heroTag) decodeText(heroTag);
    
    // Setup Scroll Observers for other section boxes
    setupScrollCompileObservers();
  }, 1200);
}

/**
 * Phase 3: Attaches viewport observers to compile sections on scroll.
 */
function setupScrollCompileObservers() {
  const sections = document.querySelectorAll('.compile-box:not(#home)');
  
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.12 // Trigger when 12% of the section is visible
  };
  
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const section = entry.target;
        
        // Compile the section with a sweep scanner delay
        setTimeout(() => {
          section.classList.remove('compiling');
          section.classList.add('compiled');
          
          // Trigger matrix text decoder inside section headers
          const sectionTag = section.querySelector('.section-tag');
          if (sectionTag) decodeText(sectionTag);
        }, 1200);
        
        // Stop observing this compiled section
        observer.unobserve(section);
      }
    });
  }, observerOptions);
  
  sections.forEach(section => {
    observer.observe(section);
  });
}

/**
 * Attaches hamburger toggle listeners to open and close the mobile navigation drawer.
 */
function setupMobileMenu() {
  const toggle = document.getElementById('mobile-menu-toggle');
  const nav = document.getElementById('nav-menu');
  const links = document.querySelectorAll('#nav-menu a, #nav-menu button');
  
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('active');
      nav.classList.toggle('active');
    });
    
    // Close mobile menu drawer when any link or action button inside is clicked
    links.forEach(link => {
      link.addEventListener('click', () => {
        toggle.classList.remove('active');
        nav.classList.remove('active');
      });
    });
  }
}

/**
 * Creates an invisible attraction field around the cursor for interactive elements.
 * Selected links, buttons, and icons shift 2-4px towards the mouse when in proximity.
 */
function setupGravityField() {
  const gravityElements = document.querySelectorAll(
    '.btn-primary, .btn-secondary, .cta-button, .nav-cta-mobile, header nav a, .logo-container, .hero-logo-wrapper, .logo-svg, .service-card'
  );
  
  const threshold = 120; // Proximity trigger range (pixels)
  const maxPull = 3.5;   // Maximum attraction offset (pixels)
  
  window.addEventListener('mousemove', (e) => {
    // Only calculate when browser supports transitions or motion
    const matchesMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (matchesMotionQuery.matches) return;
    
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    
    gravityElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      const elX = rect.left + rect.width / 2;
      const elY = rect.top + rect.height / 2;
      
      const distX = mouseX - elX;
      const distY = mouseY - elY;
      const distance = Math.hypot(distX, distY);
      
      if (distance < threshold) {
        // Linear interpolation of force: stronger pull closer to the center
        const force = (1 - distance / threshold) * maxPull;
        const angle = Math.atan2(distY, distX);
        
        const pullX = Math.cos(angle) * force;
        const pullY = Math.sin(angle) * force;
        
        el.style.setProperty('--gravity-x', `${pullX}px`);
        el.style.setProperty('--gravity-y', `${pullY}px`);
      } else {
        // Reset properties
        el.style.setProperty('--gravity-x', '0px');
        el.style.setProperty('--gravity-y', '0px');
      }
    });
  });
}

/**
 * Scroll and Stage Coordinator for the Cinematic Process Timeline.
 * Tracks screen depth and dynamically sets CSS variable triggers, text indicators,
 * and evolving website layout state frames.
 */
function initProcessScrollTimeline() {
  const section = document.querySelector('.process-scroll-section');
  if (!section) return;

  const bgText = document.getElementById('process-bg-text');
  const website = document.getElementById('evolving-website');
  
  const stageIndicators = document.querySelectorAll('.stage-indicator-item');
  const stageDescs = document.querySelectorAll('.stage-desc-item');

  const stageNames = ['DISCOVER', 'BUILD', 'CONNECT', 'GROW'];

  function updateTimeline() {
    // Respect prefers-reduced-motion
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (motionQuery.matches) {
      if (website) website.className = 'evolving-website state-4 converged';
      return;
    }

    const isMobile = window.innerWidth <= 868;
    if (isMobile) {
      // Clean inline CSS properties on mobile viewports
      section.style.removeProperty('--process-progress');
      section.style.removeProperty('--phase-1-progress');
      section.style.removeProperty('--phase-2-progress');
      section.style.removeProperty('--phase-3-progress');
      section.style.removeProperty('--phase-4-progress');
      
      if (website) {
        website.className = 'evolving-website state-4';
      }
      return;
    }

    const rect = section.getBoundingClientRect();
    const sectionHeight = rect.height;
    const viewportHeight = window.innerHeight;

    // Scroll metrics bounds
    const topOffset = rect.top;
    const scrollRange = sectionHeight - viewportHeight;
    
    let p = -topOffset / scrollRange;
    p = Math.max(0, Math.min(1, p));

    section.style.setProperty('--process-progress', p);

    // Phase 1: 0.0 -> 0.25 (Discover)
    let p1 = p / 0.25;
    p1 = Math.max(0, Math.min(1, p1));
    section.style.setProperty('--phase-1-progress', p1);

    // Phase 2: 0.25 -> 0.50 (Build)
    let p2 = (p - 0.25) / 0.25;
    p2 = Math.max(0, Math.min(1, p2));
    section.style.setProperty('--phase-2-progress', p2);

    // Phase 3: 0.50 -> 0.75 (Connect)
    let p3 = (p - 0.50) / 0.25;
    p3 = Math.max(0, Math.min(1, p3));
    section.style.setProperty('--phase-3-progress', p3);

    // Phase 4: 0.75 -> 1.00 (Grow)
    let p4 = (p - 0.75) / 0.25;
    p4 = Math.max(0, Math.min(1, p4));
    section.style.setProperty('--phase-4-progress', p4);

    // Find the active index phase
    let activeIndex = 0;
    if (p >= 0.75) {
      activeIndex = 3;
    } else if (p >= 0.50) {
      activeIndex = 2;
    } else if (p >= 0.25) {
      activeIndex = 1;
    } else {
      activeIndex = 0;
    }

    // Parallax update background label
    if (bgText) {
      bgText.innerText = stageNames[activeIndex];
      const midPoint = activeIndex * 0.25 + 0.125;
      bgText.style.opacity = Math.max(0.003, 0.015 - Math.abs(p - midPoint) * 0.04);
      bgText.style.transform = `translateX(${(p - (activeIndex * 0.25)) * -60}px)`;
    }

    // Update Evolving Website state classes
    if (website) {
      website.className = `evolving-website state-${activeIndex + 1}`;
      if (p >= 0.95) {
        website.classList.add('converged');
      } else {
        website.classList.remove('converged');
      }
    }

    // Toggle Left indicators
    stageIndicators.forEach((ind, index) => {
      if (index === activeIndex) {
        ind.className = 'stage-indicator-item active';
      } else if (index < activeIndex) {
        ind.className = 'stage-indicator-item completed';
      } else {
        ind.className = 'stage-indicator-item';
      }
    });

    // Toggle Left Stage descriptions
    stageDescs.forEach((desc, index) => {
      if (index === activeIndex) {
        desc.classList.add('active');
      } else {
        desc.classList.remove('active');
      }
    });
  }

  window.addEventListener('scroll', updateTimeline);
  window.addEventListener('resize', updateTimeline);
  updateTimeline();
}

/**
 * Interactive Accordion Coordinator for the "Before We Build" Section.
 * Animates expand/collapse heights, toggles ARIA attributes for screen readers,
 * and handles layout reflows on window resize.
 */
function setupFaqAccordion() {
  const accordion = document.querySelector('.faq-accordion');
  if (!accordion) return;

  const items = accordion.querySelectorAll('.faq-item');

  items.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    const wrapper = item.querySelector('.faq-answer-wrapper');

    trigger.addEventListener('click', () => {
      const isExpanded = trigger.getAttribute('aria-expanded') === 'true';

      // Respect prefers-reduced-motion fallback
      const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      const isReduced = motionQuery.matches;

      // Close all other accordion items
      items.forEach(otherItem => {
        const otherTrigger = otherItem.querySelector('.faq-trigger');
        const otherWrapper = otherItem.querySelector('.faq-answer-wrapper');
        
        if (otherTrigger !== trigger && otherTrigger.getAttribute('aria-expanded') === 'true') {
          closeItem(otherTrigger, otherWrapper, isReduced);
        }
      });

      // Toggle current item
      if (isExpanded) {
        closeItem(trigger, wrapper, isReduced);
      } else {
        openItem(trigger, wrapper, isReduced);
      }
    });
  });

  function openItem(trigger, wrapper, isReduced) {
    if (isReduced) {
      wrapper.style.maxHeight = 'none';
    } else {
      wrapper.style.maxHeight = wrapper.scrollHeight + 'px';
    }
    trigger.setAttribute('aria-expanded', 'true');
  }

  function closeItem(trigger, wrapper, isReduced) {
    if (isReduced) {
      wrapper.style.maxHeight = '0px';
    } else {
      // Force calculated start height for transitions
      wrapper.style.maxHeight = wrapper.scrollHeight + 'px';
      // Flush style changes
      wrapper.offsetHeight; 
      wrapper.style.maxHeight = '0px';
    }
    trigger.setAttribute('aria-expanded', 'false');
  }

  // Adjust open heights on browser window resize to prevent text clipping
  window.addEventListener('resize', () => {
    items.forEach(item => {
      const trigger = item.querySelector('.faq-trigger');
      const wrapper = item.querySelector('.faq-answer-wrapper');
      if (trigger.getAttribute('aria-expanded') === 'true') {
        wrapper.style.maxHeight = wrapper.scrollHeight + 'px';
      }
    });
  });
}

/**
 * HUD Showcase Controller (DOM Inspector, Live Theme Switcher, Performance Telemetry).
 * Handles floating panel layouts, syntax highlight code injections, screen-wide
 * laser transition sweeps, and performance timing counters.
 */
function initHudDashboard() {
  const hud = document.getElementById('octagram-hud');
  if (!hud) return;

  const header = document.getElementById('hud-header');
  const toggleBtn = document.getElementById('hud-toggle-btn');
  const inspectBtn = document.getElementById('hud-inspect-btn');
  const codeBox = document.getElementById('hud-code-box');
  const recalcBtn = document.getElementById('telemetry-recalc-btn');

  const handle = document.getElementById('hud-handle');

  // Minimize/expand HUD horizontally
  const toggleHud = () => {
    hud.classList.toggle('minimized');
    const isMinimized = hud.classList.contains('minimized');
    
    if (toggleBtn) {
      toggleBtn.innerText = isMinimized ? '[ Expand ]' : '[ Collapse ]';
    }
    
    if (handle) {
      const arrow = handle.querySelector('.hud-handle-arrow');
      if (arrow) {
        arrow.innerText = isMinimized ? '<' : '>';
      }
    }
  };
  
  if (handle) handle.addEventListener('click', toggleHud);
  if (header) header.addEventListener('click', toggleHud);

  // 1. Performance Telemetry Calculation
  function calculateTelemetry(isRecalc = false) {
    const latencyVal = document.getElementById('telemetry-latency');
    const edgeVal = document.getElementById('telemetry-edge');
    
    if (isRecalc) {
      if (latencyVal) latencyVal.innerText = '--';
      if (edgeVal) edgeVal.innerText = 'Pinging...';
      
      setTimeout(() => {
        const loadTime = Math.round(performance.now() + Math.random() * 15);
        if (latencyVal) latencyVal.innerHTML = `${loadTime}<span> ms</span>`;
        
        const nodes = ['IAD-Edge-01 (N. Virginia)', 'SFO-Edge-03 (San Francisco)', 'LHR-Edge-02 (London)', 'SIN-Edge-04 (Singapore)', 'ORD-Edge-02 (Chicago)'];
        const randomNode = nodes[Math.floor(Math.random() * nodes.length)];
        if (edgeVal) edgeVal.innerText = randomNode;
      }, 600);
    } else {
      const loadTime = Math.max(10, Math.round(performance.now()));
      if (latencyVal) latencyVal.innerHTML = `${loadTime}<span> ms</span>`;
      
      const nodes = ['IAD-Edge-01 (N. Virginia)', 'SFO-Edge-03 (San Francisco)', 'LHR-Edge-02 (London)', 'SIN-Edge-04 (Singapore)', 'ORD-Edge-02 (Chicago)'];
      const randomNode = nodes[Math.floor(Math.random() * nodes.length)];
      if (edgeVal) edgeVal.innerText = randomNode;
    }
  }

  // Load telemetry metrics
  calculateTelemetry(false);
  recalcBtn.addEventListener('click', () => calculateTelemetry(true));

  // 2. Theme Switching Logic
  const themeBtns = document.querySelectorAll('.hud-theme-btn');
  themeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const theme = btn.getAttribute('data-theme');
      
      // Toggle active states on buttons
      themeBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Trigger Screen laser sweep line
      document.body.classList.add('theme-sweeping');
      
      setTimeout(() => {
        // Apply target stylesheet class to HTML root
        document.documentElement.className = '';
        if (theme !== 'dark') {
          document.documentElement.classList.add(`theme-${theme}`);
        }
      }, 250); // Mid-sweep color transformation

      setTimeout(() => {
        document.body.classList.remove('theme-sweeping');
      }, 750);
    });
  });

  // 3. DOM Inspector Mode
  let isInspectMode = false;
  const inspectableSections = document.querySelectorAll('section, footer');
  
  const sectionSnippets = {
    'home': `<span class="syn-com">&lt;!-- 01 HERO SECTION --&gt;</span>\n<span class="syn-tag">&lt;section</span> <span class="syn-attr">id</span>=<span class="syn-val">"home"</span> <span class="syn-attr">class</span>=<span class="syn-val">"compiled"</span><span class="syn-tag">&gt;</span>\n  <span class="syn-tag">&lt;div</span> <span class="syn-attr">class</span>=<span class="syn-val">"hero-container"</span><span class="syn-tag">&gt;</span>\n    <span class="syn-tag">&lt;h1&gt;</span>BUILT TO PERFORM.<span class="syn-tag">&lt;/h1&gt;</span>\n    <span class="syn-tag">&lt;button</span> <span class="syn-attr">class</span>=<span class="syn-val">"btn-primary"</span><span class="syn-tag">&gt;</span>Compile Web Presence<span class="syn-tag">&lt;/button&gt;</span>\n  <span class="syn-tag">&lt;/div&gt;</span>\n<span class="syn-tag">&lt;/section&gt;</span>`,

    'services': `<span class="syn-com">&lt;!-- 02 CAPABILITIES SECTION --&gt;</span>\n<span class="syn-tag">&lt;section</span> <span class="syn-attr">id</span>=<span class="syn-val">"services"</span> <span class="syn-attr">class</span>=<span class="syn-val">"compiled"</span><span class="syn-tag">&gt;</span>\n  <span class="syn-tag">&lt;div</span> <span class="syn-attr">class</span>=<span class="syn-val">"services-grid"</span><span class="syn-tag">&gt;</span>\n    <span class="syn-tag">&lt;div</span> <span class="syn-attr">class</span>=<span class="syn-val">"service-card"</span><span class="syn-tag">&gt;</span>\n      <span class="syn-tag">&lt;h3&gt;</span>Website Creation<span class="syn-tag">&lt;/h3&gt;</span>\n      <span class="syn-tag">&lt;div</span> <span class="syn-attr">class</span>=<span class="syn-val">"service-demo-panel"</span><span class="syn-tag">&gt;</span>...<span class="syn-tag">&lt;/div&gt;</span>\n    <span class="syn-tag">&lt;/div&gt;</span>\n  <span class="syn-tag">&lt;/div&gt;</span>\n<span class="syn-tag">&lt;/section&gt;</span>`,

    'process': `<span class="syn-com">&lt;!-- 03 SCROLL METHODOLOGY SECTION --&gt;</span>\n<span class="syn-tag">&lt;section</span> <span class="syn-attr">id</span>=<span class="syn-val">"process"</span> <span class="syn-attr">class</span>=<span class="syn-val">"process-scroll-section"</span><span class="syn-tag">&gt;</span>\n  <span class="syn-tag">&lt;div</span> <span class="syn-attr">class</span>=<span class="syn-val">"process-sticky-wrapper"</span><span class="syn-tag">&gt;</span>\n    <span class="syn-tag">&lt;div</span> <span class="syn-attr">class</span>=<span class="syn-val">"evolving-website state-4"</span><span class="syn-tag">&gt;</span>\n      <span class="syn-tag">&lt;div</span> <span class="syn-attr">class</span>=<span class="syn-val">"browser-content-canvas"</span><span class="syn-tag">&gt;</span>...<span class="syn-tag">&lt;/div&gt;</span>\n    <span class="syn-tag">&lt;/div&gt;</span>\n  <span class="syn-tag">&lt;/div&gt;</span>\n<span class="syn-tag">&lt;/section&gt;</span>`,

    'before-we-build': `<span class="syn-com">&lt;!-- 04 OBJECTION ACCORDION SECTION --&gt;</span>\n<span class="syn-tag">&lt;section</span> <span class="syn-attr">id</span>=<span class="syn-val">"before-we-build"</span> <span class="syn-attr">class</span>=<span class="syn-val">"compiled"</span><span class="syn-tag">&gt;</span>\n  <span class="syn-tag">&lt;div</span> <span class="syn-attr">class</span>=<span class="syn-val">"faq-container"</span><span class="syn-tag">&gt;</span>\n    <span class="syn-tag">&lt;div</span> <span class="syn-attr">class</span>=<span class="syn-val">"faq-accordion"</span><span class="syn-tag">&gt;</span>\n      <span class="syn-tag">&lt;button</span> <span class="syn-attr">aria-expanded</span>=<span class="syn-val">"false"</span><span class="syn-tag">&gt;</span>01 What exactly...<span class="syn-tag">&lt;/button&gt;</span>\n    <span class="syn-tag">&lt;/div&gt;</span>\n  <span class="syn-tag">&lt;/div&gt;</span>\n<span class="syn-tag">&lt;/section&gt;</span>`,

    'contact': `<span class="syn-com">&lt;!-- 05 CONTACT FORM SECTION --&gt;</span>\n<span class="syn-tag">&lt;section</span> <span class="syn-attr">id</span>=<span class="syn-val">"contact"</span> <span class="syn-attr">class</span>=<span class="syn-val">"compiled"</span><span class="syn-tag">&gt;</span>\n  <span class="syn-tag">&lt;form</span> <span class="syn-attr">class</span>=<span class="syn-val">"contact-form"</span><span class="syn-tag">&gt;</span>\n    <span class="syn-tag">&lt;input</span> <span class="syn-attr">type</span>=<span class="syn-val">"email"</span> <span class="syn-attr">required</span> <span class="syn-tag">/&gt;</span>\n    <span class="syn-tag">&lt;button</span> <span class="syn-attr">type</span>=<span class="syn-val">"submit"</span><span class="syn-tag">&gt;</span>Submit Inquiry<span class="syn-tag">&lt;/button&gt;</span>\n  <span class="syn-tag">&lt;/form&gt;</span>\n<span class="syn-tag">&lt;/section&gt;</span>`,

    'footer': `<span class="syn-com">&lt;!-- 06 SYSTEM FOOTER --&gt;</span>\n<span class="syn-tag">&lt;footer&gt;</span>\n  <span class="syn-tag">&lt;div</span> <span class="syn-attr">class</span>=<span class="syn-val">"footer-content"</span><span class="syn-tag">&gt;</span>\n    <span class="syn-tag">&lt;span</span> <span class="syn-attr">class</span>=<span class="syn-val">"copyright"</span><span class="syn-tag">&gt;</span>&copy; 2026 Octagram Inc.<span class="syn-tag">&lt;/span&gt;</span>\n  <span class="syn-tag">&lt;/div&gt;</span>\n<span class="syn-tag">&lt;/footer&gt;</span>`
  };

  inspectBtn.addEventListener('click', () => {
    isInspectMode = !isInspectMode;
    inspectBtn.classList.toggle('active');

    if (isInspectMode) {
      codeBox.classList.add('visible');
      codeBox.innerHTML = 'Hover over any section to inspect DOM...';
      
      // Bind hover events to sections
      inspectableSections.forEach(section => {
        section.addEventListener('mouseenter', handleSectionEnter);
        section.addEventListener('mouseleave', handleSectionLeave);
      });
    } else {
      codeBox.classList.remove('visible');
      
      // Cleanup inspect overlays
      inspectableSections.forEach(section => {
        section.classList.remove('inspect-target-hover');
        section.removeEventListener('mouseenter', handleSectionEnter);
        section.removeEventListener('mouseleave', handleSectionLeave);
        const overlay = section.querySelector('.inspect-label-overlay');
        if (overlay) overlay.remove();
      });
    }
  });

  function handleSectionEnter(e) {
    if (!isInspectMode) return;
    const target = e.currentTarget;
    target.classList.add('inspect-target-hover');

    // Create indicator overlay tag showing DOM ID and dimensions
    const rect = target.getBoundingClientRect();
    const idName = target.id || target.tagName.toLowerCase();
    
    // Remove existing overlay first
    const oldOverlay = target.querySelector('.inspect-label-overlay');
    if (oldOverlay) oldOverlay.remove();

    const overlay = document.createElement('span');
    overlay.className = 'inspect-label-overlay';
    overlay.innerText = `${target.tagName.toLowerCase()}#${idName} [${Math.round(rect.width)}px × ${Math.round(rect.height)}px]`;
    target.appendChild(overlay);

    // Swap snippet inside HUD code container
    const snippetKey = target.id || target.tagName.toLowerCase();
    if (sectionSnippets[snippetKey]) {
      codeBox.innerHTML = sectionSnippets[snippetKey];
    } else {
      codeBox.innerHTML = `<span class="syn-tag">&lt;${target.tagName.toLowerCase()}</span> <span class="syn-attr">id</span>=<span class="syn-val">"${idName}"</span><span class="syn-tag">&gt;</span>...<span class="syn-tag">&lt;/${target.tagName.toLowerCase()}&gt;</span>`;
    }
  }

  function handleSectionLeave(e) {
    const target = e.currentTarget;
    target.classList.remove('inspect-target-hover');
    const overlay = target.querySelector('.inspect-label-overlay');
    if (overlay) overlay.remove();
  }
}

/**
 * Click-Activated Random Animations for the Hero Logo.
 * Randomly picks between glitch, spin, 3D flip, or shockwave pulse cycles,
 * temporarily interrupting the floating keyframe animation.
 */
function setupLogoClickAnimations() {
  const logo = document.querySelector('.hero-logo-svg');
  if (!logo) return;

  const animationClasses = ['anim-glitch', 'anim-spin', 'anim-flip', 'anim-pulse'];

  logo.addEventListener('click', () => {
    // Respect prefers-reduced-motion fallback
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (motionQuery.matches) return;

    // Remove any currently running click animations
    animationClasses.forEach(cls => logo.classList.remove(cls));

    // Select a random animation class
    const randomIndex = Math.floor(Math.random() * animationClasses.length);
    const chosenClass = animationClasses[randomIndex];

    // Trigger reflow to restart animation on successive clicks
    logo.offsetWidth;

    // Apply animation class
    logo.classList.add(chosenClass);

    // Clean up class once animation completes to resume slow floating
    const onAnimEnd = () => {
      logo.classList.remove(chosenClass);
      logo.removeEventListener('animationend', onAnimEnd);
    };
    logo.addEventListener('animationend', onAnimEnd);
  });
}

/**
 * Back to Top smooth scroll tracker.
 * Fades button into view when scrolling past the services section,
 * and performs a smooth scroll navigation to the top on tap.
 */
function setupBackToTopButton() {
  const btn = document.getElementById('back-to-top');
  const services = document.getElementById('services');
  if (!btn) return;

  const handleScroll = () => {
    // Cross-browser scroll position retrieval
    const scrollPos = window.pageYOffset || document.documentElement.scrollTop || window.scrollY || 0;
    
    // Set dynamic threshold with a hard fallback if offsets aren't loaded yet
    let threshold = 300;
    if (services && services.offsetTop > 100) {
      threshold = services.offsetTop - 150;
    }
    
    if (scrollPos >= threshold) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  };

  // Bind event listeners
  window.addEventListener('scroll', handleScroll, { passive: true });
  window.addEventListener('resize', handleScroll, { passive: true });

  // Boot calculation immediately and with a small timeout for late layout compile rendering
  handleScroll();
  setTimeout(handleScroll, 400);

  btn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}
