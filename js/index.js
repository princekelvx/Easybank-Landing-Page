const menu = document.querySelector(".mobile-menu");
const ham = document.querySelector("[alt='mobile-menu-icon']");
const menuDrop = document.querySelector(".mobile-menu-drop");

menu.addEventListener("click", (e)=>{
  if(!menu.classList.contains("toggle")){
    ham.setAttribute("src", "./images/icon-close.svg");
    menu.classList.add("toggle");
    menuDrop.style.display = "block";
  }
  else{
    ham.setAttribute("src", "./images/icon-hamburger.svg");
    menu.classList.remove("toggle");
    menuDrop.style.display = "none";
  }
})