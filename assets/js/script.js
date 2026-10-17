const PROJECTS = {
  'qydentra': {
    title: 'Qydentra',
    subtitle: 'Dental Clinic Management System',
    description: 'A web-based system that helps a dental clinic run its day: patients book appointments online while staff manage a live queue, records, and schedules. It was built as an IPT project with a dedicated dashboard for each role.',
    features: [
      'Separate dashboards for Admin, Dentist, Receptionist, and Patient',
      'Online appointment booking with real-time queue management',
      'Patient records and staff management',
      'Audit logs and a notification system with custom-prefixed IDs'
    ],
    tags: ['PHP', 'MySQL', 'Bootstrap', 'Multi-Role', 'Queue System', 'Appointments'],
    images: [
      ['assets/img/qydentra.jpg', 'Qydentra sign-in screen'],
      ['assets/img/qydentra1.jpg', 'Qydentra screen 2'],
      ['assets/img/qydentra2.jpg', 'Qydentra screen 3'],
      ['assets/img/qydentra3.jpg', 'Qydentra screen 4'],
      ['assets/img/qydentra4.jpg', 'Qydentra screen 5']
    ],
    github: 'https://github.com/bethanyzyreen/Qydentra'
  },
  'sunset-pages': {
    title: 'Sunset Pages',
    subtitle: 'Online Bookstore',
    description: 'An online bookstore inspired by sunsets and the joy of reading. A warm color palette, photo galleries, and interactive ratings make browsing feel more like a story than a catalog.',
    features: [
      'Book listings with cover art, descriptions, and genres',
      'Curated sunset photo galleries',
      'Interactive 5-star rating system built with JavaScript',
      'Genre-based discovery and a responsive layout'
    ],
    tags: ['HTML', 'CSS', 'JavaScript', 'Image Gallery', 'Book Listing', 'UI/UX'],
    images: [
      ['assets/img/sunsetpages.jpg', 'Sunset Pages home screen'],
      ['assets/img/sunsetpages1.jpg', 'Sunset Pages book listing']
    ],
    github: 'https://github.com/bethanyzyreen/Sunset_Pages'
  },
  'zythera': {
    title: 'Zythera',
    subtitle: 'Premium Furniture Marketplace',
    description: 'A full-stack furniture e-commerce platform co-developed with Snckish. Customers browse and buy through a polished storefront, while an admin side keeps products, stock, and orders in order.',
    features: [
      'Product catalog, shopping cart, and checkout flow',
      'Admin dashboard for managing products and orders',
      'Inventory tracking and order management',
      'Responsive interface for desktop and mobile'
    ],
    tags: ['PHP', 'MySQL', 'CSS', 'Bootstrap', 'E-Commerce', 'Admin Panel'],
    images: [
      ['assets/img/zythera.jpg', 'Zythera home page'],
      ['assets/img/zythera1.jpg', 'Zythera screen 2'],
      ['assets/img/zythera2.jpg', 'Zythera screen 3'],
      ['assets/img/zythera3.jpg', 'Zythera screen 4'],
      ['assets/img/zythera4.jpg', 'Zythera screen 5']
    ],
    github: 'https://github.com/bethanyzyreen/zythera'
  },
  'measurement-conversion': {
    title: 'Measurement Conversion System',
    subtitle: 'Console-based unit converter',
    description: 'A C++ console app that converts values between units across ten categories. It applies OOP principles and validates every input, so users can convert, re-convert, or move between menus freely.',
    features: [
      '10 categories: Length, Weight, Temperature, Time, Volume, Pressure, Speed, Storage, Internet Speed, and Download Time',
      'Object-oriented design',
      'Full input validation',
      'Menu-driven interface for converting again or navigating'
    ],
    tags: ['C++', 'OOP', 'Console App'],
    images: [
      ['assets/img/measurement-conversion.jpeg', 'Console menu listing the 10 conversion categories']
    ],
    github: 'https://github.com/bethanyzyreen/Measurement-Conversion-System'
  },
  'zyreen-mobile': {
    title: 'Zyreen Mobile Bookstore App',
    subtitle: 'Android app built with Kodular',
    description: 'An Android bookstore app made with Kodular, a block-based visual programming platform. It pairs a calm green theme and the Zyreen logo with a simple multi-screen flow for browsing and shopping.',
    features: [
      'Home screen with About Us, Products, and Contact Us',
      'Book catalog with covers, descriptions, sizes, and Philippine Peso pricing',
      'Add to Cart button on every product',
      'Consistent green-themed UI across all screens'
    ],
    tags: ['Kodular', 'Android', 'Mobile App', 'Bookstore', 'No-Code', 'UI Design'],
    images: [
      ['assets/img/kodular.jpg', 'Zyreen app home screen'],
      ['assets/img/kodular1.jpg', 'Zyreen app book catalog'],
      ['assets/img/kodular2.jpeg', 'Zyreen app book catalog, continued'],
      ['assets/img/kodular3.jpeg', 'Zyreen app book catalog, continued']
    ],
    phone: true,
    github: null
  }
};

