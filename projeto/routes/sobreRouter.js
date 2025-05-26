const express = require("express");
const router = express.Router();
const controllersSobre = require("../controllers/sobreControllers");

router.get("/", controllersSobre.sobre);

module.exports = router;
