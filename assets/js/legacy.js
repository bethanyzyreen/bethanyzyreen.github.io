function getHashTarget(hash) {
  let id = hash.replace(/^#/, '');
  try { id = decodeURIComponent(id); } catch (e) { }
  return id ? document.getElementById(id) : null;
}

document.addEventListener('DOMContentLoaded', () => {
  const animatedItems = Array.from(document.querySelectorAll(
    '.card-section, .project-card, .feature-card, .project-summary-item, .sp-genre-item, .footer-card, .hero-card, .detail-hero, .project-screenshot, .screenshot-carousel-wrap'
  )).filter(item => !item.closest('.carousel-item'));

  animatedItems.forEach(item => {
    item.classList.add('animated-card');
  });

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  animatedItems.forEach(item => revealObserver.observe(item));

  const rippleTargets = document.querySelectorAll('button, .btn-main, .btn-project, .btn-submit, .back-link');
  rippleTargets.forEach(target => {
    target.addEventListener('click', function (event) {
      const rect = this.getBoundingClientRect();
      const ripple = document.createElement('span');
      const size = Math.max(rect.width, rect.height);
      const x = event.clientX - rect.left - size / 2;
      const y = event.clientY - rect.top - size / 2;

      ripple.className = 'ripple';
      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      ripple.style.animation = 'ripple-effect 0.6s ease-out';

      this.appendChild(ripple);
      ripple.addEventListener('animationend', () => ripple.remove());
      setTimeout(() => ripple.remove(), 700);
    });
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = getHashTarget(this.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  document.querySelectorAll('.app-screenshot img').forEach(img => {
    const applyOrientation = () => {
      const frame = img.closest('.app-screenshot');
      if (!frame) return;
      if (img.naturalWidth >= img.naturalHeight) {
        frame.classList.add('is-landscape');
        frame.classList.remove('is-portrait');
      } else {
        frame.classList.add('is-portrait');
        frame.classList.remove('is-landscape');
      }
    };

    if (img.complete && img.naturalWidth) {
      applyOrientation();
    } else {
      img.addEventListener('load', applyOrientation);
    }
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const fills = document.querySelectorAll('.fill[data-width]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.width = entry.target.dataset.width;
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  fills.forEach(f => observer.observe(f));
});

window.addEventListener('DOMContentLoaded', () => {
  if (location.hash) {
    const target = getHashTarget(location.hash);
    if (target) {
      setTimeout(() => {
        target.scrollIntoView({ behavior: 'smooth', block: 'center' });
        target.classList.add('highlight');
      }, 350);
    }
  }
});