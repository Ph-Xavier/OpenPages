const openPagesModels = require("../models/openPagesModels");

module.exports = {
  gpi,
};

function gpi(req, res) {
  openPagesModels.getLivrosByCurso("GPI", (err, livros) => {
    if (err) {
      console.error("Erro ao buscar livros:", err);
      livros = [];
    }
    res.render("gpi", {
      title: "GPI - Open Pages",
      livros: livros,
    });
  });
}
