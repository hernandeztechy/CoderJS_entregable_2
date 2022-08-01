//Estefania Hernandez Porras
//Calcular valor final de una producto en funcion de sus impuestos y descuentos

let precio = Number(prompt("Cual es el precio inicial del producto?"))
let contImp = 0;
let contDesc = 0;
let TotalImp = 0;
let TotalDesc = 0;
console.log("Precio inicial: "+precio);

//funciones
const calcularImpuesto = (precio, impuesto) =>
{
    let imp=precio*impuesto;
    TotalImp += imp;
    console.log("Impuesto de "+impuesto+" es equivalente a: "+imp);
}

const calcularDescuento = (precio, descuento) =>
{
    let desc=precio*descuento;
    TotalDesc += desc;
    console.log("Descuento de "+descuento+" es equivalente a: "+desc);
}

const TotalFinal = (precio,TotalDesc,TotalImp) => {let final=(precio-TotalDesc)+TotalImp
    console.log("Precio final: "+final)}


//codigo normal
contDesc = Number(prompt("Presione 1 para agregar un descuento, 0 para ir a impuestos."));
while(contDesc==1)
{   
    let descuento = Number(prompt("Ingrese el descuento: (ejemplo 0.05 equivale a 5%)"))
    calcularDescuento(precio,descuento);
    contDesc = Number(prompt("Presione 1 para agregar otro descuento, 0 para ir a impuestos."));
}

console.log("Total de descuentos: "+TotalDesc);

contImp=Number(prompt("Presione 1 para agregar un impuesto, 0 para ir terminar."))
while(contImp==1)
{   
    let impuesto = Number(prompt("Ingrese el impuesto: (ejemplo 0.13 equivale a 13%)"))
    calcularImpuesto(precio,impuesto);
    contImp=Number(prompt("Presione 1 para agregar otro impuesto, 0 para salir."))
}

console.log("Total de impuestos: "+TotalImp);

TotalFinal(precio,TotalDesc,TotalImp)

