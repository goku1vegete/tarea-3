/*➢ Define una clase Coche que tenga propiedades para marca, modelo
y año.*/
class Coche {
  constructor(marca, modelo, anio) {
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
  }
}
micoche = new Coche("toyota", "corolla", 2010);
console.log(micoche.marca);
console.log(micoche.modelo);
console.log(micoche.anio);

/*➢ Descripción: Escribe una función que tome un array de nombres y los
transforme a mayúsculas.*/
function trans(nombre) {
  return nombre.toUpperCase();
}
let nombres = ["ariel", "kevin", "jairo"];
let nombMayuscul = nombres.map(trans);
console.log(nombMayuscul);

/*➢ Descripción: Crea una función que reciba un arreglo de números y
devuelva un nuevo arreglo que solo contenga los números mayores
que 10.*/
function mayor(n) {
  return n > 10;
}
let numeros = [1, 20, 15, 4, 51, 6];
let numerosMayores = numeros.filter(mayor);
console.log(numerosMayores);

/*➢ Descripción: Escribe una función que imprima los primeros 10
números naturales usando un bucle while.*/
function naturales() {
  let i = 1; // Inicializa en 1, ya que los números naturales empiezan desde 1
  while (i <= 10) {
    console.log(i);
    i++; // Incrementa el valor de i en cada iteración
  }
}
naturales();

/*➢ Descripción: Utiliza filter y map para encontrar todos los números en
un arreglo que sean mayores que 10 y luego multiplícalos por 2.*/
function numer(n) {
  return n > 10;
}
// array original
let nume = [1, 20, 15, 4, 51, 6];
// saque  lo valores mayor a 10
mayor = nume.filter(numer);
console.log(mayor);
//lo valores que se saco se mutiplico x 2
multipli = mayor.map((mayor) => mayor * 2);
console.log(multipli);

/*➢ Descripción: Implementa una función que recorra una lista hasta
encontrar el número 0, momento en el que el bucle deberá terminar.*/
function encontr(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      return " se termino";
    }
  }
  return "no se termino";
}

// Llamada a la función
console.log(encontr([1, 2, 4, 6, 0, 4, 2]));
console.log(encontr([1, 2, 4, 6, 4, 2]));

/*➢ Descripción: Crea una clase Persona que tenga propiedades para
nombre, edad y un método que devuelva una descripción básica de
la persona.*/
class persona {
  constructor(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
  }

  cadena() {
    return `Mi nombre es ${this.nombre} ${this.apellido} y tengo ${this.edad}`;
  }
}
// Instancia de la clase
let persona1 = new persona("Juan", "Perez", 25);
console.log(persona1);
// Llamada al método
console.log(persona1.cadena());

/*➢ Descripción: Define una clase Libro con propiedades para título,
autor, y año. Agrega un método que devuelva un string con el título
y el autor del libro.*/
class libro {
  constructor(titulo, autor, anio) {
    this.titulo = titulo;
    this.autor = autor;
    this.anio = anio;
  }

  string() {
    return `Mi libro se llama ${this.titulo} y el autor ${this.autor} el años ${this.anio}`;
  }
}
let caden = new libro("batman", "brus ortega", 2020);
console.log(caden.string());

/*➢ Descripción: En la clase CuentaBancaria, añade propiedades
privadas para titular y saldo. Usa getters y setters para modificar el
saldo.*/
class CuentaBancaria {
  #titulo;
  #saldo;
  constructor(titulo, saldo) {
    this.#titulo = titulo;
    this.#saldo = saldo;
  }
  // uso de get que es hacerla publica para ver el valor
  get titulo() {
    return this.#titulo;
  }

  get saldo() {
    return this.#saldo;
  }

