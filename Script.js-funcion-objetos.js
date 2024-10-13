
//1. Crea una función nombrada que sume dos números.
function sumar(a, b) {
  return a + b;
}

console.log(sumar(4,5))

//2. Escribe una función nombrada que reste dos números. 
function restar(a, b) {
  return a - b;
}
console.log(restar(10, 3))

//3. Desarrolla una función nombrada que multiplique dos números. 
function multiplicar(a, b) {
  return a * b;
}
console.log(multiplicar(5, 6))

//4. Implementa una función nombrada que divida dos números. 
function dividir(a, b) {
  if (b !== 0) {
    return a / b;
  } else {
    return "Error: No se puede dividir por cero";
  }
}
console.log(dividir(10, 2))

//5. Diseña una función nombrada que calcule el módulo de dos números. 
function modulo(a, b) {
  return a % b;
}
console.log(modulo(5, 2))

//6. Asigna una función anónima a una variable que eleve un número al cuadrado. 
const alCuadrado = (x) => x ** 2;
console.log(alCuadrado(5))

//7. Usa una función anónima para convertir grados Celsius a Fahrenheit. 
const celsiusAFahrenheit = (celsius) => (celsius * 9/5) + 32;
console.log(celsiusAFahrenheit(30))

//8. Crea una función anónima que calcule el perímetro de un rectángulo. 
const perimetroRectangulo = (largo, ancho) => 2 * (largo + ancho);
console.log(perimetroRectangulo(5, 3))

//9. Implementa una función anónima que determine si un número es par o impar. 
const esPar = (numero) => numero % 2 === 0 ? "Par" : "Impar";
console.log(esPar(4))


//10. Escribe una función anónima que devuelva el número mayor entre dos números. 
const mayorDeDos = (a, b) => Math.max(a, b);
console.log(mayorDeDos(5, 10))

//11. Desarrolla una función flecha que calcule el área de un círculo. 
const areaCirculo = (radio) => Math.PI * (radio ** 2);
console.log(areaCirculo(5))

//12. Crea una función flecha que convierta kilómetros a millas. 
const kmAMillas = (kilometros) => kilometros * 0.621371;
console.log(kmAMillas(10))

//13. Escribe una función flecha que retorne el nombre completo dado un nombre y apellido. 
const nombreCompleto = (nombre, apellido) => `${nombre} ${apellido}`;
console.log(nombreCompleto('ariel','espinoza'))

//14. Implementa una función flecha que verifique si un texto contiene la letra 'a'. 
const contieneA = (texto) => texto.toLowerCase().includes('a');
console.log(contieneA('Hola mundo'))

//15. Diseña una función flecha que cuente cuántos elementos en un array son números. 
const contarNumeros = (array) => array.filter(Number).length;
console.log(contarNumeros([1, 2, 'a', 3, 5 ,"p"]))

//16. Escribe una función de orden superior que tome una función y la aplique a todos los 
//elementos de un array. 
function aplicarFuncion(array, funcion) {
  for (let i = 0; i < array.length; i++) {
    array[i] = funcion(array[i]);
  }
  return array;
}
function doblar(nu) {
  return nu * 2;
}

const nu = [1, 2, 3, 4, 5];
const numerosDobles = aplicarFuncion(nu, doblar);
console.log(numerosDobles); 


//17. Crea una función de orden superior que filtre elementos de un array basándose en una 
//condición dada. 
const filtrarArray = (condicion, array) => array.filter(condicion);
console.log(filtrarArray(x => x > 5, [1, 2,8,3,58,8]))

//18. Desarrolla una función de orden superior que retorne una nueva función 
//incrementadora. 
function crearIncrementador(valorInicial) {
  return function() {
    return valorInicial++;
  }
}
const incrementador = crearIncrementador(10);
console.log(incrementador()); 
console.log(incrementador()); 
console.log(incrementador()); 

//19. Implementa una función de orden superior que tome dos funciones como argumentos 
//y elija una para ejecutar basada en una condición. 
function ejecutarFuncion(condicion, funcionVerdadera, funcionFalsa) {
  if (condicion) {
    return funcionVerdadera();
  } else {
    return funcionFalsa();
  }
}
function saludar() {
  return "Hola, mundo!";
}

