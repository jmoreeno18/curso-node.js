const fs = require('node:fs');

const stats = fs.statSync('./archivo.txt');

console.log(
  stats.isFile(), //Comprueba si es un archivo
  stats.isDirectory(), //Comprueba si es un directorio
  stats.isSymbolicLink(), //Comprueba si es un enlace simbolico
  stats.size, //Tamaño en bytes
);
