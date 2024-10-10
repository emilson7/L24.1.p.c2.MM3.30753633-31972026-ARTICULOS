export default class Cl_articulo {
    constructor(nombre, cantidad, precioBase) {
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.precioBase = precioBase;
    }

    getNombre() {
        return this.nombre;
    }

    getCantidad() {
        return this.cantidad;
    }

    getPrecioBase() {
        return this.precioBase;
    }

    descuento() {
        return 0;
    }

    aPagar() {
        return this.cantidad * this.precioBase - this.descuento();
    }
}
