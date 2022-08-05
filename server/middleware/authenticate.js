//Authenticate user via firebase
// Look again into the code - module.exports at the befinning of function?


const firebaseAdmin = require("../services/firebase.js") ;


module.exports = async function (req, res, next) {
  try {
    const firebaseToken = req.headers.authorization?.split(" ")[1];

    let firebaseUser;
    if (firebaseToken) {
      firebaseUser = await firebaseAdmin.auth.verifyIdToken(firebaseToken);
    }

    if (!firebaseUser) {
      // Unauthorized
      return res.sendStatus(401);
    }

    const usersCollection = req.app.locals.db.collection("user");

    const user = await usersCollection.findOne({
      firebaseId: firebaseUser.user_id
    });

    if (!user) {
      // Unauthorized
      return res.sendStatus(401);
    }

    req.user = user;

    next();
  } catch (err) {
    //Unauthorized
    res.sendStatus(401);
  }
}