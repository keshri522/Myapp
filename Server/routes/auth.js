const express = require("express");
// simply use router to handle all the routes
const router = express.Router();
// import controllers
const { ContacData, postAllData } = require("../controllers/auth");
// this routes will handle all the data coming from the client side this is post route
router.post("/contact", postAllData);
router.post("/support", ContacData);
module.exports = router;
