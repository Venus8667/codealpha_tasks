function saveData(){

let steps=document.getElementById("steps").value;

let percent=(steps/10000)*100;

document.getElementById("stepBar").style.width=percent+"%";

}