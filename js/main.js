const productos = [
    { nombre: "Queso Mantecoso", precio: 3390 },
    { nombre: "Flan Caramelo", precio: 325 },
    { nombre: "Soprole Uno", precio: 3890 },
    { nombre: "Chamyto", precio: 4050 },
    { nombre: "Leche Soprole", precio: 950 },
    { nombre: "Soprole Yoghurt", precio: 230 },    

    { nombre: "Nectar", precio: 1250 },
    { nombre: "Kem", precio: 2390 },
    { nombre: "Coca-cola", precio: 2290 },
    { nombre: "Monster", precio: 1550 },
    { nombre: "Gatorade", precio: 1250 },
    { nombre: "Red Bull", precio: 1390 },

    { nombre: "Lysoform", precio: 1000 },
    { nombre: "Virutex", precio: 1640 },
    { nombre: "Poett", precio: 5110 },
    { nombre: "Magistral", precio: 5490 },
    { nombre: "Quix", precio: 3190 },
    { nombre: "Clorox", precio: 2590 },
];

let carrito = []

let seleccion = prompt("Desea agregar otro producto si, no")

while(seleccion == "si" && seleccion !="no"){
    alert("Ingrese respuesta valida")
    seleccion = prompt("Desea agregar otro producto si, no")
}

if(seleccion == "si"){
    alert("Productos en la lista")
    let TodosLosProductos = productos.map(
        (productos)=> productos.nombre + " " + producto.precio + "$"
    );
}