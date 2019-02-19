var express = require('express');
var router = express.Router();
var flightCtrl = require("../controllers/flights");

/* GET home page. */
router.get('/', flightCtrl.index);
/* GET users listing. */

router.get("/new", flightCtrl.new);
router.post("/", flightCtrl.create);
router.get("/:id", flightCtrl.show);

module.exports = router;
