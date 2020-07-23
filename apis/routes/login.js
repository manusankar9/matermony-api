const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken');
const db = require("./db");

const dbName = "mater_mony",
    collectionName = "all_profiles";



router.get("/",(req, res)=>{
console.log("requ:::",req.body)
    console.log("ms");
     db.initialize(dbName, collectionName, function (dbCollection) {
            dbCollection.find().toArray(function (err, result) {
                if (err) throw err;
                res.json(result || []);
                console.log("posts are ready",result);
            });
        }, function (err) {
            throw (err);
        });

});


module.exports = router;
