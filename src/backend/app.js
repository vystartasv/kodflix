const express = require('express');
const shows = require('./shows');
const app = express();
const port = 5000;

app.get('/api/shows', (req, res) => {
    res.json(shows)
});

app.listen(port, () => console.log(`Backend app is listening on port ${port}!`))