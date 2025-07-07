const http = require('node:http')
const dittoJSON = require('./pokemon/ditto.json')

const processRequest = (req, res) => {
  const { method, url } = req
  console.log('👉 URL recibida:', req.url)

  switch (method) {
    case 'GET':
      switch (url) {
        case '/pokemon/ditto':
          res.setHeader('Content-Type', 'application/json; charset=utf-8')
          return res.end(JSON.stringify(dittoJSON))
        default:
          res.setHeader('Content-Type', 'text/html; charset=utf-8')
          res.end('<h1>Error 404</h1>')
      }
      break

    case 'POST':
      switch (url) {
        case '/pokemon': {
          let body = ''

          req.on('data', (chunk) => {
            body += chunk.toString()
          })
          req.on('end', () => {
            const data = JSON.parse(body)
            // Llamar a una bbdd para guardar la info
            res.writeHead(201, {
              'Content-Type': 'application/json; cahrset=utf-8'
            })
            data.timestamp = Date.now()
            res.end(JSON.stringify(data))
          })
          break
        }

        default:
          res.statusCode = 404
          res.setHeader = ('Content-Type', 'text/html; charset=utf-8')
          return res.end('<h1>Error 404</h1>')
      }
  }
}

const server = http.createServer(processRequest)

server.listen(1234, () => {
  console.log('Server listening on port http://localhost:1234')
})
