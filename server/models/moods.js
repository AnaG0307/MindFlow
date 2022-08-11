//model database placholder
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    
    mood: {
        type: String,
      },
    
     
});





module.exports = mongoose.model.User || mongoose.model("Users", userSchema);