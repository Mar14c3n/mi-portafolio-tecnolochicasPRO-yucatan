/*

Javascript es un lenguaje de programacion de tipado debil que corre en el navegador 


*/

/* variable*/

/*elegir el tipo de cajita

let: son para cajita que le podemos cambiar la estructura

const: cajitas que no les puedes cambiar la estructura

innamovible: sin son datos secillos, numeros, palabras,boleanos
pero para las listas y objetos  lo importante es que sigan siendo o listas o objetos pero si les puedes poner
mas objetos adentro de las listaso sacarle objetos  y a los objetos ponerles o quitarles propiedades


*/











console.log (document.getElementById('titulo'));
let elementoHTMLTitulo = document.getElementById('titulo');

let typewriter = new Typewriter(elementoHTMLTitulo, {
    loop: true
});

typewriter.typeString('Maria Jose')
    .pauseFor(2500)
    .deleteAll()
    .typeString('conoceme!!')
    .pauseFor(2500)
     .pauseFor(2500)
     .deleteAll()
    .start();