import Cl_juguete from "./Cl_juguete.js";

let juguete1 = new Cl_juguete("carrito", 2, 10, 2); 
let juguete2 = new Cl_juguete("peluche", 3, 20, 1); 

let salida = document.getElementById("Salida");

let mostrarResultado = (juguete) => {
    let montoAPagar = juguete.aPagar(); 
    return `
        <p>Nombre del juguete: ${juguete.getNombre()}</p>
        <p>Cantidad: ${juguete.getCantidad()}</p>
        <p>Precio base: $${juguete.getPrecioBase()}</p>
        <p>Edad recomendada: ${juguete.edad}</p>
        <p>Monto a pagar por el ${juguete.getNombre()}: $${montoAPagar.toFixed(2)}</p>
        <hr> <!-- Línea horizontal para separar los juguetes -->
    `;
};

salida.innerHTML = `
    ${mostrarResultado(juguete1)}
    ${mostrarResultado(juguete2)}
`;
