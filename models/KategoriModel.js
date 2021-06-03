const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const KategoriSchema = new Schema({
  kategoriAdi: {
    type: String
  }, 
 
},{collection:'Kategoriler'});

module.exports = Kategori = mongoose.model("kategori", KategoriSchema);
