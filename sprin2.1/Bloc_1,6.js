// Bloc_1,6

// exercici 1 

let nom = ["Anna", "Bernat", "Clara"];
nom.forEach(nom => console.log(nom));

//exercici 2

let noms = ["Anna", "Bernat", "Clara"];
for(let nombres of noms){
    console.log(nombres)
};

// exercici 3

let numeros = [1,2,3,4,5,6];
let numerosPar = numeros.filter(numeros => numeros % 2 === 0);
console.log(numerosPar);

// exercici 4 

let obj = {
    nom: "ona",
    edat: 25,
    ciudad: "barcelona"
};
for(let descripcion in obj){
    console.log(`${descripcion}: ${obj[descripcion]}`)
};

// exercici 5 

let num = [1,2,3,4,5,6];

for(let ordenNumeros of num){
    console.log(ordenNumeros)
    if(ordenNumeros === 5){
        break;
    }
    
};

// exercici 6 

let noms2 = ["Anna", "Bernat", "Clara"];
for(let nick of noms2 ){
    console.log(`${nick} y es numero ${noms2.indexOf(nick)} en la lista `)
};





