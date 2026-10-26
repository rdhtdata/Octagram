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

  // 4. Mobile Menu Interactivity
  setupMobileMenu();

  // 5. Interactive Digital Build Pipeline (Octagram Methodology)
  initMethodologyPipeline();

  // 6. Before We Build FAQ Accordion
  setupFaqAccordion();

  // 7. Interactive Concierge Drawer
  initConciergeModal();

  // 8. Back to Top smooth scroll button setup
  setupBackToTopButton();

  // 9. Contact Form Configurator Step Deck
  setupContactConfigurator();

  // 10. Before-After Website Slider Setup
  setupBeforeAfterSlider();
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
 * and apply a 3D tilt perspective hover transform on desktop, plus an
 * IntersectionObserver for mobile/tablet to activate animations automatically on scroll.
 */
function setupServiceCardInteractivity() {
  const cards = document.querySelectorAll('.service-card');
  if (!cards.length) return;
  
  // Desktop 3D tilt & mousemove tracking
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

  // Scroll In-View Observer for Mobile & Tablet (Auto-activates animations when card is viewable)
  if ('IntersectionObserver' in window) {
    const observerOptions = {
      root: null,
      rootMargin: '-8% 0px -8% 0px',
      threshold: 0.25
    };

    const cardObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        } else {
          entry.target.classList.remove('in-view');
        }
      });
    }, observerOptions);

    cards.forEach(card => cardObserver.observe(card));
  }
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
 * Octagram Client Concierge Modal Controller.
 * Manages the corner concierge button and modal communication drawer.
 */
