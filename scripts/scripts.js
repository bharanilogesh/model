"use strict";
//getting elements
const btnModel = document.querySelectorAll(".btn");
console.log(btnModel);
const closeBtn = document.querySelector(".close-button");
const cardModel = document.getElementById("model");

//adding event listner
for (let i = 0; i < btnModel.length; i++) {
  btnModel[i].addEventListener("click", function () {
    cardModel.classList.remove("hidden");
  });
}

closeBtn.addEventListener("click", function () {
  cardModel.classList.add("hidden");
});