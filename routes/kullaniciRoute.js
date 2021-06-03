const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");


const KullaniciController = require("../controller/kullaniciController");

router.get("/kisi", auth, KullaniciController.Kisi);

router.post(
  "/register",
 
  KullaniciController.Register
);
router.post(
  "/login",

  KullaniciController.Login
);

module.exports = router;
