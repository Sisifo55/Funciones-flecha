/*1. Funciones flecha
Convierte la siguiente función en una función flecha:*/
function greetings() {
  return "Hola";
}
const greetings = () => "Hola";

/*Convierte la siguiente función en una función flecha en línea:*/
function division(a,b) {
  return a / b;
}
const division = (a, b) => a / b;

/*Convierte la siguiente función en una función flecha:*/
function myName(name) {
  return `Mi nombre es ${name}`;
}
const myName = (name) => `Mi nombre es ${name}`;

/*Convierte las siguientes funciones en funciones flecha:*/
function test2() {
  console.log("Función test 2 ejecutada.");
}
function test1(callback) {
  callback();
}	

const test2 = () => {
  console.log("Función test 2 ejecutada.");
};

const test1 = (callback) => {
  callback();
};


