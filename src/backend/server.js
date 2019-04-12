const list = require('./shows');
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/api/shows/:showId*?', (req, res) => {
    res.json(list.shows(req.params.showId));
    res.end();
});

if (process.env.NODE_ENV !== 'dev') {
    app.use(express.static(path.join(__dirname, '../../build')));

    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, '../../build', 'index.html'));
    });
}

app.listen(port, () => console.log(
    `Backend app running in '${process.env.NODE_ENV || 'PRODUCTION'}' and is listening on port ${port}!`));