  // set sirve para cambiar valores nuevo
  set saldo(nuevoSaldo) {
    return (this.#saldo = nuevoSaldo);
  }
  set titulo(nuevoTitulo) {
    return (this.#titulo = nuevoTitulo);
  }
}
let cuenta = new CuentaBancaria("Ariel espinoza", 550);
console.log(cuenta.saldo);
cuenta.saldo = 800;
console.log(cuenta.saldo);
cuenta.titulo = "jairo martin";
console.log(cuenta.titulo);

/*➢ Descripción: Crea una clase Utilidad que tenga un método estático
que convierta grados Celsius a Fahrenheit.*/
class Conversor {
  static celsiusAFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
  }
}

// Ejemplo de uso
const gradosCelsius = 25;
const gradosFahrenheit = Conversor.celsiusAFahrenheit(gradosCelsius);
console.log(`${gradosCelsius}°C es igual a ${gradosFahrenheit}°F`);

/*➢ Descripción: Define una clase Empleado que herede de la clase
Persona y añade una propiedad salario.*/
class Emplead {
  constructor(nombre, edad, trabajo) {
    this.nombre = nombre;
    this.edad = edad;
    this.trabajo = trabajo;
  }
}

class Persona extends Emplead {
  constructor(nombre, edad, trabajo, sal) {
    super(nombre, edad, trabajo);
    this.sal = sal;
  }

  in() {
    return `Nombre: ${this.nombre}, edad: ${this.edad}, trabaja como: ${this.trabajo} y su salario es ${this.sal}`;
  }
}

let inform = new Persona("Ariel", 20, "programador", 1500);
console.log(inform.in());

/*➢ Descripción: Implementa una clase Coche que encapsule las
propiedades marca, modelo, y kilometraje y prevenga el acceso
directo a kilometraje.*/
class coche {
  #marca;
  #modelo;
  #kilom;
  constructor(marca, modelo, kilom) {
    this.#marca = marca;
    this.#modelo = modelo;
    this.#kilom = kilom;
  }

  get kilom() {
    return this.#kilom;
  }
}
carro = new coche("Toyota", "corolla", 405);
console.log(carro.kilom);

/*➢ Descripción: Crea una clase Tienda que contenga un array de objetos
de la clase Producto. Implementa métodos para añadir, remover y
buscar productos.*/
// Clase Producto
class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
}

// Clase Tienda
class Tienda {
  constructor() {
    this.productos = []; // Array que contendrá los objetos de la clase Producto
  }

  // Método para añadir un producto
  añadirProducto(producto) {
    this.productos.push(producto);
    console.log(`Producto ${producto.nombre} añadido a la tienda.`);
  }

  // Método para remover un producto por su nombre
  removerProducto(nombreProducto) {
    const indice = this.productos.findIndex(
      (producto) => producto.nombre === nombreProducto
    );
    if (indice !== -1) {
      this.productos.splice(indice, 1);
      console.log(`Producto ${nombreProducto} removido de la tienda.`);
    } else {
      console.log(`Producto ${nombreProducto} no encontrado.`);
    }
  }

  // Método para buscar un producto por su nombre
  buscarProducto(nombreProducto) {
    const productoEncontrado = this.productos.find(
      (producto) => producto.nombre === nombreProducto
    );
    if (productoEncontrado) {
      return `Producto encontrado: ${productoEncontrado.nombre}, Precio: ${productoEncontrado.precio}`;
    } else {
      return `Producto ${nombreProducto} no encontrado.`;
    }
  }

  // Método opcional para mostrar todos los productos
  mostrarProductos() {
    if (this.productos.length > 0) {
      console.log("Productos en la tienda:");
      this.productos.forEach((producto) => {
        console.log(`- ${producto.nombre}: ${producto.precio}`);
      });
    } else {
      console.log("La tienda no tiene productos.");
    }
  }
}

// Uso del ejemplo
let tienda = new Tienda();

let producto1 = new Producto("Laptop", 1500);
let producto2 = new Producto("Mouse", 25);
let producto3 = new Producto("Teclado", 45);

// Añadir productos
tienda.añadirProducto(producto1);
tienda.añadirProducto(producto2);
tienda.añadirProducto(producto3);

// Mostrar productos
tienda.mostrarProductos();

// Buscar un producto
console.log(tienda.buscarProducto("Laptop"));

// Remover un producto
tienda.removerProducto("Mouse");


/*➢ Descripción: En la clase Usuario, permite que se añadan propiedades
dinámicas que no están definidas en el constructor como hobbies o
intereses.*/
// Definir la clase Usuario
class Usuario {
  constructor(nombre, edad) {
    this.nombre = nombre; // Propiedad inicial nombre
    this.edad = edad;     // Propiedad inicial edad
  }

