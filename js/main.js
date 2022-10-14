import prompt from 'prompt';
const producto = [
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

let seleccion = prompt("Desea comprar algun producto si, no")

while(seleccion == "si" && seleccion !="no"){
    alert("Ingrese respuesta valida")
    seleccion = prompt("Desea comprar algun producto si, no")
}

if(seleccion == "si"){
    alert("Productos en la lista")
    let TodosLosProductos = productos.map(
        (productos)=> productos.nombre + " " + producto.precio + "$"
    );
    alert(TodosLosProductos.join(" "))
}   else if (seleccion == "no"){ 
    alert("Gracias, vuelva pronto!!")
}

while(seleccion != "no"){
    let producto = prompt("Agregar producto a tu carrito")
    let precio = 0 

    if(producto == "Queso Mantecoso" || producto == "Flan Caramelo" || producto == "Soprole Uno" || producto == "Chamyto" || producto == "Leche Soprole" || producto == "Soprole Yoghurt" ||
       producto == "Nectar" || producto == "Kem" || producto == "Coca-cola" || producto == "Monster" || producto == "Gatorade" || producto == "Red Bull" ||
       producto == "Lysoform" || producto == "Virutex" || producto == "Poett" || producto == "Magistral" || producto == "Quix" || producto == "Clorox" ){
        switch (producto){
            case "Queso Mantecoso":
                precio = 3390;
                break;
            case "Flan Caramelo":
                precio = 325;
                break; 
            case "Soprole Uno":
                precio = 3890;
                break;  
            case "Chamyto":
                precio = 4050;
                break;
            case "Leche Soprole":
                precio = 950;
                break; 
            case "Soprole Yoghurt":
                precio = 230;
                break; 
            case "Nectar":
                precio = 1250;
                break;
            case "Kem":
                precio = 2390;
                break; 
            case "Coca-cola":
                precio = 2290;
                break;  
            case "Monster":
                precio = 1550;
                break;
            case "Gatorade":
                precio = 1250;
                break; 
            case "Red Bull":
                precio = 1390;
                break; 
            case "Lysoform":
                precio = 1000;
                break;
            case "Virutex":
                precio = 1640;
                break; 
            case "Poett":
                precio = 5110;
                break;  
            case "Magistral":
                precio = 5490;
                break;
            case "Quix":
                precio = 3190;
                break; 
            case "Clorox":
                precio = 2590;
                break;
            default: 
                break;                          
    }
    let unidades = parseInt(prompt("Unidades a llevar"))

    carrito.push({producto, unidades, precio})
    console.log(carrito)
    }else{
        alert("Producto no encontrado")
    } 

    seleccion = promp("Desea seguir comprando?")

    while(seleccion == "no"){
        alert("Gracias por su compra! hasta pronto")
        carrito.forEach((carritofinal) => {console.log('producto: ${carritofinal.producto}, unidades: ${carritofinal.producto.unidades},total a pagar por producto ${carritofinal.unidades * carritofinal.precio}')
    })
    break;    
    }
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
console.log('Total a pagar: ${}')