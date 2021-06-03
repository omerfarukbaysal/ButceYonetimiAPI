const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

const KategoriController = require("../controller/kategoriController");
router.get("/", KategoriController.KategoriListele);

router.post(
  "/",
  /*auth,*/
  KategoriController.KategoriEkle
);

router.delete("/sil/:id", /*auth,*/ KategoriController.KategoriSil);

module.exports = router;
