const express = require('express');
const app = express();
const PORT = 3000;
const cookieParser = require('cookie-parser');

app.use(cookieParser('thisismysecretkey'));


app.get('/greet', (req, res) => {
    const { name, animal } = req.cookies
    res.send(`Hey there ${name}, your favorite animal is: ${animal}`)
})

app.get('/setname', (req, res) => {
    res.cookie('name', 'Jon Smith')
    res.cookie('animal', 'Aardvark')
    res.send('Okay, sent you a cookie')
})

app.get('/getsignedcookie', (req, res) => {
    res.cookie('fruit', 'grape', { signed: true })
    res.send('Signed Cookie Sent')
})

app.get('/verifyfruit', (req, res) => {
    res.send(req.signedCookies)
})

app.listen(PORT, () => {
    console.log('Connected!')
})