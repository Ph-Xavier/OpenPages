const express = require("express");
const router = express.Router();
const controllersSugestao = require("../controllers/sugestaoControllers");

router.get("/", controllersSugestao.sugestao);

module.exports = router;
