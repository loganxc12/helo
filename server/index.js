const express = require("express");
const bodyParser = require("body-parser");
const massive = require("massive");
require("dotenv").config();
const controller = require("./controller");

const app = express();
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then(dbInstance => {
     app.set("db", dbInstance);
     console.log("db connected");
}).catch(error => console.log("Error in massive connection", error));

app.post("/auth/register", controller.register);

const PORT = 4000;
app.listen(PORT, console.log(`Server listening on port ${PORT}`));
