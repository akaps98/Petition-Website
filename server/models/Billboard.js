const mongoose = require('mongoose');

const BillboardSchema = new mongoose.Schema({
  owner: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  goal: {
    type: Number,
    required: true,
  },
  current: {
    type: Number,
    default: 0,
  },
  description: {
    type: String,
    default: "No Information",
  },
  type: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "Unchecked",
  },
  billboardImg: { type: Object },
});

module.exports = mongoose.model('BillBoard', BillboardSchema);