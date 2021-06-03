const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GiderSchema = new Schema(
  {
    hesap: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "hesap",
    },
    kategori: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "kategori",
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
  { collection: "Giderler" }
);

module.exports = Gider = mongoose.model("gider", GiderSchema);
