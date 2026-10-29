//15) Program a function to convert numbers from binary to decimal and vice versa, e.g., myFunction(100,2) will return 4 base 10.
//const convertidor = (binario = undefined, grado = undefined) => console.log(parseInt(binario, grado));
//convertidor(1011, 2);
//
//Mejora
const convertirBinarioDecimal = (numero = undefined, base = undefined) => {
    if (numero === undefined) return console.log("No ingresaste el numero a convertir");
    if (typeof numero !== "number") return console.error(`El valor "${numero}" ingresado, No es un numero`);
    if (base === undefined) return console.warn("No ingresaste la base a convertir");
    if (typeof base !== "number") return console.error(`El valor "${base}" ingresado, NO es un numero`);
    // Anterionmente se realizo la validacion de errores

    if (base === 2) {
        return console.info(`${numero} base ${base} = ${parseInt(numero, base)} base 10`)
    } else if (base === 10) {
        return console.info(`${numero} base ${base} = ${numero.toString(2)} base 2`);
    } else {
        return console.error("El tipo de grados a convertir NO es valido");
    }
}

    convertirBinarioDecimal();
    convertirBinarioDecimal("2");
    convertirBinarioDecimal(100);
    convertirBinarioDecimal(100, "2");
    convertirBinarioDecimal("100");
    convertirBinarioDecimal(100, 2);
    convertirBinarioDecimal(4, 10);

//16) Program a function that returns the final amount after applying a discount to a given amount, e.g., myFunction(1000, 20) will return 800.
const descuento = (neto = null, porcentaje = null) => console.log((neto-(neto/100)*porcentaje));
//if (!neto) return console.log("Debe ingresar la el valor correcto");
//if (!porcentaje) return console.log("Debe ingresar la el porcentaje correcto");
descuento(1000, 20);

//17) Program a function that, given a valid date, determines how many years have passed until today, e.g., myFunction(new Date(1984,4,23)) will return 35 years (in 2020). 
const fechaValida = (fecha = null) => console.log(2026-(fecha.getFullYear())+ " anios.");
//if (!fecha) console.log("Debe ingresar la fecha en el formato correcto");
fechaValida(new Date(1984, 4, 23));