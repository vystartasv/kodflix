const express = require('express');
const path = require('path');
const db = require('./db');

const app = express();
const port = process.env.PORT || 5000;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/api/shows/:showId*?', async (req, res) => {
  try {
    const result = await db.getTheShows(req.params.showId);
    res.json(result);
    res.end();
  } catch (e) {
    console.log('Failed to fetch data from the DB connector!');
  }
});

if (process.env.NODE_ENV !== 'dev') {
  app.use(express.static(path.join(__dirname, '../../build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Backend environment is running in '${process.env.NODE_ENV || 'PRODUCTION'}', to access it visit:  
  http://${process.env.HOSTNAME}:${port}`));
