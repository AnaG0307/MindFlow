//mood model for MongoDB
const mongoose = require("mongoose");

const moodSchema = new mongoose.Schema({

    
    mood: {
        type: String,
        enum: ['great', 'medium', 'horrible']
      },

    firebaseId: {
      type: firebaseId, ref: "user"
    },
    date: {
      type: Date,
      default: Date.now
    },
},   
   
  );



 module.exports = mongoose.model.mood || mongoose.model("mood", moodSchema);

