document.querySelector('#helloBtn').addEventListener('click', () => {
  document.querySelector('#status').textContent = 'Hello from GitHub Pages!';
});

document.querySelector('#themeToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});