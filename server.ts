const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Set Pug as the template engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'static')));

// API endpoint to get user info
app.get('/api/user-info', (req, res) => {
	const email = req.headers['x-forwarded-email'] || '';
	res.json({ email });
});

// Render the main page
app.get('/', (req, res) => {
	res.render('index', { email: req.headers['x-forwarded-email'] || '' });
});

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
