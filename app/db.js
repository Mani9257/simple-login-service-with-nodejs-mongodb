'use strict';

const mongoose = require('mongoose');
const config = require('config');

const dbURL = config.get('DB_URL');
// console.log(dbURL)


async function connectToDB() {
  try {
    await mongoose.connect(dbURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });

    // eslint-disable-next-line no-console
    console.log('Succefully Connected To DB');
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Database Connection Failed');
    process.exit(1);
  }
}

connectToDB();


const db = mongoose.connection;
// db.on('error', console.error('connection error while connecting to DB'));
// db.once('open', function() {
// console.log('Succefully Connected To DB');
// });


module.exports = db;
