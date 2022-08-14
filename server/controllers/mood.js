const authenticate = require("../middleware/authenticate");
const firebaseAdmin = require("../services/firebase");

//GET controller

exports.showmood = ('/', authenticate, async (req, res) => {
    res.status(200).json(req.user);
 });

//POST controller  to add daily mood to a database

exports.logmood = ('/', async (req, res) => {
  const {mood} = req.body;

  if (!mood ) {
    return res.status(400).json({
      error: "Please select your mood."
    });
  }

//Add data to the collection in MongoDb

  try{
      const FirebaseUser = firebaseAdmin.auth.getUser

        if(FirebaseUser) {

      const newmood = req.app.locals.db.collection("mood");

      await newmood.insertOne({
        mood,
        date: Date(),
        firebaseId: FirebaseUser.uid
    });
       }
  
      return res.status(200).json({ 
      success: "Mood added successfully!" });

} catch  {
      res.status(400).json({
          message: "Error adding mood",
      });  
}
});

  