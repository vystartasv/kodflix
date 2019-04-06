const express = require('express');
const shows = require('./shows');
const app = express();
const port = 5000;

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/api/shows', (req, res, next) => {
    res.json(shows);
    next();
});

app.listen(port, () => console.log(`Backend app is listening on port ${port}!`))