const Hesap = require("../models/HesapModel");
const HesapListele = async (req, res) => {
  try {
    const hesap = await Hesap.find();
    if (!hesap) {
      return res.status(400).json({ msg: "Kayıtlı Hesap Bulunamadi" });
    }
    res.json(hesap);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
const HesapEkle = async (req, res) => {
  try {
    const { hesapAdi, hesapMiktari, hesapTuru } = req.body;

    let hesap = await Hesap.findOne({ hesapAdi });
    if (hesap) {
      return res.status(400).json({ errors: "Bu hesap zaten kayitli" });
    }
    hesap = new Hesap({
      hesapAdi,
      hesapMiktari,
      hesapTuru,
    });
    await hesap.save();
    res.json(hesap);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

const HesapSil = async (req, res) => {
  try {
    let hesap = await Hesap.findByIdAndDelete(req.params.id);
    return res.json(hesap);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

module.exports = { HesapListele, HesapEkle, HesapSil };
