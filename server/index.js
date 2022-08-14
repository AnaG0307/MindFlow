const express = require("express");
const cors = require("cors");
const config =require("./config/index");
const db = require("./config/db") ;
const userRouter = require("./routes/user");
const authenticate = require("./middleware/authenticate") ;
const moodRouter = require("./routes/mood");

const app = express();

//Database configuration

db(config.MONGO_URI, app);

app.use(cors({ origin: true }));
app.use(express.json());

//Api user GET route 

app.get('/api/user', authenticate, async (req, res) => {
  res.status(200).json(req.user);
    });

//Routes 

app.use('/api/user', userRouter);
app.use('/api/period', moodRouter);

//PORT configuration

app.listen(config.PORT, () =>
  console.log(`App listening on PORT ${config.PORT}`)
);

module.exports = app;