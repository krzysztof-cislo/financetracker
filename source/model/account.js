var mongoose = require('mongoose');

var accountSchema = mongoose.Schema({
  userId: {
    type: String
  },
  name: {
    type: String
  },
  currency: {
    type: String
  },
  balance: {
    type: 'int'
  },
  accountType: {
    // current, saving
    type: String
  },
  lastUpdate: {
    type: Date
  }
});

module.exports = mongoose.model('Account', accountSchema);