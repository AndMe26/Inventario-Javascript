const leer = require("readline");  // Readline: permite leer lo que el usuario escribe y mostrar preguntas en consola 

const entradaSalida = leer.createInterface({       //entradaSalidad: es el controlador es el objeto que se va a usar para preguntar cosas al usuario
    input: process.stdin,                          // createInterface: se configura como se comunica el programa
    output: process.stdout                         // input: process.stdin > lo que el usuario escribe
});                                                // output: process.stdout > lo que el programa muestra 

function mostrarMenu() {

    console.log("\n-----Menu-----")
    console.log("1. Agregar Producto")
    console.log("2. Mostrar inventario")
    console.log("3. Buscar producto")
    console.log("4. Salir")

    entradaSalida.question("Elige una opcion:", function (opcion) {              //entradaSalida.question: Muestra la pregunta al usuario,
        switch (opcion) {                                                        //espera que escriba algo, guarda lo que escribe en opcion, ejecuta la funcion despues  

            case "1":
                console.log("Elegiste: Agregar producto");
                break;

            case "2":
                console.log("Elegiste: Mostrar inventario");
                break;

            case "3":
                console.log("Elegiste: Buscar producto");
                break;

            case "4":
                console.log("Saliendo...");
                entradaSalida.close();
                return;

            default:
                console.log("Opción inválida");
        }

        
        mostrarMenu();                        
    });                                                                    
    
}