/* ── Navigation ── */
(function initNav() {
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.getElementById('nav-menu');
  if (!toggle || !menu) return;
  const backdrop = document.querySelector('.nav-backdrop');
  const closeBtn = menu.querySelector('.nav-close');

  const setOpen = (open) => {
    menu.classList.toggle('is-open', open);
    backdrop.classList.toggle('is-open', open);
    document.body.classList.toggle('nav-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    if (open) menu.querySelector('.nav-close').focus({ preventScroll: true });
  };

  toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));
  menu.addEventListener('click', (e) => { if (e.target.closest('a')) setOpen(false); });
  closeBtn.addEventListener('click', () => { setOpen(false); toggle.focus(); });
  backdrop.addEventListener('click', () => setOpen(false));
  window.matchMedia('(min-width: 861px)').addEventListener('change', (e) => { if (e.matches) setOpen(false); });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains('is-open')) { setOpen(false); toggle.focus(); }
  });

  const links = new Map([...menu.querySelectorAll('[data-nav]')].map((a) => [a.dataset.nav, a]));
  const targets = ['about', 'skills', 'projects', 'activities', 'experience', 'contact']
    .map((id) => document.getElementById(id)).filter(Boolean);
  const setActive = (id) => links.forEach((a, key) => {
    a.classList.toggle('is-active', key === id);
    if (key === id) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current');
  });
  setActive('top');

  if ('IntersectionObserver' in window) {
    const seen = new Set();
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => en.isIntersecting ? seen.add(en.target.id) : seen.delete(en.target.id));
      const current = targets.find((t) => seen.has(t.id));
      setActive(current ? current.id : (window.scrollY < 200 ? 'top' : [...links.keys()].find((k) => links.get(k).classList.contains('is-active')) || 'top'));
    }, { rootMargin: '-40% 0px -55% 0px' });
    targets.forEach((t) => io.observe(t));
    window.addEventListener('scroll', () => { if (window.scrollY < 120) setActive('top'); }, { passive: true });
  }
})();

