let express = require("express");
let router = express.Router();

router.get("/", function (req, res, next) {
  res.render("index", { title: "Open Pages" });
});

router.get("/ads", function (req, res, next) {
  res.render("ads", { title: "ADS - Open Pages" });
});

router.get("/dsm", function (req, res, next) {
  res.render("dsm", { title: "DSM - Open Pages" });
});

router.get("/gpi", function (req, res, next) {
  res.render("gpi", { title: "GPI - Open Pages" });
});

router.get("/grh", function (req, res, next) {
  res.render("grh", { title: "GRH - Open Pages" });
});

router.get("/sobre", function (req, res, next) {
  res.render("sobre", { title: "Sobre - Open Pages" });
});

router.get("/sugestao", function (req, res, next) {
  res.render("sugestao", { title: "Sugestão - Open Pages" });
});

module.exports = router;
