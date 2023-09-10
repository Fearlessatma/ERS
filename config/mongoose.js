const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://ERS:ERS@cluster0.setuo51.mongodb.net/csv-upload?retryWrites=true&w=majority', { useNewUrlParser: true })
.then((e)=>console.log("Connected to Mongodb => ERS"))
.catch((e)=>console.log("Not Connected to db", e));

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error connecting to the db'));

db.once('open', function () {
  console.log("Successfully connected to the Database");
});

module.exports = db;