/* ── Project modal ── */
(function initModal() {
  const modal = document.getElementById('project-modal');
  if (!modal) return;

  const dialog = modal.querySelector('.modal-dialog');
  const closeBtn = modal.querySelector('.modal-close');
  const media = document.getElementById('modal-media');
  const stage = document.getElementById('modal-image');
  const thumbs = document.getElementById('modal-thumbs');
  const github = document.getElementById('modal-github');
  let opener = null;
  let hideTimer = null;

  const el = (tag, text) => { const n = document.createElement(tag); if (text) n.textContent = text; return n; };

  function showImage(project, index) {
    const [src, alt] = project.images[index];
    stage.src = src;
    stage.alt = alt;
    thumbs.querySelectorAll('button').forEach((b, i) => {
      if (i === index) b.setAttribute('aria-current', 'true'); else b.removeAttribute('aria-current');
    });
  }

  function fill(project) {
    document.getElementById('modal-title').textContent = project.title;
    document.getElementById('modal-sub').textContent = project.subtitle;
    document.getElementById('modal-desc').textContent = project.description;

    const features = document.getElementById('modal-features');
    features.replaceChildren(...project.features.map((f) => el('li', f)));
    const tags = document.getElementById('modal-tags');
    tags.replaceChildren(...project.tags.map((t) => el('li', t)));

    media.classList.toggle('is-phone', !!project.phone);
    thumbs.replaceChildren();
    if (project.images.length > 1) {
      project.images.forEach(([src, alt], i) => {
        const li = el('li');
        const b = el('button');
        b.type = 'button';
        b.setAttribute('aria-label', 'Show screenshot ' + (i + 1) + ' of ' + project.images.length);
        const img = el('img');
        img.src = src; img.alt = ''; img.loading = 'lazy';
        b.append(img);
        b.addEventListener('click', () => showImage(project, i));
        li.append(b);
        thumbs.append(li);
      });
    }
    showImage(project, 0);

    if (project.github) {
      github.href = project.github;
      github.hidden = false;
    } else {
      github.removeAttribute('href');
      github.hidden = true;
    }
  }

  function open(id, trigger) {
    const project = PROJECTS[id];
    if (!project) return;
    clearTimeout(hideTimer);
    opener = trigger;
    fill(project);
    const gap = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.paddingRight = gap ? gap + 'px' : '';
    document.body.classList.add('modal-open');
    modal.hidden = false;
    dialog.scrollTop = 0;
    void modal.offsetWidth;
    modal.classList.add('is-open');
    dialog.focus({ preventScroll: true });
  }

  function close() {
    if (modal.hidden) return;
    modal.classList.remove('is-open');
    hideTimer = setTimeout(() => {
      modal.hidden = true;
      document.body.classList.remove('modal-open');
      document.body.style.paddingRight = '';
      if (opener) opener.focus({ preventScroll: true });
    }, 260);
  }

  document.querySelectorAll('[data-open]').forEach((btn) => {
    btn.addEventListener('click', () => open(btn.dataset.open, btn));
  });

  closeBtn.addEventListener('click', close);
  modal.addEventListener('click', (e) => { if (e.target === modal) close(); });

  document.addEventListener('keydown', (e) => {
    if (modal.hidden) return;
    if (e.key === 'Escape') { e.preventDefault(); close(); return; }
    if (e.key !== 'Tab') return;
    const focusable = [...dialog.querySelectorAll('a[href], button:not([disabled])')].filter((n) => !n.hidden && n.offsetParent !== null);
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && (document.activeElement === first || document.activeElement === dialog)) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  });
})();

/* ── Contact form ── */
(function initForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  const status = document.getElementById('form-status');
  const submit = form.querySelector('button[type="submit"]');

  const messages = {
    first_name: 'Enter your first name.',
    last_name: 'Enter your last name.',
    email: 'Enter a valid email address, like name@example.com.',
    message: 'Write a message so I know how to help.'
  };

  function check(field) {
    const err = document.getElementById(field.id + '-error');
    const bad = !field.value.trim() || !field.checkValidity();
    field.setAttribute('aria-invalid', String(bad));
    err.textContent = bad ? messages[field.name] : '';
    return !bad;
  }

  const fields = [...form.querySelectorAll('input, textarea')];
  fields.forEach((f) => {
    f.addEventListener('blur', () => { if (f.value) check(f); });
    f.addEventListener('input', () => { if (f.getAttribute('aria-invalid') === 'true') check(f); });
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    status.className = 'form-status';
    status.textContent = '';

    const results = fields.map(check);
    const firstBad = fields[results.indexOf(false)];
    if (firstBad) { firstBad.focus(); return; }

    submit.disabled = true;
    const label = submit.innerHTML;
    submit.textContent = 'Sending…';
    try {
      const res = await fetch(form.action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } });
      if (!res.ok) throw new Error('Request failed');
      form.reset();
      fields.forEach((f) => f.removeAttribute('aria-invalid'));
      status.classList.add('is-success');
      status.textContent = 'Message sent. Thank you, I\'ll reply soon.';
    } catch (err) {
      status.classList.add('is-error');
      status.textContent = 'The message could not be sent. Check your connection and try again, or email me directly.';
    } finally {
      submit.disabled = false;
      submit.innerHTML = label;
    }
  });
})();