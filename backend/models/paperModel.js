const mongoose = require("mongoose");

const paperSchema = mongoose.Schema({
     
    subject: {
        type: String,
        required: [true, "Please Enter Title Name"],
        trim: true
      },

      year:{
        type: Number,
        required:[true,"Please select the subject"],
      },

      solvedPaper: {
        type: String,
        required: [true, "Please Enter  contentInfo"],
      },

      link:{
        type: String,
        required: true,
      },
    

      author: {
        type: String,
        required: true,

      },
});

module.exports = mongoose.model("Paper", paperSchema);
