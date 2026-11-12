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

    
    /* **********     Curso JavaScript: 7. Números (Numbers) - #jonmircha     ********** */

    /* let a = 2;
    let b = new Number(1);
    let c = 7.19;
    let d = "5.6";

    console.log(a, b);
    console.log(c.toFixed(1));
    console.log(c.toFixed(5));
    console.log(parseInt(c));
    console.log(parseFloat(c));
    console.log(typeof c, typeof d);
    console.log(a + b);
    console.log(c + parseInt(d));
    console.log(c + parseFloat(d));
    console.log(c + Number.parseInt(d));
    console.log(c + Number.parseFloat(d)); */

 /* **********     Curso JavaScript: 8. Booleans - #jonmircha     ********** */

    /* let verdadero = true;
    let falso = false;
    let v = Boolean(true);
    let f = Boolean(false);

    console.log(verdadero, falso, v, f);
    console.log(typeof verdadero, typeof falso);
    console.log(Boolean(0));
    console.log(Boolean(-7));
    console.log(Boolean(""));
    console.log(Boolean(" ")); */

        /* **********     Curso JavaScript: 9. undefined, null & NaN - #jonmircha     ********** */

    //undefined indica que no se ha inicializado una variable y que el valor está ausente
    /* let indefinida;
    console.log(indefinida); */

    //null es un valor especial que indica la ausencia de un valor
    /* let nulo = null;
    console.log(null); */

    //NaN - Not a Number
    /* let noEsUnNumero = "hola" * 3.7;
    console.log(noEsUnNumero); */

        /* **********     Curso JavaScript: 10. Funciones - #jonmircha     ********** */

    /*
    Una función es un bloque de código, autocontenido, que se puede definir una vez y ejecutar en cualquier momento. Opcionalmente, una función puede aceptar parámetros y devolver un valor.

    Las funciones en JavaScript son objetos, un tipo especial de objetos:

    Se dice que las funciones son ciudadanos de primera clase porque pueden asignarse a un valor, y pueden pasarse como argumentos y usarse como un valor de retorno.
    */

    //Declaración de función
    /*  function estoEsUnaFuncion() {
       console.log("Uno");
       console.log("Dos");
       console.log("Tres");
     } */

    //Invocación de función
    /* estoEsUnaFuncion();
    estoEsUnaFuncion();
    estoEsUnaFuncion();
    estoEsUnaFuncion(); */

    /* function unaFuncionQueDevuelveValor() {
      console.log("Uno");
      return 19;
      console.log("Dos");
      console.log("Tres");
      return "La función ha retornado una Cadena de texto";
    } */

    //let valorDeFuncion = unaFuncionQueDevuelveValor();

    //console.log(valorDeFuncion);

    /*  function saludar(nombre = "Desconocido", edad = 0) {
       console.log(`Hola mi nombre es ${nombre} y tengo ${edad} años.`);
     } */

    //saludar("kEnAi", 7);
    //saludar();

    //Funciones declaradas VS funciones expresadas

    //funcionDeclarada();

    /* function funcionDeclarada() {
      console.log("Esto es un función declarada, puede invocarse en cualquier parte de nuestro código, incluso antes de que la función sea declarada");
    } */

    //funcionDeclarada();

    //funcionExpresada();

    //función anónima
    /* const funcionExpresada = function () {
      console.log("Esto es una función expresada, es decir, una función que se le ha asignado como valor a una variable, si invocamos esta función antes de su definición JS nos dirá 'Cannot access 'funcionExpresada' before initialization'")
    } */

    //funcionExpresada();

