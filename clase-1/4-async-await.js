const { readFile } = require('node:fs/promises');

async function init() {
  console.log('Leyendo el primer archivo...');
  const text = await readFile('./archivo.txt', 'utf-8');
  console.log('primer texto: ', text);

  console.log('cosas entre medias');

  console.log('Leyendo el segundo archivo...');
  const secondText = await readFile('./archivo2.txt', 'utf-8');
  console.log('primer texto: ', secondText);
}

init();
