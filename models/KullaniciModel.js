const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const KullaniciSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  adSoyad: {
    type: String,
    required: true
  },
 
}, {collection:'Kullanicilar'});
module.exports = Kullanici = mongoose.model("kullanici", KullaniciSchema);
