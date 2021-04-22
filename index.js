const express = require('express');
const app = express();
const PORT = 3000;
const cookieParser = require('cookie-parser');

app.use(cookieParser());


app.get('/greet', (req, res) => {
    const { name, animal } = req.cookies
    res.send(`Hey there ${name}, your favorite animal is: ${animal}`)
})

app.get('/setname', (req, res) => {
    res.cookie('name', 'Jon Smith')
    res.cookie('animal', 'Aardvark')
    res.send('Okay, sent you a cookie')
})

app.listen(PORT, () => {
    console.log('Connected!')
})