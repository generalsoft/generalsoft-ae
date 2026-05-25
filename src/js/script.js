// GeneralSoft Main JavaScript
document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const nav = document.querySelector('nav');
  if (nav) {
    const menuToggle = document.createElement('button');
    menuToggle.className = 'menu-toggle';
    menuToggle.setAttribute('aria-label', 'Toggle navigation menu');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.innerHTML = '<span></span><span></span><span></span>';
    nav.prepend(menuToggle);

    menuToggle.addEventListener('click', function() {
      const navLinks = this.parentElement.querySelector('.nav-links');
      if (navLinks) {
        const isExpanded = navLinks.classList.contains('active');
        menuToggle.setAttribute('aria-expanded', !isExpanded);
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('active');
      }
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Header scroll effect
  const header = document.querySelector('header');
  if (header) {
    let lastScroll = 0;
    window.addEventListener('scroll', function() {
      const currentScroll = window.pageYOffset;
      if (currentScroll > 100) {
        header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
      } else {
        header.style.boxShadow = 'none';
      }
      lastScroll = currentScroll;
    });
  }

  // Hero Carousel
  const heroTrack = document.querySelector('.hero-carousel-track');
  if (heroTrack) {
    const slides = heroTrack.querySelectorAll('.hero-carousel-slide');
    const dotsContainer = document.querySelector('.hero-carousel-dots');
    const prevBtn = document.querySelector('.hero-carousel-prev');
    const nextBtn = document.querySelector('.hero-carousel-next');
    let currentIndex = 0;
    let autoplayInterval;
    const AUTOPLAY_DELAY = 5000; // 5 seconds

    // Create dots
    slides.forEach((_, index) => {
      const dot = document.createElement('button');
      dot.className = 'hero-carousel-dot' + (index === 0 ? ' active' : '');
      dot.setAttribute('aria-label', 'Go to slide ' + (index + 1));
      dot.addEventListener('click', () => goToSlide(index));
      dotsContainer.appendChild(dot);
    });

    function goToSlide(index) {
      slides.forEach(slide => slide.classList.remove('active'));
      dotsContainer.querySelectorAll('.hero-carousel-dot').forEach(dot => dot.classList.remove('active'));

      currentIndex = index;
      slides[currentIndex].classList.add('active');
      dotsContainer.querySelectorAll('.hero-carousel-dot')[currentIndex].classList.add('active');

      const offset = -currentIndex * 100;
      heroTrack.style.transform = 'translateX(' + offset + '%)';
    }

    function nextSlide() {
      goToSlide((currentIndex + 1) % slides.length);
    }

    function prevSlide() {
      goToSlide((currentIndex - 1 + slides.length) % slides.length);
    }

    function startAutoplay() {
      stopAutoplay();
      autoplayInterval = setInterval(nextSlide, AUTOPLAY_DELAY);
    }

    function stopAutoplay() {
      if (autoplayInterval) {
        clearInterval(autoplayInterval);
        autoplayInterval = null;
      }
    }

    // Click slide to navigate
    slides.forEach(slide => {
      slide.addEventListener('click', function(e) {
        // Don't navigate if clicking nav buttons
        if (e.target.closest('.hero-carousel-btn') || e.target.closest('.hero-carousel-dot')) {
          return;
        }
        const href = this.getAttribute('data-href');
        if (href) {
          window.location.href = href;
        }
      });
    });

    // Event listeners
    prevBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      prevSlide();
      startAutoplay();
    });

    nextBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      nextSlide();
      startAutoplay();
    });

    // Pause autoplay on hover
    const heroContainer = document.querySelector('.hero-carousel-container');
    heroContainer.addEventListener('mouseenter', stopAutoplay);
    heroContainer.addEventListener('mouseleave', startAutoplay);

    // Start autoplay
    startAutoplay();
  }

});
