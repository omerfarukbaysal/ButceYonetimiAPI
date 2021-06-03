const Gelir = require("../models/GelirModel");
const GelirListele = async (req, res) => {
  try {
    const gelir = await Gelir.find().populate("hesap","hesapAdi");
    if (!gelir) {
      return res.status(400).json({ msg: "Kayıtlı Gelir Bulunamadi" });
    }
    res.json(gelir);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
const GelirEkle = async (req, res) => {
  try {
    const { hesap, baslik, miktar, tarih } = req.body;

    let gelir = new Gelir({
      hesap,
      baslik,
      miktar,
      tarih,
    });
    await gelir.save();
    res.json(gelir);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

const GelirSil = async (req, res) => {
  try {
    let gelir = await Gelir.findByIdAndDelete(req.params.id);
    return res.json(gelir);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

module.exports = { GelirListele, GelirEkle, GelirSil };
