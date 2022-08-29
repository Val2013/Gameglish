let position = 1;
function start() {
  let namePlayer = document.getElementById("name-player").value;
  document.getElementById(
    "welcome-player"
  ).innerHTML = `Happy to have you here ${namePlayer} !!`;
  document.getElementById("first-page").className = "invisible";
  document.getElementById("second-page").className = "visible";
  document.getElementById("boton1").className = "onIt";
}
function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function dices() {
  let dice = aleatorio(1, 4);
  position = position + dice;
  document.getElementById("second-page").className = "invisible";
  document.getElementById("questions").className = "visible";
  document.getElementById(`question${position}`).className = "visible question";
  document.getElementById(`boton${position - dice}`).className = "centered";
  document.getElementById(`boton${position}`).className = "onIt";
}
function returned() {
  document.getElementById("second-page").className = "visible";
  const questions = document.getElementsByClassName("visible question");
  Array.from(questions).forEach((element) => {
    element.className = "invisible";
  });
  document.getElementById("questions").className = "invisible";
}
function moved() {
  if (document.getElementById("options1q2").checked) {
    document.getElementById("answered").innerHTML =
      "Youre right " + namePlayer + "!! You have won " + dice;
  } else {
    document.getElementById("answered").innerHTML =
      "Youre wrong" + namePlayer + "You not going forword";
  }
}
