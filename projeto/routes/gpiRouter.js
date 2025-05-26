const express = require("express");
const router = express.Router();
const controllersGPI = require("../controllers/gpiControllers");

router.get("/", controllersGPI.gpi);

module.exports = router;
