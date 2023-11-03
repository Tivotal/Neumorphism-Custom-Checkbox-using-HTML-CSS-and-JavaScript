/* Created by Tivotal */

let toggle = document.querySelector(".toggle");
let text = document.querySelector(".text");

toggle.addEventListener("click", () => {
  text.classList.toggle("checked");
});
