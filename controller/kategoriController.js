const Kategori = require("../models/KategoriModel");
const KategoriListele = async (req, res) => {
  try {
    const kategori = await Kategori.find();
    if (!kategori) {
      return res.status(400).json({ msg: "Kayıtlı Kategori Bulunamadi" });
    }
    res.json(kategori);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
const KategoriEkle = async (req, res) => {
  try {
    const { kategoriAdi } = req.body;

    let kategori = await Kategori.findOne({ kategoriAdi });
    if (kategori) {
      return res.status(400).json({ errors: "Bu kategori zaten kayitli" });
    }
    kategori = new Kategori({
      kategoriAdi,
      
    });
    await kategori.save();
    res.json(kategori);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

const KategoriSil = async (req, res) => {
  try {
    let kategori = await Kategori.findByIdAndDelete(req.params.id);
    return res.json(kategori);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

module.exports = { KategoriListele, KategoriEkle, KategoriSil };
