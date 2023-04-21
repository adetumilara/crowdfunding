"use strict";
const close = document.querySelector(".closeMenu");
const hamburger = document.querySelector(".hamBurgerMenu");
const navList = document.querySelector(".navRightMv");
const back = document.querySelector(".contenta");
const overlay = document.querySelector(".overlay");
const backContent = document.querySelector(".container5");
const closeContent = document.querySelector(".close");
const heading = document.querySelector(".heading");
const heading1 = document.querySelector(".heading1");
console.log(heading);
const form = document.querySelector(".forma");
const form1 = document.querySelector(".formb");
const continue1 = document.querySelector(".continue1");
const continue2 = document.querySelector(".continue2");
const thankYou = document.querySelector(".container6");
const gotit = document.querySelector(".gotit");
console.log(continue2);

hamburger.addEventListener("click", openMenu);
close.addEventListener("click", closeMenu);
back.addEventListener("click", openProject);
closeContent.addEventListener("click", closeProject);
heading.addEventListener("click", openForm);
heading1.addEventListener("click", openForm1);
continue1.addEventListener("click", thank);
continue2.addEventListener("click", thank);
gotit.addEventListener("click", got);

function openMenu() {
  hamburger.style.display = "none";
  close.style.display = "block";
  navList.style.display = "flex";
  // console.log("clicked");
}

function closeMenu() {
  hamburger.style.display = "block";
  close.style.display = "none";
  navList.style.display = "none";
  // console.log("clicked");
}

function openProject() {
  backContent.style.display = "flex";
  overlay.style.display = "block";
}

function closeProject() {
  backContent.style.display = "none";
  overlay.style.display = "none";
}

function openForm() {
  form.style.display = "block";
}
function openForm1() {
  form1.style.display = "block";
}

function thank() {
  backContent.style.display = "none";
  thankYou.style.display = "flex";
  overlay.style.backdropFilter = "blur(1px)";
}

function got() {
  overlay.style.display = "none";
  thankYou.style.display = "none";
}
