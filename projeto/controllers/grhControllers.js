const openPagesModels = require("../models/openPagesModels");

module.exports = {
  grh,
};

function grh(req, res) {
  openPagesModels.getLivrosByCurso("GRH", (err, livros) => {
    if (err) {
      console.error("Erro ao buscar livros:", err);
      livros = [];
    }
    res.render("grh", {
      title: "GRH - Open Pages",
      livros: livros,
    });
  });
}
