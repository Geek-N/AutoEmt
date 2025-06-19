const btn = document.getElementById('themeToggle');
btn.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark-mode');
  btn.textContent = document.documentElement.classList.contains('dark-mode') ? '☀️' : '🌙';
});