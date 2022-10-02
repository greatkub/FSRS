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
  router.delete("/:id", (req, res, next) => {
    const id = req.params['id']
    db = client.db("Tank")
  

    db.collection("Tank").deleteOne(id, function(err, obj) {
      if (err) throw err;
      console.log("1 document deleted");
      db.close();
    });
    // console.log("Delete this news", id)
    // console.debug("Movie to delete", id);
    // Movie.findByIdAndDelete(id, (err, doc) => {
    //   if (err) {
    //     console.error("Hey look, Error!", err);
    //     res.json(err);
    //   } else {
    //     res.status(200).json(doc);
    //   }
    // });
  });

});




module.exports = router;
