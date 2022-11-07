const mongooseLib = require("mongoose");
mongooseLib
  .connect("mongodb://localhost/playground") //Returns Promise
  .then(() => console.log("Connected to MongoDB...!"))
  .catch((error) => console.log("Error while connecting", error));

// Create schema (like table creation in MySql)
//A Mongoose schema defines the structure of the document, default values, validators, etc
const courseSchema = new mongooseLib.Schema({
  name: String,
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
});

/*Model : Mongoose model provides an interface to the database for creating,/
querying, updating, deleting records, etc. 


Now need to create model for the schema*/

const Course = mongooseLib.model("Course", courseSchema);
//mongoose.model returns class
//const Course --> Course is a class
//model("Course") --> Course is a singular form of collection Courses

//Now need to create instance of class (Object)
const course = new Course({
  name: "Node JS",
  author: "Ranganath K",
  tags: ["backend", "Javascript"],
  //Default value set for date. So no need to add date here
  isPublished: true,
});







// const Joi = require('joi');
// const genres = require('./routes/genres');
// const express = require('express');
// const app = express();

// app.use(express.json());
// app.use('/api/genres', genres);

// const port = process.env.PORT || 3000;
// app.listen(port, () => console.log(`Listening on port ${port}...`));
