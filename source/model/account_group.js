var mongoose = require('mongoose');

var accountGroupSchema = mongoose.Schema({
  userId: {
    type: String
  },
  name: {
    type: String
  }
});

module.exports = mongoose.model('AccountGroup', accountGroupSchema);
