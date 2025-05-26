const express = require("express");
const router = express.Router();
const controllersADS = require("../controllers/adsControllers");

router.get("/", controllersADS.ads);

module.exports = router;
