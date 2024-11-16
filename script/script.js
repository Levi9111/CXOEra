const nav = document.querySelector(".nav");
const btn1 = document.querySelector(".btn-line");
const btn2 = document.querySelector(".btn-cross");
const navUl = document.querySelector(".nav ul");
const listDropdownHook = document.querySelector(".list-dropdown-hook");
const listDropdown = document.querySelector(".list-dropdown");
const listDropdownIcon = document.querySelector(".list-dropdown-hook span");

const scrollers = document.querySelectorAll(".scroller");

let scroll;
window.addEventListener("scroll", () => {
  scroll = window.scrollY;

  if (scrollY >= 300) {
    nav.classList.add("nav-glass");
  } else {
    nav.classList.remove("nav-glass");
  }
});

btn1.addEventListener("click", function () {
  btn1.classList.add("hidden");
  btn2.classList.remove("hidden");
  nav.classList.remove("fixed-nav");
  nav.classList.add("responsive-nav");
  navUl.style.display = "flex";
});

btn2?.addEventListener("click", function () {
  btn2.classList.add("hidden");
  btn1.classList.remove("hidden");
  nav.classList.remove("responsive-nav");
  nav.classList.add("fixed-nav");
  navUl.style.display = "none";
});

const animate = window.matchMedia("(prefers-reduced-motion:reduce)").matches;

scrollers.forEach((scroller) => {
  scroller.setAttribute("data-animated", true);

  const scrollerInner = scroller.querySelector(".scroller-inner");
  const scrollerContent = Array.from(scrollerInner.children);

  scrollerContent.forEach((item) => {
    const duplicatedItem = item.cloneNode(true);
    duplicatedItem.setAttribute("area-hidden", true);
    scrollerInner.appendChild(duplicatedItem);
  });
});

let dorpdownController = false;

function updateDropdownState() {
  if (dorpdownController) {
    listDropdown.style.display = "flex";
    listDropdownIcon.classList.add("rotate-effect");
  } else {
    listDropdown.style.display = "none";
    listDropdownIcon.classList.remove("rotate-effect");
  }
}

updateDropdownState();

listDropdownHook.addEventListener("click", function () {
  dorpdownController = !dorpdownController;
  updateDropdownState();
});
