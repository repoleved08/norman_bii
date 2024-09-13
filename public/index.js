import 'flowbite';
// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
  
  // Whenever the user explicitly chooses light mode
  localStorage.theme = 'light'
  
  // Whenever the user explicitly chooses dark mode
  localStorage.theme = 'dark'
  
  // Whenever the user explicitly chooses to respect the OS preference
  localStorage.removeItem('theme')

  // Togling navbar 
  document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector("[data-collapse-toggle]");
    const menu = document.getElementById("mobile-menu-2");

    toggleButton.addEventListener("click", function () {
      // Toggle the 'hidden' class
      menu.classList.toggle("hidden");

      // Optionally, toggle the visibility of the icon (hamburger and close icons)
      const iconOpen = toggleButton.querySelector("svg:first-child");
      const iconClose = toggleButton.querySelector("svg:last-child");

      iconOpen.classList.toggle("hidden");
      iconClose.classList.toggle("hidden");
    });
  });
