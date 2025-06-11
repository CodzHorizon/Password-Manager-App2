const express = require("express");
const dotenv = require("dotenv");
const { MongoClient, Collection } = require("mongodb");
const bodyParser = require("body-parser");
const cors = require("cors");

dotenv.config();

// Connection URL
const url = process.env.MONGO_URI;
const client = new MongoClient(url);
client.connect();

// Database Name
const dbName = process.env.DN_NAME;
const app = express();
const port = 3000;


app.use(bodyParser.json());
app.use(cors());


//save a password
app.post("/", async (req, res) => {
  const password = req.body;
  const db = client.db(dbName);
  const Collection = db.collection("documents");
  const findResult = await Collection.insertOne(password);
  res.send({ success: true, result: findResult });
});

//get all the passwords
app.get("/", async (req, res) => {
  const db = client.db(dbName);
  const Collection = db.collection("documents");
  const findResult = await Collection.find({}).toArray();
  res.json(findResult);
});

//delete a password
app.delete("/", async (req, res) => {
  const password = req.body;
  const db = client.db(dbName);
  const Collection = db.collection("documents");
  const findResult = await Collection.deleteOne(password);
  res.send({ success: true, result: findResult });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
