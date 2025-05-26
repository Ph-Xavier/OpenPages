module.exports = {
  ads,
};

function ads(req, res) {
  res.render("ads", { title: "ADS - Open Pages" });
}
