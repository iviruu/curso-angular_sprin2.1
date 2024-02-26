// Bloc_1,3

// exercici 1

function processar(nombre, callback) {
    callback(nombre);
}
processar(3, function(d){
    console.log('ese es numero procesado',d)
});

//exercici 2

function calculadora (a,b,callback){
    return callback(a,b);
}

function suma (a,b){
    return a + b
}
const resultado = calculadora (3,6, suma);

//exercici 3

function esperarISaludar (elNom, callback){
    setTimeout(()=>{
        callback(elNom);
    }, 3000);
}
esperarISaludar('Jose', function(elNom) {
    console.log(`Hola ${elNom} como estas?`);
});

// exercici 4 

function processarElements(array, callback){
    for (let elemento of array ){
        callback(elemento)
    }
}

processarElements([3,6,8,1,5], function(elemento){
    console.log(elemento)
});

//exercici 5

function processarCadena (cadena,callback){
    let nuevaCadena = (cadena.toUpperCase()) 
    callback(nuevaCadena)
};
processarCadena('asdfghj', function(nuevaCadena){
    console.log(nuevaCadena)
});























