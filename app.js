/*console.log("Bienvenido al Playground!");

console.log("Utiliza el fichero app.js para escribir tu código Javascript");*/

// document.getElementById("full-name").innerText = "Raimunda de la Mata Rodríguez";
// step 2
/*function submitName () {
    var fullname;

    //Obtengo nombre
    var name = document.getElementById("input-name").value;
    fullName = name;

    //Obtengo apellido 1
    var surname1 = document.getElementById("input-surname1").value;
    fullName = fullName + ' ' + surname1;

    //Obtengo apellido 2
    var surname2 = document.getElementById("input-surname2").value;
    fullName = fullName + ' ' + surname2;

    document.getElementById("full-name").innerText = fullName;
}*/

/* step 3
function getName() {
    return document.getElementById("input-name").value;
}

function getSurname1() {
    return document.getElementById("input-surname1").value;
}

function getSurname2() {
    return document.getElementById("input-surname2").value;
}

function getFullName() {
    return getName() + ' ' + getSurname1() + ' ' + getSurname2();
}

function submitName() {
    document.getElementById("full-name").innerText = getFullName();
}*/

// step 4
var getName = () => document.getElementById("input-name").value;
var getSurname1 = () => document.getElementById("input-surname1").value;
var getSurname2 = () => document.getElementById("input-surname2").value;

var getFullName = () => getName() + ' ' + getSurname1() + ' ' + getSurname2();

var submitName = () => {
    document.getElementById("full-name").innerText = getFullName();
}

// Por último, registramos la función submitName() bajo el evento    
// 'click' del botón submit
document.getElementById("button-submit").addEventListener("click", submitName); 

// step 6
// Registramos la función getFullName bajo el evento 'keyup'
// de cada input.
document.getElementById("input-name").addEventListener("keyup", submitName);
document.getElementById("input-surname1").addEventListener("keyup", submitName);
document.getElementById("input-surname2").addEventListener("keyup", submitName);


/* module 4 laboratorio */
let operating1 = () => document.getElementById("operating-1").value;
let operating2 = () => document.getElementById("operating-2").value;

const errorMessage = () => document.getElementById('result').value = "Error";

let add = () => document.getElementById('result').value = Number(operating1()) + Number(operating2());
let sus = () => document.getElementById('result').value = Number(operating1()) - Number(operating2());
let mul = () => document.getElementById('result').value = Number(operating1()) * Number(operating2());
let div = () => document.getElementById('result').value = Number(operating1()) / Number(operating2());

function isError () {
    if (operating1() == 0 || operating2() == 0  ) {
        return errorMessage();
    }
}

function submitAdd () {
    add();
}
function submitSus () {
    sus();
}
function submitMult () {
    mul();
}
function submitDiv () {
    div();
}
function submitResult () {
   console.log(add());
}


document.getElementById("button-sum").addEventListener("click", submitAdd); 
document.getElementById("button-sus").addEventListener("click", submitSus);
document.getElementById("button-mul").addEventListener("click", submitMult); 
document.getElementById("button-div").addEventListener("click", submitDiv);

document.getElementById("button-result").addEventListener("click", submitResult);
