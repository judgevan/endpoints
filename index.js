const express = require('express');
const data = require('./dummy');

const app = express();



app.get('/', (req, res) => {
    res.send('welocme to whateru see')
});

app.get('/names', (req, res) => {
    res.status(200).json(data)
});

app.listen(8787, ()=> console.log('app is runing on port 8787'));