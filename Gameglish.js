let position = 1
function start(){
    let namePlayer=document.getElementById("name-player").value;
    document.getElementById("welcome-player").innerHTML = `Happy to have you here ${namePlayer} !!`;
    document.getElementById("first-page").className = "invisible"; 
    document.getElementById("second-page").className = "visible";
    document.getElementById("boton1").className = "onIt";
}
function aleatorio (min,max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function dices(){
    let dice = aleatorio (1,2);
    console.log(dice);
    position = position + dice;
    console.log(position);
    document.getElementById("second-page").className = "invisible";
    document.getElementById("questions").className = "visible";
    if (position ==1){
        document.getElementById("question1").className = "visible question";
    } else if (position ==2){
        document.getElementById("question2").className = "visible question";
    } else if (position ==3){
        document.getElementById("question3").className = "visible question";
    } else if (position ==4){
        document.getElementById("question4").className = "visible question";
    } else if (position==5){
        document.getElementById("question5").className = "visible question";
    } else if (position ==6){
        document.getElementById("question6").className = "visible question";
    }
    document.getElementById(`boton${position-dice}`).className = "centered";
    document.getElementById(`boton${position}`).className = "onIt"
}
function returned(){
    document.getElementById("second-page").className = "visible";
    const questions = document.getElementsByClassName("visible question");
    console.log(questions)
    Array.from(questions).forEach(element => {
        element.className = "invisible"
    });
    document.getElementById("questions").className = "invisible";
    
}
function moved(){
    if  (document.getElementById("options1q2").checked){
    document.getElementById("answered").innerHTML = "Youre right " + namePlayer + "!! You have won " + dice;
    } else {
        document.getElementById("answered").innerHTML = "Youre wrong" + namePlayer + "You not going forword";
    }
}