// function holaMundo(nombre) {
//     return console.log("Hola " + nombre);
// }

// function suma(a,b) {
//     return a + b;
//     console.log("Este mensaje no se mostrara que es esta despues de un RETURN")
// }

// function saludo(name, age) {
//     console.log(`Yo me llamo ${name} y tengo ${age} de edad. Este es una prueba de un parrafo.`)
// }


// console.log(suma(1,2));
// holaMundo("Carlos");
// saludo("Carlos", 12);

// // En la compilacion hay un orden, 1 Importacion Modulos 2 Declaracion Variables 3 Declaracion Funciones 4 Ejecucion de Codigo 
// // Por esta razon no importa donde pongas las funciones seran primiordial al orden del compilador

// // Creacion de funciones anonimas
//const funcionExpresada = () {
//    console.log("Aqui si afecta el orden, este mensaje solo se mostrara, si llamas a la funcion despues de declararla, no antes por que daria un mensaje de error.");
//}

//funcionExpresada();
// //Esto en diferencia es por que es una funcion asignada a una variable


// //Ejemplo practico de condicional
// let a = 5;
// let b = 5;

// if (a === b) {
//     console.log(`A es igual que B`);
// }

// ----------------------------------------------------------------------------------------------------
// 20. REST Parameters & Spread Operator
// ----------------------------------------------------------------------------------------------------
// //Se usan mucho en las librerias
// function sumar(a, b, ...c) {
//     let resultado = a + b;

//     c.forEach(function (n) {
//         resultado += n
//     });

//     return resultado;

// }
// console.log(sumar(1, 3, 4, 5));

// // Spread Operator, sirven para agregar valores en vez push son solo 3 puntos suspensivos(...)

// const arr1 = [1,2,3,4,5],
// arr2 = [6,7,8,9];

// //Pero queremos unir arreglos entre ellos en otro arreglo, no los une crea un arreglo con 2 arreglos internos
// const arr3 = [arr1, arr2];
// console.log(arr3);

// //Aqui si vamos a unirlo en un solo arreglo todos los valores
// const arr4 = [...arr1, ...arr2];
// console.log(arr4);

// ----------------------------------------------------------------------------------------------------
// 21. Arrow Functions, funcione flecha
// ----------------------------------------------------------------------------------------------------
// // Es cuando creas una variable asignadole una funcion anonima. 
// // Esto recuerda que no es una funcion declarada. Como por ejemplo:
// const saludar = function () {
//     console.log(`Hola, funcion normal`)
// }
// saludar();
// //En el caso de la funcion flecha, es quitar la palabra function y poner una => entre () y {}. Ejemplo
// const saludo = () => {
//     console.log(`Hola, con funcion flecha`);
// }
// saludo();
// // Incluso se puede reducir mas, eliminando las llaves y queda todo en una linea mas expresivo.
// const flecha = () => console.log(`Hola, desde una funcion flecha reducida a linea`);
// flecha();

// // Agregando Valores a la funcion, recuerda que se pueden quitar los parentesis cuando solo un valor.
// // Solo se omiten las llaves si esta todo en una linea de codigo.
// const flechaValor = nombre => console.log(`Hola ${nombre}, funcion con valor`);
// flechaValor('Carlos'); 

// // Aqui cuando se ponen 2 valores, debes dejar las funciones con parentesis, y el return automatico.
// const flecha2Valor = (a,b) => a + b;
// console.log(flecha2Valor(9, 9));

// // funcion de varias lineas, deben mantenerse las llaves
// const funcionVariasLineas = () => {
//     console.log("Uno, Funcion de varias lineas");
//     console.log("Dos, Funcion de varias lineas");
//     console.log("Tres, Funcion de varias lineas");
// }
// funcionVariasLineas();

// // Practicando una funcion flecha dentro de un foreach
// const numeros = [1,2,3,4,5];

// numeros.forEach((el, index) => console.log(`El elemento ${el} esta en la posicion ${index}`));

// // Usando nuevamente el THIS, cambia segun donde se usa. 
// // THIS dentro de una funcion DECLARADA muestra el objeto del DOM o Window
// // THIS dentro de una un objeto y dentro del objeto esta la funcion DECLARADA, muestra solo los datos del objeto sus propiedades
// // THIS dentro de una un objeto y dentro del objeto esta la funcion FLECHA, muestra el objeto del DOM o Window
// // Ejemplos

// function valor() {
//     console.log(this);
// }
// valor(); //Llama todo lo que tiene windows o el DOM

// const perro = {
//     nombre:"alfa",
//     ladrar: function () {
//         console.log(this);
//     }
// }
// perro.ladrar(); //Muestra solo lo que esta en el objeto creado

// const perros = {
//     nombre:"alfa",
//     ladrar: () => {
//         console.log(this);
//     }
// }
// perros.ladrar(); //Funcion flecha, todo lo el DOM y el windows.

// // Todo esto viene al caso de que no se trabaje con funcion flecha si no que se creen METODOS.
// const gatos = {
//     nombre:"bebe",
//     mauyar() {
//         console.log(this);
//     }
// }
// gatos.mauyar(); // Asi se crean metodos. Solo muestra lo que esta dentro del objeto.

// ----------------------------------------------------------------------------------------------------
// 22. Prototypes o POO
// ----------------------------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------------------------
// 23. Herencia Prototípica
// ----------------------------------------------------------------------------------------------------

// REPASAR fue algo muy nuevo para mi, 
// Fueron prototipos que antes se hacia asi, pero cambio a clases y entenderas las clases mejor por esto

// ----------------------------------------------------------------------------------------------------
// 24. Classes and Inheritance 
// ----------------------------------------------------------------------------------------------------

// Esto son clases y provienen de los prototipos, clases = prototipos
// Entendi bastante


// ----------------------------------------------------------------------------------------------------
// 25. Static Methods, Getters, and Setters 
// ----------------------------------------------------------------------------------------------------

// Los metodos estaticos que solo son privados en la clase, y con get obtener y set cambiar o dar


// ----------------------------------------------------------------------------------------------------
// 26. Objeto console 
// ----------------------------------------------------------------------------------------------------

// Esto como funciona el objeto de console, como imprimir cadenas y ejemplos.

// ----------------------------------------------------------------------------------------------------
// 27. Date Object
// ----------------------------------------------------------------------------------------------------

// Libreria moment.js