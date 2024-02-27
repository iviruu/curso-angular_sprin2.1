// Bloc_1,7

// exercici 1

let promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(mensaje='Hola, mon');
    }, 2000); 
});

// exercici 2 

promesa.then((mensaje) => {
    console.log(mensaje); 
});

// exercici 3

let promesaConReject = new Promise((resolve, reject) => {
    let condicion = false; 
    setTimeout(() => {
        if (condicion) {
            resolve('HOLA');
        } else {
            reject('ADIOS');
        }
    }, 2000);
});
promesaConReject.then((mensaje) => {
    console.log(mensaje); 
}).catch((error) => {
    console.error(error); 
});

//exercici 4 y 5
//he cambiado el let de exercici 1 para no tener problemas pero la estructura es la misma 
let promesa1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(mensaje='Hola, mon');
    }, 2000); 
});


async function saludar() {
    try {
        let saludarHoy = await promesa1; 
            console.log(saludarHoy);
    } 
    catch (error) {
        console.error(error); 
    }
};
saludar();

// exercici 6 

let promesa2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, '2');
  });
  let promesa3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, '3');
  });

  Promise.all([ promesa2, promesa3]).then((valores) => {
    console.log(valores);  
  }).catch((error) => {
    console.error(error); 
  });










































