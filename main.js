const openList = document.getElementById("open-menu");
const closeList = document.getElementById("close-menu");
const closeMobileMenu1 = document.getElementById("close--menu1");
const closeMobileMenu2 = document.getElementById("close--menu2");
const closeMobileMenu3 = document.getElementById("close--menu3");
const closeMobileMenu4 = document.getElementById("close--menu4");
const closeMobileMenu5 = document.getElementById("close--menu5");
const closeMobileMenu6 = document.getElementById("close--menu6");
const closeMobileMenu7 = document.getElementById("close--menu7");
const logo = document.getElementById("label");

function openMenu() {
  document.getElementById("menu-lists").className = "menu-lists.open";
  openList.style.display = "none";
  closeList.style.display = "inline";
}

function closeMenu() {
  document.getElementById("menu-lists").className = "menu-lists";
  openList.style.display = "inline";
  closeList.style.display = "none";
}

openList.addEventListener("click", openMenu);
closeList.addEventListener("click", closeMenu);
closeMobileMenu1.addEventListener("click", closeMenu);
closeMobileMenu2.addEventListener("click", closeMenu);
closeMobileMenu3.addEventListener("click", closeMenu);
closeMobileMenu4.addEventListener("click", closeMenu);
closeMobileMenu5.addEventListener("click", closeMenu);
closeMobileMenu6.addEventListener("click", closeMenu);
closeMobileMenu7.addEventListener("click", closeMenu);
logo.addEventListener("click", closeMenu);

// const menuHandler = document.addEventListener("#burger-nav", "click"){
//     return (console.log("Menu button was clicked"))
// }

var form = document.getElementById("sheetdb-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(form.action, {
    method: "POST",
    body: new FormData(document.getElementById("sheetdb-form")),
  })
    .then((response) => response.json())
    .then((html) => {
      // you can put any JS code here
    //   window.open("index.html", "_blank");
    form.reset();
    });
});
