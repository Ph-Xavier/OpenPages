const openPagesModels = require("../models/openPagesModels");

module.exports = {
  dsm,
};

function dsm(req, res) {
  openPagesModels.getLivrosByCurso("DSM", (err, livros) => {
    if (err) {
      console.error("Erro ao buscar livros:", err);
      livros = [];
    }
    res.render("dsm", {
      title: "DSM - Open Pages",
      livros: livros,
    });
  });
}
