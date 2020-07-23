const express = require("express");
const router = express.Router();
const db = require("./db");

const dbName = "mater_mony",
    collectionName = "all_profiles";

router.get("/:id", (request, response) => {
    const id = request.params.id;
    console.log(">>profile/id<<", id);
 
    db.initialize(dbName, collectionName, function (dbCollection) {
        dbCollection.findOne({ id }, (error, result) => {
            if (error) throw error;
            response.json(result || []);
                console.log("posts",result);
            
         });
      }, function (err) {
         throw (err);
      });
 });

 router.get("/", (request, response) => {
console.log(">>>>>>>>>>>>>>>>>>>>>>>>>")
    db.initialize(dbName, collectionName, function (dbCollection) {
        dbCollection.find().toArray(function (err, result) {
            if (err) throw err;
            response.json(result || []);
            console.log(result);
      
            // << return response to client >>
         });
      }, function (err) {
         throw (err);
      });
 });
module.exports = router;
