module.exports = {
  sobre,
};

function sobre(req, res) {
  res.render("sobre", { title: "Sobre - Open Pages" });
}
