const openPagesModels = require("../models/openPagesModels");

module.exports = {
  sugestao,
  enviarSugestao,
};

function sugestao(req, res) {
  res.render("sugestao", {
    title: "Sugestão - Open Pages",
    query: req.query,
  });
}

function enviarSugestao(req, res) {
  const sugestao = {
    livro_sugerido: req.body.titulo,
    autor: req.body.autor,
    editora: req.body.observacoes.split("\n")[0],
    id_curso: req.body.curso,
    motivo: req.body.observacoes,
  };

  openPagesModels.verificarSugestaoDuplicada(sugestao, (err, resultados) => {
    if (err) {
      console.error("Erro ao verificar sugestão duplicada:", err);
      res.redirect("/sugestao?erro=1");
      return;
    }

    if (resultados && resultados.length > 0) {
      res.redirect("/sugestao?sucesso=1");
    } else {
      openPagesModels.addSugestao(sugestao, (err, resultado) => {
        if (err) {
          console.error("Erro ao adicionar sugestão:", err);
          res.redirect("/sugestao?erro=1");
        } else {
          res.redirect("/sugestao?sucesso=1");
        }
      });
    }
  });
}
