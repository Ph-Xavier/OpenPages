let express = require("express");
let router = express.Router();
const controllersIndex = require("../controllers/indexControllers");

router.get("/", controllersIndex.index);

module.exports = router;
