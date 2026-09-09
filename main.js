/**
 * Octagram - Modern Interactivity & Progressive Enhancement Fallbacks
 * Conforms to 2026 Web Standards
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Header Scroll Indicator & CTA triggers
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  const navCta = document.getElementById('nav-cta-mobile');
  const headerCta = document.getElementById('header-cta-desktop');
  const contactSection = document.getElementById('contact');
  [navCta, headerCta].forEach(btn => {
    if (btn && contactSection) {
      btn.addEventListener('click', () => contactSection.scrollIntoView({ behavior: 'smooth' }));
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

  // 7. Interactive Digital Build Pipeline (Octagram Methodology)
  initMethodologyPipeline();

  // 8. Before We Build FAQ Accordion
  setupFaqAccordion();

  // 9. Interactive HUD Dashboard (Inspectors, Themes, Telemetry)
  initHudDashboard();

  // 10. Playful click-activated animations for the Hero Logo
  setupLogoClickAnimations();

  // 11. Back to Top smooth scroll button setup
  setupBackToTopButton();

  // 12. Contact Form Configurator Step Deck
  setupContactConfigurator();

  // 12.5. Before-After Website Slider Setup
  setupBeforeAfterSlider();

  // 13. Self-building website compiler initiation
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
 * Guarantees that the final text always resolves accurately to the pristine target string.
 */
