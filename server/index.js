const express = require("express");
const cors = require("cors");
const config =require("./config/index.js");
const db = require("./config/db.js") ;
const userRouter = require('./routes/user');
const authenticate = require("./middleware/authenticate.js") ;




const app = express();

db(config.MONGO_URI, app);

app.use(cors({ origin: true }));
app.use(express.json());



// app.get("/", authenticate, async (req, res) => {
//   res.status(200).json(req.user);
//   });

app.use("/api/user", userRouter);


app.listen(config.PORT, () =>
  console.log(`App listening on PORT ${config.PORT}`)
);

module.exports = app;