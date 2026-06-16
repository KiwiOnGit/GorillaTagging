(() => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.navlinks');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
  }

  // When opened by double-clicking index.html, browsers use file:// and
  // directory URLs like privacy-policy/ may show a folder instead of index.html.
  // This keeps the hosted site using clean slash routes while making local preview work.
  if (window.location.protocol === 'file:') {
    document.querySelectorAll('a[href]').forEach((a) => {
      const href = a.getAttribute('href');
      if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('http:') || href.startsWith('https:')) return;
      if (href.includes('/#')) {
        a.setAttribute('href', href.replace('/#', '/index.html#'));
      } else if (href.endsWith('/')) {
        a.setAttribute('href', href + 'index.html');
      }
    });
  }
})();
