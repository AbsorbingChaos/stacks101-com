
// vanilla navbar js for bulma menu
document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});

/*

// light and dark mode toggle

const lightswitch = document.querySelector(".ux__header__icon--lightswitch");
const currentTheme = localStorage.getItem("theme")

if (currentTheme == "dark") {
  document.documentElement.classList.add("darkness");
}

lightswitch.addEventListener("click", function() {
  
  document.documentElement.classList.toggle("darkness");
  
  let theme = "light";
  if (document.documentElement.classList.contains("darkness")) {
    theme = "dark";
  }
  localStorage.setItem("theme", theme);

});

// menu toggle 

const menubtn = document.querySelector(".ux__header__icon--menu");
const menu = document.querySelector(".ux__header__nav");

menubtn.addEventListener("click", function() {
  menu.classList.toggle("show");
});
*/