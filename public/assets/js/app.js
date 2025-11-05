let menuBtn = document.querySelector('.header__burger-menu')
let navBody = document.querySelector('.header__menu')
let lang = document.querySelector('.header__lang')

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    navBody.classList.toggle('active');
    lang.classList.toggle('active');
})

let techBtn = document.querySelectorAll('.tehnikalar__cat-btn')
let techContent = document.querySelectorAll('.tehnikalar__wrapper')

techBtn.forEach((tech, i)=> {
    tech.addEventListener("click", () => {
        techContent.forEach((content) => {
          content.classList.remove("active");
        });
        techBtn.forEach((tab) => {
          tab.classList.remove("tehnikalar__cat-btn--pressed");
        });
        techBtn[i].classList.add("tehnikalar__cat-btn--pressed");
        techContent[i].classList.add("active")
    })
})

let aboutText = document.getElementsByClassName("class__about");
for (let i = 0; i < aboutText.length; i++) {
  aboutText[i].innerHTML = aboutText[i].innerHTML.slice(0, 1250) + "...";
}

const currentPage = window.location.pathname.substring(3, 100);
const changeLangEn = document.querySelector(".langEn");
const changeLangRu = document.querySelector(".langRu");
const changeLangTk = document.querySelector(".langTk");

window.addEventListener("load", () => {
  changeLangEn.setAttribute("href", "/en" + currentPage);
});
window.addEventListener("load", () => {
  changeLangRu.setAttribute("href", "/ru" + currentPage);
});
window.addEventListener("load", () => {
  changeLangTk.setAttribute("href", "/tk" + currentPage);
});


function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    }
  }
}

window.addEventListener("scroll", reveal);