function initConciergeModal() {
  const triggerPill = document.getElementById('octagram-os-trigger');
  const modalOverlay = document.getElementById('octagram-hud-modal');
  const closeBtn = document.getElementById('hud-modal-close');
  if (!triggerPill || !modalOverlay) return;

  const openModal = () => {
    modalOverlay.classList.add('active');
    modalOverlay.setAttribute('aria-hidden', 'false');
  };

  const closeModal = () => {
    modalOverlay.classList.remove('active');
    modalOverlay.setAttribute('aria-hidden', 'true');
  };

  triggerPill.addEventListener('click', openModal);
  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  const jumpContactBtn = document.getElementById('concierge-jump-contact');
  if (jumpContactBtn) {
    jumpContactBtn.addEventListener('click', () => {
      closeModal();
    });
  }

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

  // Header & footer logo click smoothly scrolls back to home
  const headerLogo = document.querySelector('.site-header .logo-container');
  if (headerLogo) {
    headerLogo.addEventListener('click', (e) => {
      const homeSection = document.getElementById('home');
      if (homeSection) {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
        if (window.location.hash) {
          history.pushState(null, '', window.location.pathname);
        }
      }
    });
  }
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

  // Handle form submission with client-side validation & safe processing
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('client-name');
    const emailInput = document.getElementById('client-email');
    const messageInput = document.getElementById('client-message');

    const name = nameInput ? nameInput.value.trim().slice(0, 100) : '';
    const email = emailInput ? emailInput.value.trim().slice(0, 120) : '';
    const message = messageInput ? messageInput.value.trim().slice(0, 2000) : '';

    if (!name || name.length < 2) {
      alert('Please enter your name (at least 2 characters).');
      if (nameInput) nameInput.focus();
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailPattern.test(email)) {
      alert('Please enter a valid email address.');
      if (emailInput) emailInput.focus();
      return;
    }

    const selectedTypes = Array.from(document.querySelectorAll('#build-type-grid .active')).map(el => el.textContent.trim());
    const selectedNeeds = Array.from(document.querySelectorAll('#need-type-grid .active')).map(el => el.textContent.trim());

    if (selectedTypes.length === 0 && selectedNeeds.length === 0) {
      alert("Please select at least one option so we know what you're looking for.");
      return;
    }

    const typeStr = selectedTypes.length > 0 ? selectedTypes.join(', ') : 'Not Specified';
    const needsStr = selectedNeeds.length > 0 ? selectedNeeds.join(', ') : 'Not Specified';

    alert(`Thank you, ${name}!\n\nWe've received your inquiry:\nProject Type: ${typeStr}\nServices: ${needsStr}\n\nWe'll be in touch shortly to start the conversation.`);
    
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
 * Sync before-after slider values with masked width clipping and category switching
 */
function setupBeforeAfterSlider() {
  const sliderInput = document.getElementById('slider-range-input');
  const newWebsiteView = document.getElementById('new-website-view');
  const divider = document.getElementById('slider-divider');
  const comparisonBox = document.querySelector('.slider-comparison-box');
  const newWebsiteContent = document.getElementById('new-website-content');
  const categoryTabs = document.querySelectorAll('.showcase-category-tabs .category-tab');
  const contextPill = document.querySelector('.showcase-category-context .context-pill');
  const contextDesc = document.querySelector('.showcase-category-context .context-desc');

  if (!sliderInput || !newWebsiteView || !divider || !comparisonBox || !newWebsiteContent) return;

  const categoryMeta = {
    hospitality: {
      pill: 'HOTEL & RESORT',
      desc: 'From a static 2012 brochure to an immersive, direct-booking luxury experience'
    },
    restaurant: {
      pill: 'RESTAURANT',
      desc: 'From phone-only reservations to seamless live table booking & culinary storytelling'
    },
    cafe: {
      pill: 'CAFÉ & ROASTERY',
      desc: 'From a forgotten paper coupon to interactive brews & 1-click pickup orders'
    },
    bakery: {
      pill: 'BAKERY & PATISSERIE',
      desc: 'From morning phone queues to live batch trackers & online pre-orders'
    },
    ecommerce: {
      pill: 'E-COMMERCE',
      desc: 'From outdated catalog tables to high-converting editorial retail'
    }
  };

  function updateWidths() {
    // Responsive clip-path layout is self-adjusting
  }

  // Set initial slider states
  function applySliderValue(val) {
    comparisonBox.style.setProperty('--split-pos', `${val}%`);
    if (newWebsiteView) {
      newWebsiteView.style.clipPath = `inset(0 0 0 ${val}%)`;
      newWebsiteView.style.webkitClipPath = `inset(0 0 0 ${val}%)`;
    }
    divider.style.left = `${val}%`;
  }

  applySliderValue(sliderInput.value || 33);

  let hasUserInteracted = false;

  // Sync masks on range drag events
  sliderInput.addEventListener('input', (e) => {
    hasUserInteracted = true;
    applySliderValue(e.target.value);
  });

  const categories = ['hospitality', 'restaurant', 'cafe', 'bakery', 'ecommerce'];
  let currentCategoryIndex = 0;

  const mobilePrevBtn = document.getElementById('mobile-template-prev');
  const mobileNextBtn = document.getElementById('mobile-template-next');
  const mobileCarouselDots = document.querySelectorAll('#mobile-carousel-dots .mobile-carousel-dot');
  const mobileSwipeGuide = document.getElementById('mobile-swipe-guide');

  function dismissSwipeGuide() {
    if (mobileSwipeGuide && !mobileSwipeGuide.classList.contains('dismissed')) {
      mobileSwipeGuide.classList.add('dismissed');
    }
  }

  if (mobileSwipeGuide) {
    mobileSwipeGuide.addEventListener('click', dismissSwipeGuide);
  }

  function setCategory(index, direction) {
    // Normalize index within bounds
    if (index < 0) {
      index = categories.length - 1;
    } else if (index >= categories.length) {
      index = 0;
    }
    currentCategoryIndex = index;
    const cat = categories[currentCategoryIndex];

    // Update active category tabs
    const tabsContainer = document.querySelector('.showcase-category-tabs');
    categoryTabs.forEach((t) => {
      const isActive = t.getAttribute('data-category') === cat;
      t.classList.toggle('active', isActive);
      t.setAttribute('aria-selected', isActive ? 'true' : 'false');
      if (isActive && tabsContainer && window.innerWidth <= 600) {
        try {
          const targetLeft = t.offsetLeft - (tabsContainer.clientWidth / 2) + (t.offsetWidth / 2);
          tabsContainer.scrollTo({ left: Math.max(0, targetLeft), behavior: 'smooth' });
        } catch (err) {}
      }
    });

    // Enforce horizontal alignment lock on document viewport
    if (window.scrollX && window.scrollX !== 0) {
      window.scrollTo({ left: 0, top: window.scrollY });
    }

    // Update category panels in both Before & After views with slide transitions
    const allPanels = document.querySelectorAll('.slider-comparison-box .category-panel');
    allPanels.forEach(panel => {
      const matches = panel.getAttribute('data-panel') === cat;
      panel.classList.remove('slide-from-right', 'slide-from-left');
      if (matches) {
        panel.classList.add('active');
        if (direction === 'right') {
          panel.classList.add('slide-from-right');
        } else if (direction === 'left') {
          panel.classList.add('slide-from-left');
        }
      } else {
        panel.classList.remove('active');
      }
    });

    if (direction) {
      setTimeout(() => {
        allPanels.forEach(panel => {
          panel.classList.remove('slide-from-right', 'slide-from-left');
        });
      }, 350);
    }

    // Update carousel dots
    mobileCarouselDots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentCategoryIndex);
    });

    // Update context text
    if (categoryMeta[cat]) {
      if (contextPill) contextPill.textContent = categoryMeta[cat].pill;
      if (contextDesc) contextDesc.textContent = categoryMeta[cat].desc;
    }

    // Keep widths in sync
    updateWidths();
  }

  // Category Tab Switching
  if (categoryTabs.length > 0) {
    categoryTabs.forEach((tab, index) => {
      tab.addEventListener('click', () => {
        dismissSwipeGuide();
        const cat = tab.getAttribute('data-category');
        const catIdx = categories.indexOf(cat);
        const direction = catIdx > currentCategoryIndex ? 'right' : (catIdx < currentCategoryIndex ? 'left' : null);
        setCategory(catIdx !== -1 ? catIdx : index, direction);
      });
    });
  }

  // Mobile Carousel Buttons & Dots Handlers
  if (mobilePrevBtn) {
    mobilePrevBtn.addEventListener('click', () => {
      dismissSwipeGuide();
      setCategory(currentCategoryIndex - 1, 'left');
    });
  }
  if (mobileNextBtn) {
    mobileNextBtn.addEventListener('click', () => {
      dismissSwipeGuide();
      setCategory(currentCategoryIndex + 1, 'right');
    });
  }
  if (mobileCarouselDots.length > 0) {
    mobileCarouselDots.forEach((dot, idx) => {
      dot.addEventListener('click', () => {
        dismissSwipeGuide();
        const direction = idx > currentCategoryIndex ? 'right' : (idx < currentCategoryIndex ? 'left' : null);
        setCategory(idx, direction);
      });
    });
  }

  // Mobile Transformation Mode Toggle Switcher
  const mobileToggleBtns = document.querySelectorAll('.mobile-showcase-toggle .mobile-toggle-btn');

  function setMobileViewMode(mode) {
    if (mode === 'before') {
      comparisonBox.classList.remove('mobile-mode-after');
      comparisonBox.classList.add('mobile-mode-before');
    } else {
      comparisonBox.classList.remove('mobile-mode-before');
      comparisonBox.classList.add('mobile-mode-after');
    }

    mobileToggleBtns.forEach(btn => {
      const isCurrent = btn.getAttribute('data-mobile-mode') === mode;
      btn.classList.toggle('active', isCurrent);
      btn.setAttribute('aria-selected', isCurrent ? 'true' : 'false');
    });
  }

  mobileToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      dismissSwipeGuide();
      const mode = btn.getAttribute('data-mobile-mode');
      setMobileViewMode(mode);
    });
  });

  // Mobile Touch Swipe Support on Comparison Box (Left/Right Swipes between industry templates)
  let touchStartX = 0;
  let touchStartY = 0;
  let touchStartTime = 0;

  comparisonBox.addEventListener('touchstart', (e) => {
    if (window.innerWidth > 600 || !e.touches || e.touches.length === 0) return;
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
    touchStartTime = Date.now();
  }, { passive: true });

  comparisonBox.addEventListener('touchend', (e) => {
    if (window.innerWidth > 600 || !e.changedTouches || e.changedTouches.length === 0) return;
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    const diffX = touchEndX - touchStartX;
    const diffY = touchEndY - touchStartY;
    const elapsed = Date.now() - touchStartTime;

    // Detect horizontal swipe gesture (at least 35px, predominantly horizontal, within 750ms)
    if (Math.abs(diffX) > 35 && Math.abs(diffX) > Math.abs(diffY) * 1.25 && elapsed < 750) {
      dismissSwipeGuide();
      if (diffX < 0) {
        // Swiped Left -> go to NEXT industry template
        setCategory(currentCategoryIndex + 1, 'right');
      } else {
        // Swiped Right -> go to PREVIOUS industry template
        setCategory(currentCategoryIndex - 1, 'left');
      }
    }
  }, { passive: true });

  // Subtle initial nudge animation when section is in view to invite interaction (Desktop / Tablet only)
  const showcaseSection = document.getElementById('showcase');
  if (showcaseSection && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasUserInteracted && window.innerWidth > 600) {
          observer.disconnect();
          
          let startVal = parseFloat(sliderInput.value) || 33;
          let targetVal = 46;
          let startTime = null;
          const duration = 1200;

          function animateNudge(time) {
            if (hasUserInteracted) return;
            if (!startTime) startTime = time;
            const progress = (time - startTime) / duration;

            if (progress < 1) {
              const offset = Math.sin(progress * Math.PI) * (targetVal - startVal);
              const currentVal = startVal + offset;
              sliderInput.value = currentVal;
              applySliderValue(currentVal);
              requestAnimationFrame(animateNudge);
            } else {
              sliderInput.value = startVal;
              applySliderValue(startVal);
            }
          }

          setTimeout(() => {
            if (!hasUserInteracted) {
              requestAnimationFrame(animateNudge);
            }
          }, 400);
        }
      });
    }, { threshold: 0.3 });

    observer.observe(showcaseSection);
  }
}
