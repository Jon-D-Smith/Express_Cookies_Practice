const express = require('express');
const app = express();
const PORT = 3000;


app.get('/greet', (req, res) => {
    res.send("Hey There!")
})

app.get('/setname', (req, res) => {
    res.cookie('name', 'Jon Smith')
    res.cookie('animal', 'Aardvark')
    res.send('Okay, sent you a cookie')
})

app.listen(PORT, () => {
    console.log('Connected!')
})