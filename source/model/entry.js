var mongoose = require('mongoose');

var schema = mongoose.Schema({
  userId: {
    type: String
  }
});

module.exports = mongoose.model('Entry', schema);