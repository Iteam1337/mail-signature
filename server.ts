import express from 'express'
import path from 'path'

const app = express()
const PORT = process.env.PORT || 3000

// Set Pug as the template engine
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

// Serve static files
app.use(express.static(path.join(__dirname, 'static')))

// Render the main page
app.get('/', (req, res) => {
  res.render('index', { email: req.headers['x-forwarded-email'] || '' })
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
