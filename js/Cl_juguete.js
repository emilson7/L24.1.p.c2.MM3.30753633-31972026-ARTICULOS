import Cl_articulo from "./Cl_articulo.js";

export default class Cl_juguete extends Cl_articulo {
    constructor(nombre, cantidad, precioBase, edad) {
        super(nombre, cantidad, precioBase);
        this.edad = edad;
    }
    
    descuento() {
    
        if (this.edad === 1) {
            return 0.10 * (this.cantidad * this.precioBase);
        }
        return 0; 
    }
}
