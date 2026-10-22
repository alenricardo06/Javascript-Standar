// 9) Program a function that obtains a random number between 501 and 600.
const numeroRandon = () => console.log(Math.round(Math.random() * (600 - 501) + 501));
numeroRandon();

// 10) Program a function that receives a number and evaluates whether it is a capicua (reads the same backward as forward), e.g., myFunction(2002) will return true.
const capicua = (numero = null) => {
    if (!numero) return console.log("El usuario no ingreso ningun valor.");
    if (typeof numero !== "number") return console.error(`El valor de "${numero}" ingresado, No es un numero`);
    console.log(numero.toString().split("").reverse().join("") === numero.toString());
}
capicua(202);

// 11) Program a function that calculates the factorial of a number (the factorial of a positive integer n is defined as the product of all positive integers from 1 to n), e.g. MyFunction(5) will return 120.
const factorial = (facto = null) => {
    if (!facto) return console.log("El usuario no ingreso ningun valor");
    if (!Number.isInteger(facto) || facto < 0) return console.log("El usuario debe ingresar un numero o un numero positivo");
    let element = 1;
    for (let i = 1; i <= facto; i++) element *= i;
    console.log(element);
}
factorial(5);

// In video 37, I'll give you my solution. Before watching, try to solve the exercises and share your results on a platform like GitHub or CodePen. Share the link to your solutions in the comments of this video.