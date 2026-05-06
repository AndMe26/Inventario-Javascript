let inventario = [];
let opcion = "";

while (opcion !== "5") {
    opcion = prompt(
        "== Menu == \n" +
        "1. Agregar producto \n" +
        "2. Mostrar inventario\n" +
        "3. Actualizar producto \n" +
        "4. Eliminar producto \n" +
        "5. Salir"
    );

    switch (opcion) {
        case "1":
            let nombreProducto = prompt("Por favor escribe el nombre del producto:")
            let precioProducto = parseFloat(prompt("Por favor escribe el precio del producto:"))   // ParseFloat: convierte a número decimal
            let cantidadProducto = parseInt(prompt("Por favor escribe la cantidad del producto:"))  // ParseInt: convierte a número entero (sin decimales)
            if (isNaN(precioProducto) || isNaN(cantidadProducto)) {                                 // isNaN: Le pregunta a javascript esto que tengo No es un numero y responde con true o false
                alert("El precio y la cantidad deben ser numeros")
            } else {
                inventario.push({ nombre: nombreProducto, precio: precioProducto, cantidad: cantidadProducto });
                alert("se ha agregado el producto Correctamente")
            }
            break;
        case "2":
            if (inventario.length === 0) {                                               // if (condicion) : "si el inventario esta vacio "                                                   
                alert("El inventario esta vacio")                                        // .length : es una propiedad que indica la cantidad de elementos presentes.
            } else { for(let i = 0; i < inventario.length; i++){                         // for(incio: ej: x=5;Condicion: x<(variable o numero fijo);paso(step))
                        let producto = inventario[i];

                        alert("Nombre: " + inventario[i].nombre + "\n" +
                              "Precio: " +  inventario[i].precio + "\n" +
                              "Cantidad: " +  inventario[i].cantidad 
                        );
            }
               
            }

            break;
        case "3":

            break;
        case "4":

            break;
        case "5":
            alert("Cerrando el menu...")
            break;

        default:
            alert("Opcion invalida")

    }



} 