const http = require('node:http'); //Protocolo http

const server = http.createServer((req, res) => {
  console.log('request received');
  res.end('Hola mundo');
});

server.listen(0, () => {
  console.log(
    `Server listening on port http://localhost:${server.address().port}`,
  );
});
