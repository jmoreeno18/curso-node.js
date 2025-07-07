const http = require('node:http')
const { findAvalaiblePort } = require('./6-free-port')

const server = http.createServer((req, res) => {
  console.log('request received')
  res.end('Hola mundo')
})

findAvalaiblePort(3000)
  .then((port) => {
    server.listen(port, () => {
      console.log(`✅ Server listening on http://localhost:${port}`)
    })
  })
  .catch((err) => {
    console.error('❌ Error al encontrar un puerto disponible:', err)
  })
