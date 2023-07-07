const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  // Update dark mode preference in localStorage
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('darkModeEnabled', 'true');
  } else {
    localStorage.removeItem('darkModeEnabled');
  }
});

// Check if dark mode is enabled from a previous session
if (localStorage.getItem('darkModeEnabled')) {
  body.classList.add('dark-mode');
} else {
  body.classList.remove('dark-mode');
}
