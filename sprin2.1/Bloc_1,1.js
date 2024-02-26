//Bloc 1.1

//exercici 1

function add(a,b){
    return a + b 
}

const add = (a,b) => a + b;


// exercici 2 

const randomNumber = () => Math.floor(Math.random() * 100);

// exercici 3

class person {
    constructor (name) {
        this.name = name;
    }
greet = () => {
    console.log(`Hola, ${this.name}`)
}
}

// exercici 4 

const printNumbers = (numbers) => {
    for(number of numbers){
        (() => {
            console.log(number);
        })();
    }
}

// exercici 5 

setTimeout(() => {
    console.log("imprimeixi un missatge");
}, 3000);




















