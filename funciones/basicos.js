/* **********     Curso JavaScript: 3. Variables: var 🥊VS🥊 let - #jonmircha     ********** */

    /* var hola = "Hola Mundo";
    let hello = "Hello World";
    console.log(hola);
    console.log(hello);
    console.log(window);
    console.log(window.hola);
    console.log(window.hello); */
    //Ambito de bloque
    //Esto es un bloque - comentario de una lines
    /*
    Esto
    es
    un
    comentario
    de
    varias
    líneas */
    /* console.log ("****************var*****************");
    var musica = "Rock";
    console.log("Variable Música antes del Bloque", musica);
    {
      var musica = "Pop";
      console.log("Variable Música dentro del Bloque", musica);
    }
    console.log("Variable Música después del Bloque", musica);
    console.log("****************let*****************");
    let musica2 = "Rock";
    console.log("Variable Música antes del Bloque", musica2);
    {
      let musica2 = "Pop";
      console.log("Variable Música dentro del Bloque", musica2);
    }
    console.log("Variable Música después del Bloque", musica2); */

     /* **********     Curso JavaScript: 4. Constantes (const) - #jonmircha     ********** */

    /*  let a;
     const PI = 3.1416;
     //const NUEVE;
     console.log(PI);
     //PI = 3.15;

     a = "kenai";
     console.log(a);

     const objeto = {
       nombre: "Jon",
       edad: 35
     }

     const colores = ["blanco", "negro", "azul"];

     console.log(objeto);
     console.log(colores);

     objeto.correo = "jonmircha@gmail.com";
     colores.push("anaranjado");

     console.log(objeto);
     console.log(colores); */

    /* **********     Curso JavaScript: 5. Cadenas de Texto (Strings) - #jonmircha     ********** */

    /*
        //Cadenas de Texto aka Strings
        let nombre = "Jon";
        let apellido = 'MirCha';
        let saludo = new String("Hola Mundo");
        let lorem = "       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, et dolorum. Adipisci sequi, voluptates accusamus earum magnam non pariatur odit consequuntur dicta modi. Quam soluta aliquid nam ea quod dolore.      ";

        console.log(nombre, apellido, saludo);
        console.log(
          nombre.length,
          apellido.length,
          saludo.length,
          nombre.toUpperCase(),
          apellido.toLowerCase(),
          lorem.includes("amet"),
          lorem.includes("jon"),
          lorem,
          lorem.trim(),
          lorem.split(" "),
          lorem.split(",")
        );

     */


    /* **********     Curso JavaScript: 6. Template Strings - #jonmircha     ********** */

    /* let nombre = "Jon";
    let apellido = "MirCha";
 */
    //Concatenación
    //let saludo = "Hola mi nombre es " + nombre + " " + apellido + ".";
    //console.log(saludo);

    //Interpolción de variables
    //Template String
    /* let saludo2 = `Hola mi nombre es ${nombre} ${apellido}.`;
    console.log(saludo2);

    let ul = "<ul>< li > Primavera</li><li>Verano</li><li>Otoño</li><li>Invierno</li></ul > ";

    console.log(ul);

    let ul2 = `
      <ul>
        <li>Primavera</li>
        <li>Verano</li>
        <li>Otoño</li>
        <li>Invierno</li>
    </ul>
    `;

    console.log(ul2);

    let ul3 = "<ul>";
    ul3 += "<li> Primavera</li>";
    ul3 += "<li>Verano</li>";
    ul3 += "<li>Otoño</li>";
    ul3 += "<li>Invierno</li>";
    ul3 += "</ul>";

    console.log(ul3);
 */
