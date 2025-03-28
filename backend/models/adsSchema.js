const mongoose = require("mongoose");

const adsSchema = new mongoose.Schema({
 
  title: { type: String, required: true },
  mainText: { type: String, required: true },  
  imageUrl: { type: String },
  link: { type: String },
}, { timestamps: true });

module.exports = mongoose.model("Ads", adsSchema);