  agregarPropiedade(proiedade,valor){
    this[proiedade] = valor;
  }
}
// Crear una instancia de la clase Usuario
const usuario1 = new Usuario("Juan", 25);
// Ver el objeto completo con las nuevas propiedades
console.log(usuario1);
usuario1.agregarPropiedade('hobbies',['nadar','mujeres'])
usuario1.agregarPropiedade('intereses',['programar','trabajar']);
console.log(usuario1.intereses)


/*➢ Descripción: Define una clase Configuracion donde ciertas
propiedades como nombreDeUsuario no puedan modificarse
después de ser inicializadas.*/
// Clase Configuracion
class configu {
  #nombr;

  constructor(nombr, tema, idioma) {
    this.#nombr = nombr;
    this.tema = tema;
    this.idioma = idioma;
  }

  // metodos para cambiar valoes 
  tex(nuevotema) {
    this.tema = nuevotema;
  }
  idi(nuevoidioma) {
    this.idioma = nuevoidioma;
  }
}
conf = new configu("Ariel",'claro','frances');
conf.tex = 'oscuro'
conf.idi = 'ingles'
console.log(conf.tex)

/*➢ Descripción: En la clase Persona, asegura que la edad no pueda ser
menor que 0 ni mayor que 120 usando setters.*/
// Clase Persona con validación en el setter de edad
class Per {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad; // Usa el setter al inicializar
  }

  // Setter para validar y asignar la edad
  set edad(eda) {
    if (eda < 0 || eda > 120) {
      console.log("Valor incorrecto para la edad.");
    } else {
      this._edad = eda; // Asignamos la edad válida a una propiedad privada _edad
    }
  }

  // Getter para obtener el valor de la edad
  get edad() {
    return this._edad;
  }
}
const pers = new Per('Ariel', -25); 

console.log(pers.edad); 

pers.edad = 30;
console.log(pers.edad);


/*➢ Descripción: Implementa una clase Cadena que tenga métodos para
contar número de vocales, invertir la cadena, y verificar si es un
palíndromo.*/
class Cadena {
  constructor(cadena) {
    this.cadena = cadena.toLowerCase(); // Convertimos a minúsculas para facilitar comparaciones
  }

  // Método para contar el número de vocales
  contarVocales() {
    let vocales = "aeiouáéíóú"; // Incluyendo vocales acentuadas
    let contador = 0;
    for (let letra of this.cadena) {
      if (vocales.includes(letra)) {
        contador++;
      }
    }
    return contador;
  }

  // Método para invertir la cadena
  invertir() {
    return this.cadena.split("").reverse().join("");
  }

  // Método para verificar si es un palíndromo
  esPalindromo() {
    let cadenaSinEspacios = this.cadena.replace(/\s+/g, ""); // Eliminar espacios
    return cadenaSinEspacios === this.invertir();
  }
}

// Ejemplo de uso
let cadena = new Cadena("Anita lava la tina");
console.log("Número de vocales:", cadena.contarVocales());
console.log("Cadena invertida:", cadena.invertir()); 
console.log("¿Es palíndromo?", cadena.esPalindromo());

/*➢ Descripción: Implementa la clase Calculadora de modo que se
puedan encadenar métodos como sumar, restar, etc.*/
class Calculadora {
  constructor(valorInicial = 0) {
    this.resultado = valorInicial;
  }

  // Método para sumar
  sumar(valor) {
    this.resultado += valor;
    return this; // Permite el encadenamiento
  }

  // Método para restar
  restar(valor) {
    this.resultado -= valor;
    return this;
  }

  // Método para multiplicar
  multiplicar(valor) {
    this.resultado *= valor;
    return this;
  }

  // Método para dividir
  dividir(valor) {
    if (valor === 0) {
      console.log("Error: No se puede dividir por cero.");
    } else {
      this.resultado /= valor;
    }
    return this;
  }

  // Método para obtener el resultado actual
  obtenerResultado() {
    return this.resultado;
  }
}

// Ejemplo de uso encadenando métodos
let calculadora = new Calculadora(10);
let resultado = calculadora
  .sumar(5)
  .restar(3)
  .multiplicar(2)
  .dividir(3)
  .obtenerResultado();
console.log("Resultado:", resultado);
