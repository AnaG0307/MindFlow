const express = require("express") ;
const authenticate = require("../middleware/authenticate") ;
const firebaseAdmin = require("../services/firebase") ;


//GET controller

exports.showmood = ("/", authenticate, async (req, res) => {
   res.status(200).json(req.user);
 });


//POST controller  to add daily mood to a database

exports.logmood = ("/", async (req, res) => {
  const {mood} = req.body;

  if (!mood ) {
    return res.status(400).json({
      error:
        "Please select your mood"
    });
  }

//create mood collection add mood to a database

  try{


     const FirebaseUser = await firebaseAdmin.auth

     if(FirebaseUser) {

    const newmood = req.app.locals.db.collection("mood");

    await newmood.insertOne({
      mood,
      
      date: Date(),
     

      firebaseId:  FirebaseUser.auth.uid,

      // $lookup:
      // {
      //   from:  "user",
      //   localField: null,
      //   foreignField: 'firebaseId',
      //   as: 'lol'
      // },
    

    });
  
     }
  
    return res
      .status(200)
      .json({ success: "Todays mood added successfully!" });


} catch  {
      res.status(400).json({
          message: "Error adding mood",
      });
   
}

});

  