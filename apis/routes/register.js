const express = require("express");
const router = express.Router();
const db = require("./db");

const dbName = "userprofiles",
    collectionName = "users";

router.post("/", (req, res) => {
    console.log(">>>>>>>>>>Register>>>>>>>>>>>>>>>");
    const formData = req.body;
    const email = req.body.email;
    console.log(">>Register::details<<", formData);

    db.initialize(dbName, 'users', function (dbCollection) {
        let isEmailExists = false;
        let db = dbCollection;
        dbCollection.findOne({ email: req.body.email }, (error, result) => {
            if (error) throw error;

            console.log("result", result);

            if (result !== null) {
                isEmailExists = true;
                console.log("*****userfound_user", result);
                res.send({ isEmailExists });
            } else {
                console.log("%%%%%%notfound_create_user", result);
                db.insertOne(formData, (error, result) => {
                    if (error) throw error;
                    console.log("some things went wrong");
                    res.send({ "created": true });

                });
            }

        });


    }, function (err) {
        throw (err);
    });
});
module.exports = router;
