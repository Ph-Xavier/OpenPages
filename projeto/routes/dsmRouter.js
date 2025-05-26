const express = require("express");
const router = express.Router();
const controllersDSM = require("../controllers/dsmControllers");

router.get("/", controllersDSM.dsm);

module.exports = router;
