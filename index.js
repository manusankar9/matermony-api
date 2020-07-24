  require('dotenv').config();

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const logger = require('morgan');
const router = express.Router();
const app = express();
const jwt = require('jsonwebtoken');
const profileRoutes = require("./apis/routes/profile");
const loginRoutes = require("./apis/routes/login");
const RegisterRoutes = require("./apis/routes/register");
const corsConfig = require("./cors-config");
const cors = require('cors');



//<<PORT>>
const PORT = process.env.PORT || 5000;
//<<Db details>>
const dbName = "mater_mony";
const collectionName = "all_profiles";

app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(cors());


app.listen(PORT, () => console.log(`Server Listening on ${PORT}`));
app.use("/profile", profileRoutes);
app.use("/login", loginRoutes);
app.use("/register", RegisterRoutes);

console.log("EE::s1:2:---------------");
