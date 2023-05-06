let open = document.getElementById('open');
let close = document.getElementById('close');

open.addEventListener('click', () => {
  let navlist = document.getElementById('nav-list');
  navlist.style.transitionDuration = "7s"
  navlist.style.marginTop = "0px"
  open.style.display = "none"
  close.style.display = "block"
})

close.addEventListener('click', () => {
  let navlist = document.getElementById('nav-list');
  navlist.style.transitionDuration = "4000ms"
  navlist.style.marginTop = "-2000px"
  close.style.display = "none"
  open.style.display = "block"
})