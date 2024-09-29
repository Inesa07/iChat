const express = require("express");
const multer = require("multer");
const storage = require("../multer/multer.js");
const Controller = require("../controllers/controller.js");

const app = express.Router();
const upload = multer({ storage }); 

app.post("/userInfo", upload.single("user_img"), Controller.getUserInfo); 


app.get("/user/:id",Controller.getUserById);


module.exports = app;
