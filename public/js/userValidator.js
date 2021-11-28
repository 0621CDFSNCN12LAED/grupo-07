const e = require("express");

//Capturamos elementos
const fullName = document.getElementById ("userName");
const email = document.getElementById ("email");
const password = document.getElementById ("password");
const avatar = document.getElementById ("avatar");
const btnSubmit = document.getElementById ("btnSubmit");
const erName = document.querySelector('.erName');
const errorList = document.querySelector("#errors");
const form = document.querySelector("#userRegisterForm");

//Hacemos cosas con esos elementos
fullName.focus();

let errors = [];
if (fullName.value== ""){
  errors.push("El campo de nombre no puede estar vacío")
}

if (errors.length>0){
  e.preventDefault();
  let ulErrors=document.querySelector(".errors ul");
  errors.forEach(error=>{
    ulErrors.innerHTML+= `<li>${error}</li>`
  });
}

/*
btnSubmit.addEventListener("click", function (e) {
  e.preventDefault();
  let errors = {};
  if (fullName.value.length < 3) {
    errors.fullName = "Tu nombre tiene que tener por lo menos dos letras";
    fullName.classList.add ("is-invalid")
  }
  if (email.value.length = 0) {
    errors.email = "Completa tu email";
    email.classList.add("is-invalid");
  }
  
  if (validarEmail(email)) {
    errors.email = "Debes ingresar un mail válido";
    email.classList.add("is-invalid");
    
  }

  if (Object.keys(errors).length >= 1) {
    erName.innerText = errors.fullName ? errors.fullName : "";
  } else {
    form.submit();
  }
});

function validarEmail(email) {
  expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if (!expr.test(email)){
    console.log("es falso");
    return false;
}
console.log("es verdadero");
}

*/

/*
const requiredInputs = [
  fullName,
  email,
  password,
  avatar
];

const form = document.querySelector("#userRegisterForm");

form.addEventListener("submit", (event) => {
  const errors = formIsInvalid();
  if (errors.length > 0) {
    console.log("Formulario es invalido!");
    event.preventDefault();

    errorList.classList.remove("hidden");

    errorList.innerHTML = "";
    for (const error of errors) {
      errorList.innerHTML += `<li>${error}</li>`;
    }
  } else {
    errorList.classList.add("hidden");
    errorList.innerHTML = "";
  }
});

function formIsInvalid() {
  let errors = [];

  errors.push(validateInput(fullName, isEmpty, "Decinos tu nombre"));
  errors.push(
    validateInput(email, isEmpty, "Sin un mail no podemos registrarte")
  );
  errors.push(
    validateInput(password, isEmpty, "Es necesaria una contraseña para más seguridad")
  );
  errors.push(
    validateInput(avatar, isEmpty, "Nos gustaría conocerte, subí una foto")
  );
  

  if (!isLength(fullName, 2)) {
    fullName.classList.add("is-invalid");
    errors.push("Tu nombre tiene que ser más largo");
  } else {
    fullName.classList.remove("is-invalid");
    fullName.classList.add("is-valid");
  }
  if (!isEmail(email)) {
    email.classList.add("is-invalid");
    errors.push("Debes ingresar un mail válido");
  } else {
    email.classList.remove("is-invalid");
    email.classList.add("is-valid");
  }

  if (!isLength(password, 8)) {
    password.classList.add("is-invalid");
    errors.push("Tu contraseña debe tener como mínimo 8 caracteres");
  } else {
    password.classList.remove("is-invalid");
    password.classList.add("is-valid");
  }

 

  if (validExtension(avatar, )) {
    avatar.classList.add("is-invalid");
    errors.push("La duración debe ser un numero entre 60 y 360");
  } else {
    avatar.classList.remove("is-invalid");
    avatar.classList.add("is-valid");
  }


  console.log(errors);

  return errors.filter((msg) => msg != null);
}

//Declaración de funciones usadas arriba
function isEmpty(input) {
  return input.value.trim() == "";
}

function isLength(input, min) {
  if (input.lenght >= min) {
    return true;
}
}

function isEmail(input) {
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(input.value.match(mailformat)){
    return true;
  }else{
    return false;
  } 
}


function validExtension (input){  
}


function validateInput(input, validationFunction, message) {
  if (validationFunction(input)) {
    input.classList.add("is-invalid");
    return message;
  } else {
    input.classList.remove("is-invalid");
    input.classList.add("is-valid");
    return null;
  }
}
*/