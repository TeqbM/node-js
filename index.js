const http = require('http');

const express = require('express');
const app = express();

app.get('/', (req, res) => {
     res.end(`<h1>This is a home page </h1>  <a href="/about">About us</a>`);
})
app.get('/about', (req, res) => {
     res.end(`<h1>this is a About us page </h1> <a href="/blog">Go to blog page</a>`)
})
app.get('/blog', (req, res) => {
     res.end(`<h1>this is a blog</h1> <a href="/">go to home </a>`)
})

app.listen(3030)