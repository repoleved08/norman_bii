
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}

// Whenever the user explicitly chooses light mode
localStorage.theme = 'light'

// Whenever the user explicitly chooses dark mode
localStorage.theme = 'dark'

localStorage.removeItem('theme')

// toggle nav

document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.querySelector("[data-collapse-toggle]");
  const menu = document.getElementById("mobile-menu-2");
  const navbar = document.getElementById("main-navbar");

  toggleButton.addEventListener("click", function () {
    menu.classList.toggle("hidden");


    if (!menu.classList.contains("hidden")) {
      navbar.classList.remove("rounded-full");
    } else {
      navbar.classList.add("rounded-full");
    }


    const iconOpen = toggleButton.querySelector("svg:first-child");
    const iconClose = toggleButton.querySelector("svg:last-child");

    iconOpen.classList.toggle("hidden");
    iconClose.classList.toggle("hidden");
  });
});


// theme
const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const bodyElement = document.body;

// Check for saved theme in localStorage
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
  bodyElement.classList.add('dark');
  themeIcon.classList.replace('fa-moon', 'fa-sun');
}

// Toggle theme on button click
themeToggleBtn.addEventListener('click', () => {
  bodyElement.classList.toggle('dark');
  if (bodyElement.classList.contains('dark')) {
    themeIcon.classList.replace('fa-moon', 'fa-sun');
    localStorage.setItem('theme', 'dark');
  } else {
    themeIcon.classList.replace('fa-sun', 'fa-moon');
    localStorage.setItem('theme', 'light');
  }
});
