import { readFile } from 'node:fs/promises';

Promise.all([
  readFile('./archivo.txt', 'utf-8'),
  readFile('./archivo2.txt', 'utf-8'),
])
  .then(([text, secondText]) => {
    console.log('Primer texto: ', text);
    console.log('Primer texto: ', secondText);
  })
  .catch((err) => {
    console.error('Error leyendo archivos', err.message);
  });
