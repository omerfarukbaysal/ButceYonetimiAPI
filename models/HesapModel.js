const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HesapSchema = new Schema(
  {
    hesapAdi: {
      type: String,
    },
    hesapMiktari: {
      type: Number,
    },
    hesapTuru: {
      type: String,
    },
  },
  { collection: "Hesaplar" }
);

module.exports = Hesap = mongoose.model("hesap", HesapSchema);
