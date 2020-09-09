'use strict';

window.addEventListener("load", () => {
  let menuButton = document.querySelector(".menu-button");
  let topNavLocal = document.querySelector(".top-nav--local");
  let topNavInfo = document.querySelector(".top-nav--info");
  let mainNav = document.querySelector(".main-nav");
  let userNav = document.querySelector(".user-nav__account");
  let closeClass ="close";
  let openClass = "menu-button--open";
  
  menuButton.addEventListener("click", () => {
    topNavLocal.classList.toggle(closeClass);
    topNavInfo.classList.toggle(closeClass);
    mainNav.classList.toggle(closeClass);
    userNav.classList.toggle(closeClass);
    menuButton.classList.toggle(openClass);
  });
});

