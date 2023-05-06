let open = document.getElementById("open");
let close = document.getElementById("close");

open.addEventListener("click", () => {
  let navlist = document.getElementById("nav-list");
  navlist.style.transitionDuration = "7s";
  navlist.style.marginTop = "0px";
  open.style.display = "none";
  close.style.display = "block";
});

close.addEventListener("click", () => {
  let navlist = document.getElementById("nav-list");
  navlist.style.transitionDuration = "4000ms";
  navlist.style.marginTop = "-2000px";
  close.style.display = "none";
  open.style.display = "block";
});

let creationImgs = document.querySelectorAll(".creation-img");
let creationNames = document.querySelectorAll(".creation-name");

creationImgs.forEach((creationImg) => {
  creationImg.addEventListener("mouseover", () => {
    creationImg.style.opacity = "0.5"
    creationImg.style.transitionDuration = ".3s"
    creationImg.style.cursor = "pointer"
  })

  creationImg.addEventListener("mouseleave", () => {
    creationImg.style.opacity = "1"
  })
})