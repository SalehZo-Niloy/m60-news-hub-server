const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/categories.json');

app.get('/', (req, res) => {
    res.send('NewsHub express running');
})

app.get('/categories', (req, res) => {
    res.send(categories);
})

app.listen(port, () => {
    console.log('NewsHub running or port ', port);
})