function despedir() {
  return "Adiós, mundo!";
}

const resultado = ejecutarFuncion(true, saludar, despedir);
console.log(resultado); 

const resultado2 = ejecutarFuncion(false,saludar,despedir);
console.log(resultado2); 

//20. Diseña una función de orden superior que modifique un objeto utilizando otra función 
//proporcionada. 
function modificarObjeto(objeto, funcionModificadora) {
  funcionModificadora(objeto);
  return objeto;
}
const objetoOriginal = { nombre: 'Juan', edad: 25 };

function agregarApellido(objeto) {
  objeto.apellido = 'Pérez';
}

const objetoModificado = modificarObjeto(objetoOriginal, agregarApellido);
console.log(objetoModificado);

//21. Define una función constructora para un objeto "Coche" que tenga propiedades como 
//marca, modelo y año. 
function Coche(marca, modelo, año) {
  this.marca = marca;
  this.modelo = modelo;
  this.año = año;
}
const miCoche = new Coche('Toyota', 'Corolla', 2015);
console.log(miCoche);

//22. Crea una función constructora para un objeto "Libro" con propiedades de autor, título 
//y año de publicación. 
function Libro(autor, título, añoPublicación) {
  this.autor = autor;
  this.título = título;
  this.añoPublicación = añoPublicación;
}
const milibro = new Libro('christian','el mas fuerte de muldo',2023);
console.log(milibro)

//23. Implementa una función constructora que cree objetos "Usuario" con nombre, correo 
//electrónico y contraseña. 
function Usuario(nombre, correoElectrónico, contraseña) {
  this.nombre = nombre;
  this.correoElectrónico = correoElectrónico;
  this.contraseña = contraseña;
}
const miUsuario = new Usuario('Juan', 'juan@gmail.com', '123456');
console.log(miUsuario)

//24. Escribe una función constructora para "Producto" con propiedades de nombre, precio y 
//cantidad. 
function Producto(nombre, precio, cantidad) {
  this.nombre = nombre;
  this.precio = precio;
  this.cantidad = cantidad;
}
const miProducto = new Producto('Camisa', 20, 10);
console.log(miProducto)

//25. Desarrolla una función constructora que inicialice objetos "Estudiante" con nombre, 
//matrícula y carrera. 
function Estudiante(nombre, matrícula, carrera) {
  this.nombre = nombre;
  this.matrícula = matrícula;
  this.carrera = carrera;
  
}
const estudiante1 = new Estudiante('Juan Pérez', '123456', 'Ingeniería en Computación');
console.log(estudiante1);



//26. Escribe una función recursiva para calcular el factorial de un número. 
function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
console.log(factorial(5))

//27. Crea una función recursiva que sume todos los números hasta un número dado. 
function sumarHasta(n) {
  if (n === 0) {
    return 0;
  } else {
    return n + sumarHasta(n - 1);
  }
}
console.log(sumarHasta(3))

//28. Implementa una función recursiva que encuentre el máximo común divisor (MCD) de 
//dos números. 
function mcd(a, b) {
  if (b === 0) {
    return a;
  } else {
    return mcd(b, a % b);
  }
}
console.log(mcd(4,2))

//29. Diseña una función recursiva que genere la secuencia de Fibonacci hasta un número 
//específico. 
function fibonacci(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}
console.log(fibonacci(5))

//30. Desarrolla una función recursiva que invierta una cadena de texto. 
function invertirCadena(cadena) {
  if (cadena.length === 0) {
    return "";
  } else {
    return invertirCadena(cadena.slice(1)) + cadena[0];
  }
}
console.log(invertirCadena('ariel '))

//31. Demuestra el uso de una variable global modificándola dentro de una función. 
let globalv = 10;

function modifyGlobal() {
  globalv = 20;
}

modifyGlobal();
console.log(globalv);

//32. Escribe un código donde una variable local oculte una variable global del mismo nombre. 
let globalVariable = 10;

function hideGlobal() {
  let globalVariable = 20;
  console.log(globalVariable); 
}

hideGlobal();
console.log(globalVariable);

