// Theme toggle logic
const themeBtn = document.getElementById('theme-btn');
let isDarkTheme = false;

themeBtn.addEventListener('click', () => {
    isDarkTheme = !isDarkTheme;
    document.documentElement.setAttribute('data-theme', isDarkTheme ? 'dark' : 'light');
    themeBtn.textContent = isDarkTheme ? '🌙' : '🌞';
});








