const express = require('express')
const app = express()

const PORT = process.env.PORT ?? 1236
const ditto = require('../pokemon/ditto.json')

// Middleware para parsear JSON automáticamente
app.disable('x-powered-by')

app.use((req, res, next) => {
  if (req.method !== 'POST') return next()
  if (req.headers['content-type'] !== 'application/json') return next()

  // Solo llegan request que son post y que tienen el header Content-Type: application/json
  let body = ''

  // Escuchar el evento data
  req.on('data', (chunk) => {
    body += chunk.toString()
  })

  req.on('end', () => {
    const data = JSON.parse(body)
    data.timestamp = Date.now()
    req.body = data
    next()
  })
})

app.get('/', (req, res) => {
  res.send('<h1>Mi página</h1>')
})

app.get('/pokemon/ditto', (req, res) => {
  res.json(ditto)
})

app.post('/pokemon', (req, res) => {
  res.status(201).json(req.body)
})

app.use((req, res) => {
  res.status(404).send('<h1>404</h1>')
})

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`)
})
