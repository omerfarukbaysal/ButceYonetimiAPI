const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GelirSchema = new Schema(
  {
    hesap: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "hesap",
    },
    baslik: {
      type: String,
    },
    miktar: {
      type: Number,
    },
    tarih: {
      type: Date,
    },
  },
  { collection: "Gelirler" }
);

module.exports = Gelir = mongoose.model("gelir", GelirSchema);
