const openPagesModels = require("../models/openPagesModels");

module.exports = {
  ads,
};

function ads(req, res) {
  openPagesModels.getLivrosByCurso("ADS", (err, livros) => {
    if (err) {
      console.error("Erro ao buscar livros:", err);
      livros = [];
    }
    res.render("ads", {
      title: "ADS - Open Pages",
      livros: livros,
    });
  });
}
