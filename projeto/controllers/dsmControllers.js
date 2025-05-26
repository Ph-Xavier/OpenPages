module.exports = {
  dsm,
};

function dsm(req, res) {
  res.render("dsm.ejs", { title: "DSM - Open Pages" });
}
