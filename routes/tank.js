var express = require("express");
var router = express.Router();
const multer = require("multer");
const mongoose = require("mongoose");
var Tank = require("../db/models/tank");
const mongo = require("mongodb").MongoClient
const url = process.env.MONGODBS_URI ;let  TL

/* GET news listing. */
let db
mongo.connect(
  url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) {
      console.error(err)
      return
    }
router.get("/", (req, res, next) => {
   db = client.db("TL")

  db.collection("TL")
    .find({})
    .toArray(function (err, result) {
      if (err) {
        res.status(400).send("Error fetching listings!");
     } else {
        res.json(result);
        
      }
    });
  })

});




module.exports = router;
