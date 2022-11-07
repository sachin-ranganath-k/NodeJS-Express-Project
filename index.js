const mongooseLib = require("mongoose");

/***************** Database Connection **************** */

mongooseLib
  .connect("mongodb://localhost/playground") //Returns Promise
  .then(() => console.log("Connected to MongoDB...!"))
  .catch((error) => console.log("Error while connecting", error));



/****************** Insert data into database *************** */

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
const createCourse = async () => {
  const course = new Course({
    name: "React JS",
    author: "Sachin K",
    tags: ["frontend", "Javascript"],
    //Default value set for date. So no need to add date here
    isPublished: true,
  });
//We don't know when it saves to database. So make it as asynchronous operation 
//(Returns Promise).

  const result = await course.save();
  console.log(result);
};
  //Save the above data to database now
//  createCourse();    //1.1


/************* Fetch Data from Database ************* */

 async function getCourses(){
   const courses=await Course.find({author:"Sachin K", name:"React JS"})  //.find() returns all the data from courses collection from database
                              .limit(2) //limit() returns the specified no.of documents (rows) 
                              .sort({name:1})  //Sorts the documents 1->Ascending  -1->Descending
                              .select({name:1, isPublished:1}) //Returns only specified properties
   
   console.log(courses)  //2.1, 2.2, 2.3
}

getCourses();





// const Joi = require('joi');
// const genres = require('./routes/genres');
// const express = require('express');
// const app = express();

// app.use(express.json());
// app.use('/api/genres', genres);

// const port = process.env.PORT || 3000;
// app.listen(port, () => console.log(`Listening on port ${port}...`));
