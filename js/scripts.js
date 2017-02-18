
var colorButton;
var targetP;

window.onload = function () {
  colorButton = document.getElementById("colorButton");
  targetP = document.getElementById("changeable-p");

  colorButton.addEventListener("click", switchColor, false);
}

function switchColor() {
  if (targetP.className == "red") targetP.className = "blue";
  else targetP.className = "red";
}
