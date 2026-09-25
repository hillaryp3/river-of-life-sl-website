// River of Life Church — site scripts

// Mobile navigation toggle
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });

  // Close menu when clicking a link (mobile)
  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Close menu when clicking outside the header
  document.addEventListener('click', (event) => {
    if (nav.classList.contains('open') && !event.target.closest('.site-header')) {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}

// Update the copyright year
document.querySelectorAll('.year').forEach((el) => {
  el.textContent = String(new Date().getFullYear());
});

// Forms: graceful demo behavior until a form service (e.g. Formspree) is wired up.
// Phase 2: replace the handler with a real submission to your endpoint.
document.querySelectorAll('form[data-demo-form]').forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const notice = form.querySelector('.notice');
    if (notice) {
      notice.textContent =
        'Thank you! This is a preview of the site, so forms are not yet connected. ' +
        'We will be able to receive your message once the site is live.';
      notice.classList.add('visible');
    }
    form.reset();
    notice?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
});
