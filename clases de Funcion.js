 
 let x=5
let y=15
let suma = x + y;
console.log(suma)

//funcion de para sacar el promedio 
function sumatori(n1,n2,n3,n5,n6) {
    let promedio = (n1+n2+n3+n5+n6)/5;
    return promedio;
}

console.log(sumatori(10,9,5,9,10))


//  funcion de ventas del dias que me de el total 

function vent(array) {
    let Sumtotal = 0 ;
    for (let i = 0; i < array.length; i++) {
        Sumtotal += array[i];
    }
    return Sumtotal;
}
console.log(vent([10,20,50,10])) 



// funcion de numero pares
function sumapar(array) {
    let suma =0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0){
            suma += array[i];
        }
    }
    return suma;
}
console.log(sumapar([1,2,3,4,5,6,7]))




// funcion presentar los nombre en mayuscula 
function nomMayus(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i].toUpperCase());
    }
}
nomMayus(["ariel ","jose","maria","miguel"])

// funcion de que me devuelva valeres pares
// flitra numero impares
function sumaImpar(array) {
    let impar =[];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 1){
            impar.push(array[i]);
        }
    }
    return impar;
}
console.log(sumaImpar([1,2,3,4,5,6,7,8,9]));


// funcion que agrege un nombre 
/*
function sumaImpar(array) {
    let lis = ["maria","ariel","jose"];
    let impar =[];
    for (let i = 0; i < array.length; i++) {
            impar.push(array[i]);
    }
    return impar;
}
console.log(sumaImpar([1,2,3,4,5,6,7,8,9]));*/

// funcion anonima 
let sun = function(name){
    console.log("hola "+name);
};
sun("ariel")

// funcion flecha 

const add = (a,b) => {
    let suma = a +b
    return suma;
}
console.log(add(8,2));

// la misma manera de la de arriba pero mas reducida en funcion 
const a = (a,b) => a+b;
console.log(a(8,3));

// el filtarado 
// concepto es una funcion con otra funcion 
let number = [1,2,3,4,5]

function filtarado(x) {
    return x %2 == 1;
}
console.log(number.filter(filtarado))


// filtre los numero mayor a 10
// se usa para quitar valores no deseado
// se usa repuesta logica 
let may = [1,25,2,10,36,5,4,87];

function Mayonume(x) {
    return x >= 10 
}
console.log(may.filter(Mayonume))

// funcion con map 
// como usar: los  transforma todos lo elemento del array 

function dupli(x) {
    return x * 2
}
console.log(number.map(dupli))

// variable global : fuera de estrutura de code 
// variable local : se usa dentro de estrutura de code; 

