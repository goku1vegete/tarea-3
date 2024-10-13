//abtraccion
//Clases Madres
class skin{
    constructor(nombre, rareza, precio){
        this.nombre = nombre
        this.rareza = rareza
        this._precio = precio
    }
    get precio(){
        return this._precio
    }

    set precio(nuevoPrecio){
        return this._precio = nuevoPrecio
    }
    acHability(){
        return "Habilidad activada"
    }
}

//encapsulamiento proteger
skinRubius = new skin("Rubius", "Legendario", 100)
console.log(skinRubius.precio)
skinRubius.precio = 200
console.log(skinRubius.precio)


class escenario {
    constructor(tamaño, ambiente) {
        this.tamaño = tamaño
        this.ambiente
    }
    activeEvent(){
        return "Evento activado"
    }
}

class personaje {
    constructor(nombre, tipo) {
        this.nombre = nombre
        this._tipo = tipo
    }
    get tipo(){
        return this._tipo
    }
    set tipo(nuevoTipo){
        return this._tipo = nuevoTipo
    }
    conversar(){
        return "Conversacion iniciada"
    }
    conversar(){
        return "Has iniciado una conversacion"
    }
}
ghost = new personaje("Simon Riley", "Legendario")
console.log(ghost)
ghost.tipo="comun"
console.log(ghost.tipo)


//clases hijas
class npc extends personaje { //la herencia se plasma con la palabra extends
    constructor(nombre, tipo, diseño) {
        super(nombre, tipo)
        this.diseño = diseño
    }
    intercambioObjetos(){
        return "El personaje ha intercambiado objetos"
    }
    conversar(){
        return "Has iniciado una  con un npc"
    }
}
npc_1 = new npc("Pedro", "aliado", "innteractivo")
//console.log(npc_1 npc)

class avatar  extends personaje{
    constructor(nombre, tipo, skin, habilidad) {
        super(nombre, tipo)
        this.skin = skin
        this.habilidad = habilidad
    }
    moverse(){
        return "El avatar se esta moviendo"
    }
}