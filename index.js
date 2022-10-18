var howDidWeDo = document.querySelector(".how_did_we_do");
var thankYou = document.querySelector(".thank_you");
var submit = document.querySelector(".submit");
var rateButton = document.querySelector(".button");
var rating = document.querySelector(".rating");
var one = document.querySelector("#one");
var two = document.querySelector("#two");
var three = document.querySelector("#three");
var four = document.querySelector("#four");
var five = document.querySelector("#five");

one.addEventListener("click", function () {
  if (document.hasFocus()) {
    rating.innerHTML = "You selected 1 out of 5";
  }
});
two.addEventListener("click", function () {
  if (document.hasFocus()) {
    rating.innerHTML = "You selected 2 out of 5";
  }
});
three.addEventListener("click", function () {
  if (document.hasFocus()) {
    rating.innerHTML = "You selected 3 out of 5";
  }
});
four.addEventListener("click", function () {
  if (document.hasFocus()) {
    rating.innerHTML = "You selected 4 out of 5";
  }
});
five.addEventListener("click", function () {
  if (document.hasFocus()) {
    rating.innerHTML = "You selected 5 out of 5";
  }
});

submit.addEventListener("click", function () {
  howDidWeDo.style.display = "none";
  thankYou.style.display = "flex";
});