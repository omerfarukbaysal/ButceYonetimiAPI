const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

const HesapController = require("../controller/HesapController");
router.get("/", HesapController.HesapListele);

router.post(
  "/",
  /*auth,*/
  HesapController.HesapEkle
);

router.delete("/sil/:id", /*auth,*/ HesapController.HesapSil);

module.exports = router;