//33. Explica mediante un ejemplo cómo las variables locales pueden evitar conflictos de 
//nombres. 
let x = 10;

function outer() {
  let x = 20;

  function inner() {
    let x = 30;
    console.log(x); 
  }

  inner();
  console.log(x); 
}

outer();
console.log(x); 


//34. Implementa un contador utilizando una variable global. 
let contador = 0;

function count() {
  contador++;
  console.log(contador);
}

count(); 
count()
count(); 
count(); 

//35. Crea una función que intente modificar una variable local definida en otra función. 
function outer() {
  let x = 10;

  function inner() {
    x = 20; 
  }

  inner();
  console.log(x);
}

outer();

//36. Escribe una función que determine si un año es bisiesto. 
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

console.log(isLeapYear(2020)); 
console.log(isLeapYear(2019)); 

//37. Implementa una función que evalúe tres números y retorne el mayor. 
function max(a, b, c) {
  return Math.max(a, b, c);
}

console.log(max(1, 2, 3)); 
console.log(max(5, 3, 1)); 

//38. Diseña una función que decida si un estudiante aprueba o reprueba basado en su nota. 
function approveStudent(nota) {
  if (nota >= 60) {
    return "Aprueba";
  } else {
    return "Reprueba";
  }
}

console.log(approveStudent(70)); 
console.log(approveStudent(40)); 

//39. Crea una función que clasifique una edad en categorías (niño, adolescente, adulto, 
//anciano). 
function classifyAge(edad) {
  if (edad < 12) {
    return "Niño";
  } else if (edad < 18) {
    return "Adolescente";
  } else if (edad < 65) {
    return "Adulto";
  } else {
    return "Anciano";
  }
}

console.log(classifyAge(10)); 
console.log(classifyAge(25)); 
console.log(classifyAge(70)); 

//40. Desarrolla una función que verifique si un usuario tiene acceso basado en su edad. 
function hasAccess(edad) {
  if (edad >= 18) {
    return true;
  } else {
    return false;
  }
}

console.log(hasAccess(20));
console.log(hasAccess(15));

//41. Escribe un bucle while que cuente de 1 a 100. 
let i = 1;
while (i <= 100) {
  console.log(i);
  i++;
}

//42. Implementa un bucle while que sume los primeros 50 números naturales. 
let sum = 0;
let j = 1;
while (j <= 50) {
  sum += j;
  j++;
}
console.log(sum);

//43. Crea un bucle while que repita un saludo hasta que el usuario decida parar. 
let respuesta;
do {
  console.log("Hola!");
  respuesta = 'n'
} while (respuesta.toLowerCase() === "s");

//44. Desarrolla un bucle while que encuentre el primer número divisible por 7 en un rango. 
let c = 1;
while (c <= 100) {
  if (c % 7 === 0) {
    console.log(`El primer número divisible por 7 es ${i}`);
    break;
  }
  c++;
}

//45. Diseña un bucle while que verifique la entrada del usuario hasta que sea válida. 
let entrada;
do {
  entrada = 5
  if (entrada < 1 || entrada > 10) {
    console.log("Entrada inválida. Intente de nuevo.");
  }
} while (entrada < 1 || entrada > 10);
console.log(`Entrada válida: ${entrada}`);

//46. Escribe una función que use switch para asignar calificaciones (A, B, C, D, F) basado en 
//puntos.
function assignGrade(puntos) {
  switch (true) {
    case puntos >= 90:
      return "A";
    case puntos >= 80:
      return "B";
    case puntos >= 70:
      return "C";
    case puntos >= 60:
      return "D";
    default:
      return "F";
  }
}

console.log(assignGrade(95)); 
console.log(assignGrade(75)); 
console.log(assignGrade(40));

//47. Implementa una función que use switch para responder a diferentes comandos de un 
//chatbot. 
function chatbot(comando) {
  switch (comando) {
    case "hola":
      return "Hola! ¿En qué puedo ayudarte?";
    case "adiós":
      return "Adiós! Que tengas un buen día.";
    case "ayuda":
      return "Puedo ayudarte con información sobre programación en JavaScript.";
    default:
      return "No entiendo ese comando. Intente de nuevo.";
  }
}

