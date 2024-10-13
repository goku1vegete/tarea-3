
//1. Crea una función nombrada que sume dos números. 
function suma (n1,n2) {
    return n1 + n2;
}
console.log(suma(1,2))

//2. Escribe una función nombrada que reste dos números. 
function rest(n1,n2) {
    return n1 - n2
}
console.log(rest(10,1))

//3. Desarrolla una función nombrada que multiplique dos números. 
function multiplica(n1,n2) {
    return n1 * n2;
}
console.log(multiplica(5,5))

//4. Implementa una función nombrada que divida dos números. 
function divid(n1,n2) {
    return n1 / n2;
}
console.log(divid(2,1))
//5. Diseña una función nombrada que calcule el módulo de dos números. 
function modulo(n1,n2) {
    return n1 % n2
    
}
console.log(modulo(3,2))

//6. Asigna una función anónima a una variable que eleve un número al cuadrado. 
const cuadrado = function (n2) {
    return n2*n2;
}
console.log(cuadrado(3));

//7. Usa una función anónima para convertir grados Celsius a Fahrenheit. 
const Fra = function (g) {
    return g*(5/9)+32
}
console.log(Fra(25));

//8. Crea una función anónima que calcule el perímetro de un rectángulo. 
const perimetro = function (l, a) {
    return 2*(l+a);
}
console.log(perimetro(5,3));

//9. Implementa una función anónima que determine si un número es par o impar. 
const numPar = function (n){
       return (n % 2 == 0) ? console.log('el numero es par') : console.log('el numero es impar'); 
}
console.log(numPar(15))


//10. Escribe una función anónima que devuelva el número mayor entre dos números. 
const Mayormenor = function (n){
     return (n > 0) ? console.log('EL valor '+n+' es mayor') : console.log('EL valor '+n+' es menor')
}
console.log(Mayormenor(-10))


//11. Desarrolla una función flecha que calcule el área de un círculo. 
const areaCirculo = (r) => 3.14 * (r*r)
    console.log(areaCirculo(5));


//12. Crea una función flecha que convierta kilómetros a millas. 
const conver = (k) => k * 0.621371
console.log(conver(10));


//13. Escribe una función flecha que retorne el nombre completo dado un nombre y apellido. 
const name = (nombre) =>  nombre
console.log(name('christian ariel'))

/*
14. Implementa una función flecha que verifique si un texto contiene la letra 'a'. 
const verifi = (tex) => for( let i )


15. Diseña una función flecha que cuente cuántos elementos en un array son números. 
16. Escribe una función de orden superior que tome una función y la aplique a todos los 
elementos de un array. 
17. Crea una función de orden superior que filtre elementos de un array basándose en una 
condición dada. 
18. Desarrolla una función de orden superior que retorne una nueva función 
incrementadora. 
19. Implementa una función de orden superior que tome dos funciones como argumentos 
y elija una para ejecutar basada en una condición. 
20. Diseña una función de orden superior que modifique un objeto utilizando otra función 
proporcionada. 
21. Define una función constructora para un objeto "Coche" que tenga propiedades como 
marca, modelo y año. 
22. Crea una función constructora para un objeto "Libro" con propiedades de autor, título 
y año de publicación. 
23. Implementa una función constructora que cree objetos "Usuario" con nombre, correo 
electrónico y contraseña. 
24. Escribe una función constructora para "Producto" con propiedades de nombre, precio y 
cantidad. 
25. Desarrolla una función constructora que inicialice objetos "Estudiante" con nombre, 
matrícula y carrera. 
26. Escribe una función recursiva para calcular el factorial de un número. 
27. Crea una función recursiva que sume todos los números hasta un número dado. 
28. Implementa una función recursiva que encuentre el máximo común divisor (MCD) de 
dos números. 
29. Diseña una función recursiva que genere la secuencia de Fibonacci hasta un número 
específico. 
30. Desarrolla una función recursiva que invierta una cadena de texto. 
31. Demuestra el uso de una variable global modificándola dentro de una función. 
32. Escribe un código donde una variable local oculte una variable global del mismo nombre. 
33. Explica mediante un ejemplo cómo las variables locales pueden evitar conflictos de 
nombres. */