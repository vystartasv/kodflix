const { MongoClient, Server } = require('mongodb');
const config = require('dotenv').config();

const iAm = process.env.NODE_ENV;
let url;
let dbName;
let collName;

iAm !== 'dev' ? url = process.env.DB_URL_PRD : url = process.env.DB_URL_DEV;
iAm !== 'dev' ? dbName = process.env.DB_NAME_PRD : dbName = process.env.DB_NAME_DEV;
iAm !== 'dev' ? collName = process.env.DB_COLL_PRD : collName = process.env.DB_COLL_DEV;

const client = new MongoClient(url, { useNewUrlParser: true });

async function getTheShows(showId) {
  try {
    let cursor;
    let doc;
    await client.connect();
    const db = client.db(dbName);
    const col = db.collection(collName);
    showId === undefined
      ? cursor = await col.find({})
      : cursor = await col.find({ id: showId });
    doc = await cursor.toArray();
    cursor.close();
    return doc;
  } catch (e) {
    console.log('Failed to retrieve results from the database!');
  }
}

module.exports.getTheShows = getTheShows;
