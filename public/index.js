import 'flowbite';

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
  
      // Optionally, toggle the visibility of the hamburger/close icons
      const iconOpen = toggleButton.querySelector("svg:first-child");
      const iconClose = toggleButton.querySelector("svg:last-child");
  
      iconOpen.classList.toggle("hidden");
      iconClose.classList.toggle("hidden");
    });
  });
  