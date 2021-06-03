const Gider = require("../models/GiderModel");
const GiderListele = async (req, res) => {
  try {
    const gider = await Gider.find().populate("kategori","kategoriAdi").populate("hesap","hesapAdi");
    if (!gider) {
      return res.status(400).json({ msg: "Kayıtlı Gider Bulunamadi" });
    }
    res.json(gider);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
const GiderEkle = async (req, res) => {
  try {
    const { hesap, baslik, miktar, tarih ,kategori} = req.body;

    let gelir = new Gider({
      hesap,
      baslik,
      miktar,
      tarih,
      kategori
    });
    await gelir.save();
    res.json(gelir);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

const GiderSil = async (req, res) => {
  try {
    let gelir = await Gider.findByIdAndDelete(req.params.id);
    return res.json(gelir);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

module.exports = { GiderListele, GiderEkle, GiderSil };
