const express = require('express');
const app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index')
});

app.get('/painel', (req, res) => {
    res.render('painel')
});

app.listen('3000', () => console.log('O server está rodando'));