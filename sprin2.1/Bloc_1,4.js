// Bloc_1,4

//exercici 1

let array1 = [1,2,3,4,5];
let array2 =['jose','luis','antonio','fran'];
let array3 = [ ...array1, ...array2];

//exercici 2

function suma(...numeros) {
    return numeros.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
}

//exercici 3 

let objete1 = {
    marca : 'samsung',
    modelo: '23s' ,
    color: 'negro'
};
let objete2 = {...objete1};
console.log(objete1)
objete2.color = 'blanco'
console.log(objete2)

//exercici 4

const lista = ['juan','luis', 'pedro', 'joan'];
const [numero1,numero2] = lista ;
const  [ , , numero3] =lista;
console.log(numero1)
console.log(numero2)
console.log(numero3)

//exercici 5 

function tripleFusion ( a,b,c) {
    console.log(`primer transporte es ${a}, segundo transporte es ${b}, tercer transporte es ${c}`)
};
let caja = ['coche', 'bici', 'tren'];

tripleFusion(...caja)

//exercici 6

let persona = {
    sexo: 'hombre',
    edad: 31,
    nombre: 'ivan'
};
let ropa = {
    pantalon: 'negro',
    camiseta: 'blanca',
    sudadera: 'azules'
};
let personaVestida = {...persona, ...ropa};

console.log(personaVestida)


