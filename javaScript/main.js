const navigation = document.getElementById("nav");
const menu = document.getElementById("menu");

menu.addEventListener("click", () => {
  navigation.style.setProperty("--childenNumber", navigation.children.length);

  navigation.classList.toggle("active");
  menu.classList.toggle("active");
});





// change bg color

function changeBg() {
  let navbar = document.getElementById("navbar");
  let scrollValue = window.scrollY;
  if (scrollValue < 300) {
    navbar.classList.remove("changeColor");
  } else {
    navbar.classList.add("changeColor");
  }
}
window.addEventListener("scroll", changeBg);

// change color on scroll
  window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 300) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
