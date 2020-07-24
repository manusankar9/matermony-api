const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken');
const db = require("./db");
const cors = require('cors');
const corsConfig = require('../../cors-config');


const dbName = "mater_mony",
    collectionName = "all_profiles";



router.get("/",cors(corsConfig),(req, res)=>{
console.log("requ:::",req.body)
    console.log("ms");
     db.initialize(dbName, collectionName, function (dbCollection) {
            dbCollection.find().toArray(function (err, result) {
                if (err) throw err;
                res.json(result || []);
                console.log("posts ",result);
            });
        }, function (err) {
            throw (err);
        });

});


module.exports = router;
