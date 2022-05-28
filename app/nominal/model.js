const mongoose = require('mongoose');

const nominalSchema = mongoose.Schema({
  cointQuantity: {
    type: Number,
    default: 0,
  },
  coinName: {
    type: String,
    require: [true, 'Nama koin tidak boleh kosong'],
  },
});

module.exports = mongoose.model('Nominal', nominalSchema);
