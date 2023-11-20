window.addEventListener('scroll',()=>{
      document.querySelector('nav').classList.toggle('window-scroll',window.scrollY > 0)
})

const items = document.querySelectorAll('.accordion button');
function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}
items.forEach((item) => item.addEventListener('click', toggleAccordion));

// const menu = document.querySelector(".nav__menu");
// const menubtn = document.querySelector("#open-menu-btn");
// const closeBtn = document.querySelector("#close-menu-btn");


// menuBtn.addEventListener('click',()=>{
//   menu.style.display = "flex";
// })