let popupBtn = document.querySelector(".explore_button");
let popupForm = document.querySelector(".popup_container");
let inputPopup = popupForm.querySelector("#name-field");
let popupClose = document.querySelector(".popup_close");

////////Открытие popup////////
popupBtn.addEventListener("click", function () {
  popupForm.classList.add("open_popup");
  inputPopup.focus();
  console.log("Открытие формы");
});

popupClose.addEventListener("click", function () {
  popupForm.classList.remove("open_popup");
  console.log("Закрытие формы");
});

window.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && popupForm.classList.contains("open_popup")) {
    popupForm.classList.remove("open_popup");
    console.log("Закрытие формы");
  }
});
