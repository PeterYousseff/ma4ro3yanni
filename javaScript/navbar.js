// For toggling and finding number of children and other stuff is done here!

const navigation = document.getElementById("nav");
const menu = document.getElementById("menu");

menu.addEventListener("click", () => {
  // The navigation.children.length means the following :-
  // The children inside a parent are basically an array of elements; So, here I'm finding the length of the array aka how many children are inside the nav bar.
  //   Yup That's all.
  navigation.style.setProperty("--childenNumber", navigation.children.length);

  //    Casually Toggling Classes to make them animate on click
  //   Regular stuff ;)
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
