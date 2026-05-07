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

                        alert("Nombre: " + producto.nombre + "\n" +
                              "Precio: " +  producto.precio + "\n" +
                              "Cantidad: " +  producto.cantidad 
                        );
            }
               
            }

            break;
        case "3":
            let nombreActualizar = prompt("Por favor escribe el producto que deseas actualizar")
            let producto = inventario.find(producto => producto.nombre === nombreActualizar);        //Recorre el arreglo y devuelve el primer elemento que cumpla la condición 

            if(producto) {
                let nuevoPrecio = parseFloat(prompt("Por favor ingresa el nuevo precio"));
                let nuevaCantidad =  parseInt(prompt("Por favor ingresa la nueva cantidad"));

                producto.precio = nuevoPrecio;
                producto.cantidad = nuevaCantidad;

                alert("Se ha actualizado correctamente");

            } else {

                alert("producto no encontrado");
            }

            break;
        case "4":
            let nombreEliminar = prompt("Por favor escribe el producto que deseas Eliminar")
            let indice = inventario.findIndex(producto => producto.nombre === nombreEliminar)

            if (indice !== -1){

                inventario.splice(indice,1)
                alert("producto eliminado exitosamente")

            } else {

                alert("producto no encontrado")
            }

            break;
        case "5":
            alert("Cerrando el menu...")
            break;

        default:
            alert("Opcion invalida")

    }



} 