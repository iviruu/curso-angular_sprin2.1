//Bloc_1,2

// exercici 1 
const potConducir = (edat) => {
    return (edat>=18) ? console.log('Pots conduir') : console.log('No pots conduir');
}

// exercici 2
const mesGran= (num1,num2) => {
    return (num1>num2) ? console.log( 'num1 és més gran') : console.log( 'num2 és més gran');
}

//exercici 3

const tipoNumero= (numero) => {
    return (numero > 0) ? "Positivo" : (numero < 0) ? "Negatiu" : "Zero" ;
} 

function trobarMaxim(a, b, c) {
    return a > b && a > c ? a : b > c ? b : c;
}

// exercici 4 
function parOImpar(numeros) {
    for (let i = 0; i < numeros.length; i++) {
        let resultat = (numeros[i] % 2 === 0) ? 'parell' : 'imparell';
        console.log(`El número ${numeros[i]} és ${resultat}.`);
    }
}