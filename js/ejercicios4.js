// 12) Program a function that determines if a number is prime (one that is only divisible by itself and 1) or not, e.g., myFunction(7) will return true.
const numeroPrimo = (numero = null) => {
    if (!numero) return console.info("El usuario no ingreso un numero o cero");
    if (!Number.isInteger(numero) || numero < 0) return console.log("El usuario debe ingresar un numero o un numero positivo");
    if (numero % 2 == 0) return console.log("El numero es divisible entre 2, NO ES PRIMO");
    if (numero % 3 == 0) return console.log("El numero es divisible entre 3, NO ES PRIMO");
    if (numero % 5 == 0) return console.log("El numero es divisible entre 3, NO ES PRIMO");
    console.log(`El numero es primo ${numero}`);
}
numeroPrimo(19);

// 13) Program a function that determines if a number is even or odd, e.g., myFunction(29) will return Odd.
const numeroParImpar = (par) => {
    if (!par) return console.info("El usuario no ingreso un numero o cero");
    if (!Number.isInteger(par) || par < 0) return console.log("El usuario debe ingresar un numero o un numero positivo");
    if ( par % 2 === 0 ) return console.log("El numero es PAR");
    console.log("El numero es IMPAR");
}
numeroParImpar(2);

// 14) Program a function to convert degrees Celsius to Fahrenheit and vice versa, e.g., myFunction(0,"C") will return 32°F.
const convertidorTemperatura = (temp = null, valor = "") => {
    if (!temp) return console.log("Ingresa la temperatura")
    if (!valor) return console.log("Ingresa el valor");
    if (valor === "C" ) return console.log("La temperatura son " + ((temp*9/5)+ 32) + " Fahrenheit ");
    if (valor === "F" ) return console.log("La temperatura son " + ((temp-32)*5/9) + " Celcios");
}
convertidorTemperatura(20, "C");
convertidorTemperatura(68, "F");

// In video 38, I will give you my solution. Before watching it, try to solve the exercises and share your results on a platform like GitHub or CodePen, and share the link to your solutions in the comments of this video.