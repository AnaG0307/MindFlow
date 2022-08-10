//create account sign up


const express = require("express") ;
const authenticate = require("../middleware/authenticate.js") ;
const firebaseAdmin = require("../services/firebase.js") ;

const router = express.Router();


// user authentication to retrive data, api/user route connection to middleware

exports.user = ("/", authenticate, async (req, res) => {
  res.status(200).json(req.user);
  console.log(req.user)
  });


//send user details to the MongoDB



exports.signup = ("/", async (req, res) => {
  const { email, name, password, surname } = req.body;

  if (!email || !name || !password || !surname) {
    return res.status(400).json({
      error:
        "Invalid request body. Must contain email, password, surname and name for user."
    });
  }

  try {
    const newFirebaseUser = await firebaseAdmin.auth.createUser({
      email,
      password,
      name,
      surname
    });

    if (newFirebaseUser) {
      const userCollection = req.app.locals.db.collection("user");
      await userCollection.insertOne({
        email,
        name,
        surname,
        firebaseId: newFirebaseUser.uid
      });
    }
    return res
      .status(200)
      .json({ success: "Account created successfully. Please sign in." });
  } catch (err) {
    if (err.code === "auth/email-already-exists") {
      return res
        .status(400)
        .json({ error: "User account already exists at email address." });
    }
    return res.status(500).json({ error: "Server error. Please try again" });
  }
});
