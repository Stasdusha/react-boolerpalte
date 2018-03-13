const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()
const port = process.env.PORT || 3001

// set up cors
app.use(cors())

// handle serve gzip bundle
app.get('*.js', (req, res, next) => {
  req.url += '.gz'
  res.set('Content-Encoding', 'gzip')
  res.set('Content-Type', 'text/javascript')
  next()
})

// serve static assets normally
app.use(express.static(path.join(__dirname, 'dist')))

// handle every other route with index.html
app.get('*', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

app.listen(port)
console.log(`server started on port ${port}`)
