//ej 6 

//ej 5 - con ciertas modificaciones

const productos = [
    {
        id: 1,
        nombre: "Sandia",
        precio: 200,
        cant: 10,
        subtotal: 2000, 
    },
    {
        id: 2,
        nombre: "Papa",
        precio: 300,
        cant: 10,
        subtotal: 3000, 
    },
    {
        id: 3,
        nombre: "Uva",
        precio: 400,
        cant: 10,
        subtotal: 4000, 
    },
    {
        id: 4,
        nombre: "Durazno",
        precio: 500,
        cant: 10,
        subtotal: 5000, 
    },
    {
        id: 5,
        nombre: "Repollo",
        precio: 300,
        cant: 10,
        subtotal: 3000, 
    }
];

class IntroducirProducto {
    constructor(id, nombre, precio, cant, subtotal){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.cant = cant;
        this.subtotal = this.calcularSubtotal();
    }
   
    calcularSubtotal() {
        return this.precio * this.cant;
    }
}


//Utiliza el método find de array para buscar si se encuentra un producto en nuestro array.
//metodo find para encontrar un producto

const findSubtotal = productos.find(productos => productos.nombre == "Durazno");

console.log(findSubtotal);

//Filtrar los productos siguiendo un criterio por ejemplo que el nombre de un producto contenga una palabra o parte de ella. También puede filtrar por precio, cantidad, etc

//metodo filter para generar un subconjunto con los productos que contengan en su nombre la letra a
//se realiza de la misma manera pero como tenemos que ver si la letra esta o no se usa el metodo includes
const filterA = productos.filter(productos => productos.nombre.toLowerCase().includes("a"));

console.log(filterA);

//Utilice el método map para actualizar el precio en un 21% agregando el IVA u otro valor de aumento que desee aplicar sobre cada uno de los productos obteniendo un nuevo array de productos actualizado.

let modificadorProductos = productos.map(function(producto) {
    return { ...producto, precio: producto.precio * 1.21 };
});

//los tres puntos se llaman spread operator, se utiliza para dividir un objeto en partes individuales

console.log(modificadorProductos);