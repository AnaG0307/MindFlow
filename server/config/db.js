// Connection to MongoDB database

const { MongoClient } = require("mongodb");

module.exports = async function (connectionString, app) {
  const client = new MongoClient(connectionString);
  try {
    await client.connect();
    app.locals.db = client.db("mindflow");
    console.log("Database connected.");
  } catch (err) {
    await client.close();
    throw new Error("Database connection error.");
  }
}