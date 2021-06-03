const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Kullanici = require("../models/KullaniciModel");

const Kisi = async (req, res) => {
  try {
    const kisi = await Kullanici.findById(req.kullanici.id).select("-password");
    res.json(kisi);
  } catch (error) {
    console.error(err.message);
  }
};
const Register = async (req, res) => {
  try {
    const { email, password, adSoyad } = req.body;
    let kullanici = await Kullanici.findOne({ email });
    if (kullanici)
      return res.status(400).json({ errors: "Bu mail hesabı zaten kayitli" });
    kullanici = new Kullanici({
      email,
      password,
      adSoyad,
    });
    const salt = await bcrypt.genSalt(10);
    kullanici.password = await bcrypt.hash(password, salt);
    await kullanici.save();
    res.json(kullanici);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
const Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    let kullanici = await Kullanici.findOne({ email });
    if (!kullanici) {
      return res.status(400).json({ errors: "E-Mail veya Parola yanlış" });
    }
    const isMatch = await bcrypt.compare(password, kullanici.password);
    if (!isMatch) {
      return res.status(400).json({ errors: "E-Mail veya Parola yanlış" });
    }
    const payload = {
      kullanici: {
        id: kullanici.id,
      },
    };
    jwt.sign(
      payload,
      process.env.jwtSecret,
      { expiresIn: 36000 },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

module.exports = {
  Login,
  Kisi,
  Register,
};
