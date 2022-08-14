const mongoose = require("mongoose");

const contentSchema = mongoose.Schema({
     
    title: {
        type: String,
        required: [true, "Please Enter Title Name"],
        trim: true
      },

      subject:{
        type: String,
        required:[true,"Please select the subject"],
      },

      contentInfo: {
        type: String,
        required: [true, "Please Enter  contentInfo"],
      },

      links:{
        type: String,
        required: true,
      },
      image:{
        type: String,
      },

      author: {
        type: String,
      },
});

module.exports = mongoose.model("Content", contentSchema);