function decodeText(element) {
  if (!element) return;
  
  // 1. Cache pristine target text on first invocation to prevent mid-animation corruption
  if (!element.dataset.originalText) {
    element.dataset.originalText = element.textContent.trim();
  }
  const originalText = element.dataset.originalText;
  
  // 2. Clear any running decode animation on this element to prevent race conditions
  if (element._decodeInterval) {
    clearInterval(element._decodeInterval);
    element._decodeInterval = null;
  }
  
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&';
  let iterations = 0;
  
  element._decodeInterval = setInterval(() => {
    element.textContent = originalText
      .split('')
      .map((char, index) => {
        if (index < iterations) {
          return originalText[index];
        }
        if (/\s/.test(char)) return char;
        return chars[Math.floor(Math.random() * chars.length)];
      })
      .join('');
    
    if (iterations >= originalText.length) {
      clearInterval(element._decodeInterval);
      element._decodeInterval = null;
      element.textContent = originalText; // Ensure exact final text matches 100%
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
    
    // Decode Hero tags and headings (all spans inside h1)
    const heroTitles = heroSection.querySelectorAll('h1 span');
    const heroTag = heroSection.querySelector('.section-tag');
    heroTitles.forEach(span => decodeText(span));
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
 * Interactive Stage & Progression Coordinator for Octagram Methodology
 * Uses lightweight IntersectionObserver to activate stages and illuminate the pipeline spine
 * without hijacking scroll, trapping touch gestures, or degrading performance.
 */
function initMethodologyPipeline() {
  const section = document.querySelector('.methodology-pipeline-section');
  if (!section) return;

  const stages = Array.from(section.querySelectorAll('.pipeline-stage'));
  const spineGlow = section.querySelector('.pipeline-spine-glow');

  if (!stages.length) return;

  // Track active stage with IntersectionObserver
  let currentActiveStageIndex = 0;

  const ribbonSteps = Array.from(section.querySelectorAll('.ribbon-step'));

  function updateSpineAndStages(activeIndex) {
    currentActiveStageIndex = activeIndex;

    stages.forEach((stage, idx) => {
      if (idx === activeIndex) {
        stage.classList.add('is-active');
        stage.classList.remove('is-passed');
      } else if (idx < activeIndex) {
        stage.classList.add('is-passed');
        stage.classList.remove('is-active');
      } else {
        stage.classList.remove('is-active', 'is-passed');
      }
    });

    ribbonSteps.forEach((step, idx) => {
      if (idx === activeIndex) {
        step.classList.add('is-active-step');
      } else {
        step.classList.remove('is-active-step');
      }
    });

    if (spineGlow) {
      // Calculate continuous progress percentage along the 5 stages
      const progressPercent = Math.min(100, Math.max(10, ((activeIndex + 1) / stages.length) * 100));
      spineGlow.style.height = `${progressPercent}%`;
    }
  }

  // Set default initial state (Stage 1 active)
  updateSpineAndStages(0);

  // Click ribbon step to smooth scroll to stage
  ribbonSteps.forEach((step, idx) => {
    step.style.cursor = 'pointer';
    step.addEventListener('click', () => {
      if (stages[idx]) {
        stages[idx].scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  });

  // Respect prefers-reduced-motion
  const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (!motionQuery.matches && 'IntersectionObserver' in window) {
    const observerOptions = {
      root: null,
      rootMargin: '-15% 0px -25% 0px',
      threshold: [0.15, 0.4, 0.7]
    };

    const stageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const stageIndex = stages.indexOf(entry.target);
          if (stageIndex !== -1) {
            updateSpineAndStages(stageIndex);
          }
        }
      });
    }, observerOptions);

    stages.forEach((stage) => stageObserver.observe(stage));
  }
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
 * Octagram OS Dashboard & Telemetry Console Controller.
 * Controls the subtle corner status pill, modal console drawer,
 * genuine runtime telemetry calculations, theme switcher,
 * and optional Technical Mode blueprint overlays.
 */
function initHudDashboard() {
  const triggerPill = document.getElementById('octagram-os-trigger');
  const modalOverlay = document.getElementById('octagram-hud-modal');
  const closeBtn = document.getElementById('hud-modal-close');
  if (!triggerPill || !modalOverlay) return;

  const latencyVal = document.getElementById('telemetry-latency');
  const networkVal = document.getElementById('telemetry-network');
  const viewportVal = document.getElementById('telemetry-viewport');
  const sectionVal = document.getElementById('telemetry-section');
  const techCheckbox = document.getElementById('tech-mode-checkbox');

  // Open / Close Modal Drawer
  const openModal = () => {
    modalOverlay.classList.add('active');
    modalOverlay.setAttribute('aria-hidden', 'false');
    updateLiveTelemetry();
  };

  const closeModal = () => {
    modalOverlay.classList.remove('active');
    modalOverlay.setAttribute('aria-hidden', 'true');
  };

  triggerPill.addEventListener('click', openModal);
  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  // Close on backdrop click
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });

  // 1. Live Genuine Telemetry Update
  function updateLiveTelemetry() {
    if (latencyVal) {
      const loadTime = Math.max(8, Math.round(performance.now()));
      latencyVal.innerHTML = `${loadTime}<span> ms</span>`;
    }

    if (networkVal) {
      networkVal.textContent = navigator.onLine ? 'ONLINE' : 'OFFLINE';
      networkVal.className = `m-value m-status ${navigator.onLine ? '' : 'm-offline'}`;
    }

    if (viewportVal) {
      viewportVal.textContent = `${window.innerWidth} × ${window.innerHeight}px`;
    }
  }

  window.addEventListener('resize', () => {
    if (viewportVal && modalOverlay.classList.contains('active')) {
      viewportVal.textContent = `${window.innerWidth} × ${window.innerHeight}px`;
    }
  });

  // 2. Active Section Observer for Telemetry
  const allSections = document.querySelectorAll('section, footer');
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id ? `#${entry.target.id.toUpperCase()}` : entry.target.tagName;
        if (sectionVal) sectionVal.textContent = id;
      }
    });
  }, { threshold: 0.3 });

  allSections.forEach(sec => sectionObserver.observe(sec));

  // 3. Theme Switching Logic
  const themeBtns = document.querySelectorAll('.hud-theme-pill');
  themeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const theme = btn.getAttribute('data-theme');
      themeBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      document.body.classList.add('theme-sweeping');
      setTimeout(() => {
        document.documentElement.className = '';
        if (theme !== 'dark') {
          document.documentElement.classList.add(`theme-${theme}`);
        }
      }, 250);

      setTimeout(() => {
        document.body.classList.remove('theme-sweeping');
      }, 750);
    });
  });

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

    // Re-scramble hero heading text spans and tag simultaneously!
    const heroSection = document.getElementById('home');
    if (heroSection) {
      const heroTitles = heroSection.querySelectorAll('h1 span');
      const heroTag = heroSection.querySelector('.section-tag');
      heroTitles.forEach(span => decodeText(span));
      if (heroTag) decodeText(heroTag);
    }

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

