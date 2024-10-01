const menu = document.querySelector("#menu")
const open = document.querySelector("#menu-open")
const close = document.querySelector("#menu-close")

open.addEventListener("click", () => {
  menu.classList.add("visible")
})

close.addEventListener("click", () => {
  menu.classList.remove("visible")
})