// ¿Qué es una variable y para qué sirve?
/* Una variable es un espacio reservado en memoria 
y sirve para almacenar datos */

// ¿Cuál es la diferencia entre declarar e inicializar una variable?
/* Si cuando se declara una variable se le asigna también un valor, se dice que la variable ha sido inicializada. 
En JavaScript no es obligatorio inicializar las variables, ya que se pueden declarar por una parte y asignarles un valor posteriormente. */

// ¿Cuál es la diferencia entre sumar números y concatenar strings?
/* Sumar números es una operación matemática y concatenar es unir strings uno tras otro. */

// ¿Cuál operador me permite sumar o concatenar?
/* + */


// 3 y 4
var nombre = "Gaston";
var apellido = "Losardo";

var dineroAhorrado = 20000;
var deudas = 3000;

var nombreCompleto = nombre + " " + apellido
console.log(nombreCompleto);

var dineroReal = dineroAhorrado - deudas;
console.log(dineroReal);

// FUNCIONES
// 1
// ¿Cuál es la diferencia entre parámetros y argumentos de una función?
/*
- Los parámetros de una función hacen referencia a los datos que son necesarios para poder ejecutar el grupo de instrucciones asociadas a dicha función.
- Los argumentos son los valores concretos con los que se invoca a una función. 
*/

// 2 - Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

const namee = "Juan David";
const lastname = "Castro Gallego";
const completeName = namee + lastname;
const nickname = "juandc";

function saludar(fullNombre, seudonimo) {
    return "Mi nombre es " + fullNombre + ", pero prefiero que me digas " + seudonimo + ".";
}

saludar(completeName, nickname);

// CONDICIONALES
// 2 Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:

const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}

if(tipoDeSuscripcion == "Free") {
    return "Solo puedes tomar los cursos gratis";
} else if(tipoDeSuscripcion == "Basic") {
    return "Puedes tomar casi todos los cursos de Platzi durante un mes";
} else if(tipoDeSuscripcion == "Expert") {
    return "Puedes tomar casi todos los cursos de Platzi durante un año";
} else if(tipoDeSuscripcion == "ExpertPlus") {
    return "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año";
} else {
    return "No tienes suscripción a Platzi";
}

// Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).

function suscripcionesTipo(suscription) {
    if(suscription == "Free" ) {
        console.log("Solo puedes tomar los cursos gratis");
        return;
    }

    if(suscription == "Basic" ) {
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
        return;
    }

    if(suscription == "Expert" ) {
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
        return;
    }

    if(suscription == "ExpertDuo" ) {
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
        return;
    }

    console.warn("No tienes ninguna suscripción!");
}

let tipoDeSuscripciones = {
    free: "Solo puedes tomar los cursos gratis",
    basic: "Puedes tomar casi todos los cursos de Platzi durante un mes",
    expert: "Puedes tomar casi todos los cursos de Platzi durante un año",
    expertduo: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
}

function mostrarSuscripcion(tipoSuscripcion) {
    if(tipoDeSuscripciones[tipoSuscripcion]) {
        console.log(tipoDeSuscripciones[tipoSuscripcion]);
    }
}