const mongoose = require('mongoose');
let categorySchema = mongoose.Schema({
  name: {
    type: String,
    require: [true, 'Nama Wajib diisi'],
  },
});

module.exports = mongoose.model('Category', categorySchema);
