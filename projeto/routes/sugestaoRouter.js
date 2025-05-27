const express = require("express");
const router = express.Router();
const controllersSugestao = require("../controllers/sugestaoControllers");

router.get("/", controllersSugestao.sugestao);
router.post("/enviar-sugestao", controllersSugestao.enviarSugestao);

module.exports = router;