console.log(chatbot("hola")); 
console.log(chatbot("ayuda")); 
console.log(chatbot("foo")); 

//48. Crea un switch para manejar diferentes tipos de métodos de pago (efectivo, tarjeta, 
//cheque). 
function pago(metodo) {
  switch (metodo) {
    case "efectivo":
      return "Pago en efectivo";
    case "tarjeta":
      return "Pago con tarjeta";
    case "cheque":
      return "Pago con cheque";
    default:
      return "Método de pago no válido";
  }
}
console.log(pago("efectivo"));
console.log(pago("tarjeta")); 
console.log(pago("foo")); 

//49. Desarrolla una función que utilice switch para realizar cálculos básicos (+, -, *, /). 
function calculadora(op, num1, num2) {
  switch (op) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      return "Operación no válida";
  }
}

console.log(calculadora("+", 5, 3)); 
console.log(calculadora("-", 10, 4));
console.log(calculadora("*", 7, 2)); 
console.log(calculadora("/", 9, 3)); 
console.log(calculadora("%", 5, 3)); 

//50. Diseña un switch para cambiar entre diferentes idiomas de un sitio web. 
function cambiarIdioma(idioma) {
  switch (idioma) {
    case "es":
      return "Bienvenido al sitio web";
    case "en":
      return "Welcome to the website";
    case "fr":
      return "Bienvenue sur le site web";
    default:
      return "Idioma no disponible";
  }
}

console.log(cambiarIdioma("es")); 
console.log(cambiarIdioma("en"));
console.log(cambiarIdioma("fr")); 
console.log(cambiarIdioma("de")); 

//51. Implementa un bucle for que imprima todos los elementos de un array. 
let frutas = ["manzana", "banana", "naranja", "plátano"];

for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}

//52. Escribe un bucle for que multiplique todos los elementos de un array. 
let num = [1, 2, 3, 4, 5];
let producto = 1;

for (let i = 0; i < num.length; i++) {
  producto *= num[i];
}

console.log(producto); 

//53. Crea un bucle for para encontrar el menor número en un array. 
let numeros = [5, 2, 8, 1, 9];

let menor = numeros[0];

for (let i = 1; i < numeros.length; i++) {
  if (numeros[i] < menor) {
    menor = numeros[i];
  }
}

console.log(menor);

//54. Desarrolla un bucle for para verificar si un array contiene un elemento específico. 
let fruta = ["manzana", "banana", "naranja", "plátano"];

let existe = false;

for (let i = 0; i < fruta.length; i++) {
  if (fruta[i] === "banana") {
    existe = true;
    break;
  }
}

console.log(existe);
//55. Diseña un bucle for que copie un array en otro. 
let original = [1, 2, 3, 4, 5];
let copia = [];

for (let i = 0; i < original.length; i++) {
  copia.push(original[i]);
}

console.log(copia);

//56. Utiliza un bucle do-while para pedir al usuario que ingrese un número hasta que sea 
//mayor que 10. 
let numero;

do {
  numero = 15
} while (numero <= 10);

console.log(`Número válido: ${numero}`);

//57. Implementa un for-in para mostrar todas las propiedades de un objeto. 
let persona = {
  nombre: "Juan",
  edad: 30,
  ciudad: "Madrid"
};

for (let propiedad in persona) {
  console.log(`${propiedad}: ${persona[propiedad]}`);
}

//58. Usa un for-of para iterar sobre un array de nombres y saludar a cada uno. 
let nombres = ["Juan", "María", "Pedro", "Ana"];

for (let nombre of nombres) {
  console.log(`Hola, ${nombre}!`);
}

//59. Crea un forEach para aplicar un descuento del 10% a precios en un array. 
let precios = [10, 20, 30, 40, 50];

precios.forEach((precio, indice) => {
  precios[indice] = precio * 0.9;
});

console.log(precios);

//60. Escribe un código que use map para convertir todas las temperaturas de un array de 
//Celsius a Fahrenheit. 
let temperaturasCelsius = [0, 10, 20, 30, 40];

let temperaturasFahrenheit = temperaturasCelsius.map((temperatura) => {
  return temperatura * 9 / 5 + 32;
});

console.log(temperaturasFahrenheit); 

