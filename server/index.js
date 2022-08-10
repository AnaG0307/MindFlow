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


// I would like to move this router get to routes, put the auhentication middleware stops working and gives warning. But works here...random??

app.get("/api/user", authenticate, async (req, res) => {
  res.status(200).json(req.user);
    });



app.use("/api/user", userRouter);


app.listen(config.PORT, () =>
  console.log(`App listening on PORT ${config.PORT}`)
);

module.exports = app;