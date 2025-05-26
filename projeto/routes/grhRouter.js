const express = require("express");
const router = express.Router();
const controllersGRH = require("../controllers/grhControllers");

router.get("/", controllersGRH.grh);

module.exports = router;
