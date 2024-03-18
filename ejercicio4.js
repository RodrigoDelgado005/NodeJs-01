const os = require('node:os')

function getFreeMem(){
   const mem = os.freemem();
   return mem;
}

console.log("Espacio libre inicial: ", getFreeMem(), "Bytes");

let array = [];

for(let i = 0; i < 1000000; i++){
    array.push;
}

console.log("Espacio libre después de la creación del array:", getFreeMem(), "bytes");
