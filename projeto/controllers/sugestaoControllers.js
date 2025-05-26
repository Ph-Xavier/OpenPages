module.exports = {
  sugestao,
};

function sugestao(req, res) {
  res.render("sugestao", { title: "Sugestão - Open Pages" });
}
