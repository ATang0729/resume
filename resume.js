(function () {
  const root = document.documentElement;
  const toggle = document.querySelector('.theme-toggle');
  const savedTheme = localStorage.getItem('resume-theme');

  if (savedTheme === 'dark') {
    root.dataset.theme = 'dark';
  } else {
    root.dataset.theme = 'light';
  }

  function updateToggle() {
    if (!toggle) return;
    const dark = root.dataset.theme === 'dark';
    toggle.textContent = dark ? '☀' : '◐';
    toggle.setAttribute('aria-pressed', String(dark));
  }

  if (toggle) {
    toggle.addEventListener('click', function () {
      const nextTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
      root.dataset.theme = nextTheme;
      localStorage.setItem('resume-theme', nextTheme);
      updateToggle();
    });
  }

  updateToggle();
})();
