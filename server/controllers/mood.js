const express = require("express") ;
const authenticate = require("../middleware/authenticate.js") ;
const firebaseAdmin = require("../services/firebase.js") ;



exports.showmood = ("/", authenticate, async (req, res) => {
   res.status(200).json(req.user);
 });

exports.logmood = ("/", async (req, res) => {
  const {mood} = req.body;

  if (!mood ) {
    return res.status(400).json({
      error:
        "Please select your mood"
    });
  }

  try {
    const FirebaseUser = await firebaseAdmin.auth.create({
     mood
    });

    if (FirebaseUser) {
      const moodCollection = req.app.locals.db.collection("mood");
      await userCollection.insertOne({
        mood,
      });
    }
    return res
      .status(200)
      .json({ success: "Your mood was submitted!" });
  } catch (err) {
    if (err.code === "auth/email-already-exists") {
      return res
        .status(400)
        .json({ error: "User account already exists at email address." });
    }
    return res.status(500).json({ error: "Server error. Please try again" });
  }
});