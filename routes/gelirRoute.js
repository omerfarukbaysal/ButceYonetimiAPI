const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

const GelirController = require("../controller/GelirController");
router.get("/", GelirController.GelirListele);

router.post(
  "/",
  /*auth,*/
  GelirController.GelirEkle
);

router.delete("/sil/:id", /*auth,*/ GelirController.GelirSil);

module.exports = router;
