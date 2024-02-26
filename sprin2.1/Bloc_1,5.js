//Bloc_1,5

//exercici 1 

const array1=[1,2,3,4];
const array2 = array1.map(array1=>array1**2);
console.log(array2);

//exercici 2

const arrayNumeros = [ 1,2,3,4];
const arraySoloPar = arrayNumeros.filter(array1=>array1%2===0);
console.log(arraySoloPar);

//exercici 3 

const nuevosNumeros = [1,10,8,11];
const primerNumero = nuevosNumeros.find(nuevosNumeros => nuevosNumeros > 10);
console.log(primerNumero);

//exercici 4 

const listaNumeros = [13,7,8,21];
const suma = listaNumeros.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
console.log(suma);

//exercici 5

const nuevaLista = [1,3,7,10,15,17,11,5,8,12,9]
const sumaRara = nuevaLista
.filter(nuevaLista => nuevaLista >= 10)
.map(numFiltr => numFiltr *2)
.reduce((acumulador,valorActual)=>acumulador + valorActual, 0);

console.log(sumaRara)

//exercici 6

const listaNueva = [ 11,12,13,14];
const todos = listaNueva.every(numero => numero > 10);

const alguno = listaNueva.some(numero => numero > 10);

if (todos) {
    console.log("Sí es verdad que todos los números son más grandes que 10.");
} else if (alguno) {
    console.log("Al menos uno de los números es más grande que 10, pero no todos.");
} else {
    console.log("No, ninguno de los números es más grande que 10.");
}




































