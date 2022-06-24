const express = require('express');
const app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', { page: 'home' })
});

app.get('/calendario', (req, res) => {
    res.render('calendario', { page: "calendario" })
});

app.listen('3000', () => console.log('O server está rodando'));