const express = require('express');
const db = require('.././db');

const router = express.Router();

router.get('/:showId*?', async (req, res) => {
  try {
    const result = await db.getTheShows(req.params.showId);
    res.json(result);
    res.end();
  } catch (e) {
    console.log('Failed to fetch data from the DB connector!');
  }
});

module.exports = router;
