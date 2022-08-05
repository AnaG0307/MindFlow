const express = require("express");
const cors = require("cors");
const config =require("./config/index.js");
const db = require("./config/db.js") ;
const userRouter = require('./routes/user');

const app = express();

db(config.MONGO_URI, app);

app.use(cors({ origin: true }));
app.use(express.json());
app.use("/api/user", userRouter);

app.listen(config.PORT, () =>
  console.log(`App listening on PORT ${config.PORT}`)
);