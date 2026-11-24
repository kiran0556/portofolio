/**
 * Main Application Logic & Interactivity
 */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initTypewriter();
  initNavScroll();
  initStatCounters();
  initProjectFilters();
  initSkillFilters();
  initContactForm();
  initCopyButtons();
});

/* ==========================================================================
   Theme Toggle (Dark / Light)
   ========================================================================== */
function initThemeToggle() {
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const themeIcon = document.getElementById('theme-icon');
  const html = document.documentElement;

  // Check saved preference or default to dark
  const savedTheme = localStorage.getItem('theme') || 'dark';
  if (savedTheme === 'light') {
    html.classList.add('light');
    if (themeIcon) {
      themeIcon.classList.remove('fa-moon');
      themeIcon.classList.add('fa-sun');
    }
  } else {
    html.classList.remove('light');
    if (themeIcon) {
      themeIcon.classList.remove('fa-sun');
      themeIcon.classList.add('fa-moon');
    }
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const isLight = html.classList.toggle('light');
      localStorage.setItem('theme', isLight ? 'light' : 'dark');

      if (themeIcon) {
        if (isLight) {
          themeIcon.classList.remove('fa-moon');
          themeIcon.classList.add('fa-sun');
        } else {
          themeIcon.classList.remove('fa-sun');
          themeIcon.classList.add('fa-moon');
        }
      }

      if (window.particleNetwork) {
        window.particleNetwork.refreshTheme();
      }
    });
  }
}

/* ==========================================================================
   Typewriter Animation
   ========================================================================== */
function initTypewriter() {
  const element = document.getElementById('typewriter-text');
  if (!element) return;

  const roles = [
    'AI & Machine Learning Engineer',
    'Full-Stack Web Developer (React / MERN)',
    'Data Science & Predictive Modeling',
    'Problem Solver (300+ LeetCode DSA)'
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 75;

  function type() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      element.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 35;
    } else {
      element.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 80;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      // Pause at end of text
      typingSpeed = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typingSpeed = 400;
    }

    setTimeout(type, typingSpeed);
  }

  type();
}

/* ==========================================================================
   Navigation Scroll & Active Spy
   ========================================================================== */
function initNavScroll() {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    // Close mobile menu on link click
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  // Active section spy on scroll
  window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      const sectionId = section.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        current = sectionId;
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('text-sky-400', 'font-semibold');
      link.classList.add('text-slate-300');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('text-sky-400', 'font-semibold');
        link.classList.remove('text-slate-300');
      }
    });
  });
}

/* ==========================================================================
   Animated Statistics Counters
   ========================================================================== */
function initStatCounters() {
  const statElements = document.querySelectorAll('.counter-val');
  if (!statElements.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-target'), 10);
        const suffix = el.getAttribute('data-suffix') || '';
        animateValue(el, 0, target, 1500, suffix);
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  statElements.forEach(el => observer.observe(el));

  function animateValue(obj, start, end, duration, suffix) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      obj.innerHTML = Math.floor(easeProgress * (end - start) + start) + suffix;
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        obj.innerHTML = end + suffix;
      }
    };
    window.requestAnimationFrame(step);
  }
}

/* ==========================================================================
   Project Category Filtering
   ========================================================================== */
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.project-filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('bg-sky-500', 'text-white', 'shadow-lg', 'shadow-sky-500/25');
        b.classList.add('bg-slate-800/80', 'text-slate-300', 'hover:bg-slate-700');
      });

      btn.classList.add('bg-sky-500', 'text-white', 'shadow-lg', 'shadow-sky-500/25');
      btn.classList.remove('bg-slate-800/80', 'text-slate-300', 'hover:bg-slate-700');

      const category = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const cardCat = card.getAttribute('data-category');
        if (category === 'all' || cardCat === category) {
          card.style.display = 'block';
          card.classList.add('animate-fadeIn');
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================================================
   Skill Category Filtering
   ========================================================================== */
function initSkillFilters() {
  const skillTabs = document.querySelectorAll('.skill-filter-btn');
  const skillGroups = document.querySelectorAll('.skill-group');

  skillTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      skillTabs.forEach(t => {
        t.classList.remove('border-sky-400', 'text-sky-400', 'bg-sky-500/10');
        t.classList.add('border-transparent', 'text-slate-400', 'hover:text-slate-200');
      });

      tab.classList.add('border-sky-400', 'text-sky-400', 'bg-sky-500/10');
      tab.classList.remove('border-transparent', 'text-slate-400', 'hover:text-slate-200');

      const target = tab.getAttribute('data-skill-group');

      skillGroups.forEach(group => {
        if (target === 'all' || group.getAttribute('data-group') === target) {
          group.style.display = 'block';
        } else {
          group.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================================================
   Resume Modal Handlers
   ========================================================================== */
function openResumeModal() {
  const modal = document.getElementById('resume-modal');
  if (!modal) return;
  modal.classList.remove('modal-hidden');
  modal.classList.add('modal-visible');
  document.body.style.overflow = 'hidden';
}

function closeResumeModal() {
  const modal = document.getElementById('resume-modal');
  if (!modal) return;
  modal.classList.remove('modal-visible');
  modal.classList.add('modal-hidden');
  document.body.style.overflow = 'auto';
}

/* ==========================================================================
   Copy to Clipboard & Toast System
   ========================================================================== */
function initCopyButtons() {
  const copyButtons = document.querySelectorAll('[data-copy]');
  copyButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const text = btn.getAttribute('data-copy');
      const label = btn.getAttribute('data-copy-label') || 'Copied to clipboard';

      if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
          showToast(`✓ ${label}: ${text}`);
        });
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast(`✓ ${label}: ${text}`);
      }
    });
  });
}

function showToast(message) {
  let toast = document.getElementById('toast-notification');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast-notification';
    toast.className = 'fixed bottom-6 right-6 z-50 px-4 py-3 rounded-xl bg-slate-900 border border-sky-500/40 text-sky-300 text-sm font-medium shadow-2xl flex items-center gap-2 transform transition-all duration-300 translate-y-10 opacity-0';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<i class="fa-solid fa-circle-check text-emerald-400"></i> ${message}`;
  toast.classList.remove('translate-y-10', 'opacity-0');
  toast.classList.add('translate-y-0', 'opacity-100');

  setTimeout(() => {
    toast.classList.add('translate-y-10', 'opacity-0');
    toast.classList.remove('translate-y-0', 'opacity-100');
  }, 2800);
}

/* ==========================================================================
   Contact Form Validation & Submission
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('portfolio-contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('contact-name').value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const subject = document.getElementById('contact-subject').value.trim();
    const message = document.getElementById('contact-message').value.trim();

    if (!name || !email || !message) {
      showToast('⚠️ Please fill in all required fields.');
      return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;

    submitBtn.disabled = true;
    submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin mr-2"></i> Sending Message...`;

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = `<i class="fa-solid fa-check mr-2"></i> Message Sent!`;
      submitBtn.classList.remove('from-sky-500', 'to-indigo-600');
      submitBtn.classList.add('from-emerald-500', 'to-teal-600');

      showToast(`Thank you, ${name}! Your message has been sent to Kiran.`);
      form.reset();

      setTimeout(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.classList.remove('from-emerald-500', 'to-teal-600');
        submitBtn.classList.add('from-sky-500', 'to-indigo-600');
      }, 3500);
    }, 1000);
  });
}
