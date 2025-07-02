const http = require('node:http'); //Protocolo http
const { findAvalaiblePort } = require('./6-free-port');

const server = http.createServer((req, res) => {
  console.log('request received');
  res.end('Hola mundo');
});

findAvalaiblePort(3000).then((port) => {
  server.listen(port, () => {
    console.log(`Server listening on port http://localhost:${port}`);
  });
});
