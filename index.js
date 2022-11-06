const mongooseLib = require("mongoose");
mongooseLib
  .connect("mongodb://localhost/playground") //Returns Promise
  .then(() => console.log("Connected to MongoDB...!"))
  .catch((error) => console.log("Error while connecting", error));

// Create schema (like table creation in MySql)
const courseSchema=new mongooseLib.Schema({
  name: String,
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean
});




// const Joi = require('joi');
// const genres = require('./routes/genres');
// const express = require('express');
// const app = express();

// app.use(express.json());
// app.use('/api/genres', genres);

// const port = process.env.PORT || 3000;
// app.listen(port, () => console.log(`Listening on port ${port}...`));
