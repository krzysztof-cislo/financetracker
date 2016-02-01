var mongoose = require('mongoose');

var entryCategorySchema = mongoose.Schema({
  parentCategoryId: {
    type: String
  },
  name: {
    type: String,
    required: true
  },
  categoryType: {
    // income, outcome
    type: String
  }
});

module.exports = mongoose.model('EntryCategory', entryCategorySchema);