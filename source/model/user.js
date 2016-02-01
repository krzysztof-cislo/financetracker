var mongoose = require('mongoose');

var createdDate = require('plugin/created_date');
var validEmail = require('validator/email');

var userSchema = mongoose.Schema({
  _id: {
    type: String,
    lowercase: true,
    trim: true,
    validate: validEmail
  },
  name: {
    first: String,
    last: String
  },
  salt: {
    type: String,
    required: true
  },
  hash: {
    type: String,
    required: true
  },
  linkedUserIds: {
    type : Array
  }
});

// add created date property
userSchema.plugin(createdDate);

// properties that do not get saved to the db
userSchema.virtual('fullname').get(function () {
  return this.name.first + ' ' + this.name.last;
})

module.exports = mongoose.model('User', userSchema);