const express = require("express");

const app = express();
const connectDb = require("./config/connectDB");
const person = require("./models/person");
const port = 4000;

// na3mel appel lel func
connectDb();

// first Question :

// person
//   .create({
//     name: "Baha",
//     age: 22,
//     favoriteFoods: ["pizaa", "burger"],
//   })
//   .then((doc) => {
//     console.log(doc);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Question 2 :
// person
//   .insertMany([
//     {
//       name: "user1",
//       age: 20,
//       favoriteFoods: ["burger"],
//     },
//     {
//       name: "user2",
//       age: 21,
//       favoriteFoods: ["pizza"],
//     },
//   ])
//   .then((doc) => {
//     console.log(doc);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//Q3:
// person
//   .find()
//   .then((doc) => {
//     console.log(doc);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//Q4:
// person
//   .findOne({ favoriteFoods: ["pizza"] })
//   .then((doc) => {
//     console.log(doc);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//Q5:
// person
//   .findById({ _id: "64707d4c89a3a44d0f95d94f" })
//   .then((doc) => {
//     console.log(doc);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//Q6:
// person
//   .findByIdAndUpdate(
//     { _id: "64707d4c89a3a44d0f95d94f" },
//     { $push: { favoriteFoods: "hamburger" } }
//   )
//   .then((doc) => {
//     console.log(doc);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//Q7:
// person
//   .findOneAndUpdate({ name: "user2" }, { $set: { age: 20 } })
//   .then((doc) => {
//     console.log(doc);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//Q8:

// person
//   .findByIdAndRemove({ _id: "64707d4c89a3a44d0f95d94e" })
//   .then((doc) => {
//     console.log(doc);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//Q9:
// person
//   .deleteMany({ name: "Mary" })
//   .then((doc) => {
//     console.log(doc);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//Q10:
// person
//   .find({ favoriteFoods: "pizza" })
//   .sort({ name: 1 })
//   .limit(2)
//   .select({ age: 20 })
//   .exec()
//   .then((doc) => {
//     console.log(doc);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("server run with sucess");
  }
});
