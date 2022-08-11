//model database placholder
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    
    mood: {
        type: String,
      },

    firebaseId: {
      type: firebaseUser.user_id
    },
    
    date: {
      
      type: date()
  
    }
  });



module.exports = mongoose.model.User || mongoose.model("Mood", userSchema);