/**
 * Premium Contact form config deck step wizard.
 * Handles capsule clicks, active glows, progressive drawer expansions,
 * and compiles configurations on submission.
 */
function setupContactConfigurator() {
  const form = document.getElementById('presence-form');
  if (!form) return;

  const capsules = form.querySelectorAll('.config-capsule');
  const nextBtn = document.getElementById('config-next-btn');
  const drawer = document.getElementById('final-details-drawer');
  const clientNameInput = document.getElementById('client-name');

  // Toggle active class on capsules
  capsules.forEach(capsule => {
    capsule.addEventListener('click', () => {
      const parentGrid = capsule.parentElement;
      
      if (parentGrid.id === 'build-type-grid') {
        // Step 1: WHAT ARE YOU BUILDING (select single option at a time)
        const siblings = parentGrid.querySelectorAll('.config-capsule');
        siblings.forEach(sib => {
          if (sib !== capsule) sib.classList.remove('active');
        });
      }
      
      capsule.classList.toggle('active');
    });
  });

  // Reveal progressive details drawer
  if (nextBtn && drawer) {
    nextBtn.addEventListener('click', () => {
      // Expand details container
      drawer.classList.add('expanded');
      drawer.style.maxHeight = drawer.scrollHeight + 'px';
      
      // Hide the next step bridge button once clicked
      nextBtn.classList.add('hidden');

      // Autofocus the Name input for immediate action
      if (clientNameInput) {
        setTimeout(() => {
          clientNameInput.focus();
        }, 150);
      }
    });
  }

  // Handle form submission to compile configurations
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('client-name').value;
    const email = document.getElementById('client-email').value;
    const message = document.getElementById('client-message').value;

    const selectedTypes = Array.from(document.querySelectorAll('#build-type-grid .active')).map(el => el.textContent);
    const selectedNeeds = Array.from(document.querySelectorAll('#need-type-grid .active')).map(el => el.textContent);

    if (selectedTypes.length === 0 && selectedNeeds.length === 0) {
      alert("Please select at least one option to compile your setup.");
      return;
    }

    const typeStr = selectedTypes.length > 0 ? selectedTypes.join(', ') : 'Not Specified';
    const needsStr = selectedNeeds.length > 0 ? selectedNeeds.join(', ') : 'Not Specified';

    alert(`Compilation Success!\n\nName: ${name}\nEmail: ${email}\nBuilding: ${typeStr}\nNeeds: ${needsStr}\nDetails: ${message || 'None provided'}\n\nOur system has queued your digital compilation request.`);
    
    // Clear inputs and active classes
    form.reset();
    capsules.forEach(capsule => capsule.classList.remove('active'));
    if (drawer) {
      drawer.classList.remove('expanded');
      drawer.style.maxHeight = '0';
    }
    if (nextBtn) {
      nextBtn.classList.remove('hidden');
    }
  });
}

/**
 * Sync before-after slider values with masked width clipping
 */
function setupBeforeAfterSlider() {
  const sliderInput = document.getElementById('slider-range-input');
  const newWebsiteView = document.getElementById('new-website-view');
  const divider = document.getElementById('slider-divider');
  const comparisonBox = document.querySelector('.slider-comparison-box');
  const newWebsiteContent = document.getElementById('new-website-content');

  if (!sliderInput || !newWebsiteView || !divider || !comparisonBox || !newWebsiteContent) return;

  function updateWidths() {
    const boxWidth = comparisonBox.getBoundingClientRect().width;
    newWebsiteContent.style.width = boxWidth + 'px';
  }

  // Initial alignment
  updateWidths();
  
  // Set initial slider states (50% split)
  const initialVal = sliderInput.value;
  newWebsiteView.style.width = `${100 - initialVal}%`;
  divider.style.left = `${initialVal}%`;

  // Sync content frame width on browser resizing
  window.addEventListener('resize', updateWidths);

  // Sync masks on range drag events
  sliderInput.addEventListener('input', (e) => {
    const val = e.target.value;
    newWebsiteView.style.width = `${100 - val}%`;
    divider.style.left = `${val}%`;
  });
}
