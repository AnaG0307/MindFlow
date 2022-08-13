const firebaseAdmin = require("../services/firebase") ;

// Validate the Firebase tokens sent from the frontend

module.exports = async function (req, res, next) {
  try {
    const firebaseToken = req.headers.authorization?.split(" ")[1];

    let firebaseUser;
     if (firebaseToken) {
      firebaseUser = await firebaseAdmin.auth.verifyIdToken(firebaseToken);
    }

    if (!firebaseUser) {

      return res.sendStatus(401);
   }

// Once validated, tack on the user document fetched from MongoDB onto our request as req.user


    const moodCollection = req.app.locals.db.collection("mood");

    const user = await moodCollection.findOne({
      firebaseId: firebaseUser.user_id
    });

    if (!user) {
      return res.sendStatus(401);
    }

    req.user = user;

    next();
  } catch (err) {
    res.sendStatus(401);
  }
}
