import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const app = express()
const PORT = process.env.PORT || 3000

// Get __dirname equivalent in ES module
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Set Pug as the template engine
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

// Serve static files
app.use(express.static(path.join(__dirname, 'static')))

// Render the main page
app.get('/', (req, res) => {
  res.render('index', {
    email: req.headers['x-forwarded-email'] || '',
    name: req.headers['x-forwarded-name'] || '',
    role: req.headers['x-forwarded-role'] || '',
  })
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
