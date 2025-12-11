
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}

// Mobile navigation toggle

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


// Initialize theme on page load
function initializeTheme() {
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.documentElement.classList.add('dark');
    updateThemeIcon(true);
  } else {
    document.documentElement.classList.remove('dark');
    updateThemeIcon(false);
  }
}

function updateThemeIcon(isDark) {
  const themeIcon = document.getElementById('theme-icon');
  if (themeIcon) {
    if (isDark) {
      themeIcon.className = 'fas fa-sun text-2xl text-yellow-400 dark:text-yellow-300';
    } else {
      themeIcon.className = 'fas fa-moon text-2xl text-gray-800 dark:text-gray-200';
    }
  }
}

// Theme toggle functionality
document.addEventListener('DOMContentLoaded', () => {
  initializeTheme();
  
  const themeToggleBtn = document.getElementById('theme-toggle');
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const isDark = document.documentElement.classList.toggle('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      updateThemeIcon(isDark);
    });
  }
});
