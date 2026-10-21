
//5) Program a function that reverses the words in a text string, e.g., myFunction("Hello World") will return "odnuM aloH".
const revertirTexto = (cadena = "") => {
    if (!cadena) return console.error("El usuario no ingreso ningun valor en la cadena");
    let arr = cadena.split("").reverse().join("");
    console.log(arr)
}
revertirTexto("Hola");


//6) Program a function to count the number of times a word is repeated in a long text, e.g., myFunction("hello world goodbye world", "world") will return 2.
const contarNumeroVeces = (parrafo = "", palabra = "") => {
    if (!parrafo) return console.log("El usuario no ingreso el parrafo");
    if (!palabra) return console.log("El usuario no ingreso la palabra a buscar");
    console.log(parrafo.match(
        new RegExp(`\\b${palabra}\\b`, "gi")
    ).length);
}
contarNumeroVeces("Hola mundo como estas? Hola Hola", "Hola");

//7) Program a function that validates whether a given word or phrase is a palindrome (reads the same backward as forward), e.g., myFunction("Rooms") will return true.
const palindrome = (grupo = "") => {
    if (!grupo) return console.log("El usuario no ingreso la palabra");
    if (grupo === grupo.split("").reverse().join("")) return console.log("Es una palabra palindrome");
    console.log("No es una palabra palindrome");
}
palindrome("loolo");

//8) Program a function that removes a certain pattern of characters from a given text, e.g. My function("xyz1, xyz2, xyz3, xyz4, y xyz5", "xyz") will return "1, 2, 3, 4, and 5".
const parametros = (contexto = "",patron = "") => {
    if (!contexto) return console.log("La cadena no tiene valor");
    if (!patron) return console.log("La cadena no tiene valor");
    let arr1 = contexto.split(patron).join("");
    console.log(arr1); 
}
parametros("xyz1, xyz2, xyz3, xyz4, y xyz5", "xyz");

//In video 36, I'll give you my solution. Before watching it, try to solve the exercises and share your results on a platform like GitHub or CodePen. Share the link to your solutions in the comments of this video.