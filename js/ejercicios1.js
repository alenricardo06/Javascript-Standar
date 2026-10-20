//1) Program a function that counts the number of characters in a text string, e.g., myFunction("Hello World") will return 10.
function cadena(valor) {
    console.log(valor.length);
}
cadena("Hola, perro");

//2) Program a function that returns the text trimmed according to the number of characters indicated, e.g., myFunction("Hello World", 4) will return "Hello".
function separar(parametro) {
    let resultado = parametro.split(" ");
    console.log(resultado[0]);
}
separar("Hola mundo perra");

 //2.2) Program a function that returns the text trimmed according to the number of characters indicated, e.g., myFunction("Hello World", 4) will return "Hello".
function separar2(parametro2, corte) {
    let resultado2 = parametro2.slice(0, corte);
    console.log(resultado2);
}
separar2("Hola mundo perra", 6);

//3) Program a function that, given a String, returns an Array of texts separated by a certain character, e.g., myFunction('hello, how are you', ' ') will return ['hello', 'that', 'such'].
function separado(texto, separador) {
    let resul = texto.split(separador);
    console.log(resul)
}

separado("Hola mundo", " ");

//4) Program a function that repeats a text X times, e.g., myFunction('Hello World', 3) will return Hello World Hello World Hello World.

function repetir(cosa, veces) {
    let total = "";
    for (let index = 0; index < veces; index++) {
        total += (index > 0 ? " " : "") + cosa;
    }
    console.log(total);
}

repetir("La vida es dura", 3)