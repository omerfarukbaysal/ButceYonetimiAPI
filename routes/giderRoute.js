const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

const GiderController = require("../controller/GiderController");
router.get("/", GiderController.GiderListele);

router.post(
  "/",
  /*auth,*/
  GiderController.GiderEkle
);

router.delete("/sil/:id", /*auth,*/ GiderController.GiderSil);

module.exports = router;
