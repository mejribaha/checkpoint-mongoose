const mongoose = require('mongoose');


const connectDb = async()=>{

    await mongoose
      .connect("mongodb://localhost:27017/contact")
      .then(() => {
        console.log("database connected");
      })
      .catch((err) => {
        console.log(err);
      });
}

module.exports = connectDb