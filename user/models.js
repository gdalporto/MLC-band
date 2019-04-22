'use strict';

const mongoose = require('mongoose');

const bcrypt = require('bcryptjs');


// Schema for User
const userSchema = mongoose.Schema({

  username: {type:String, required:true, unique:true},
  password: {type:String, required:true},
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  email: {type: Boolean, required: true}
  });



userSchema.methods.serialize = function() {

  return {
    id: this._id,
    username: this.username,
    firstName: this.firstName,
    lastName: this.lastName,
    email: this.email,
  };
};


userSchema.methods.validatePassword = function(password) {
  return bcrypt.compare(password, this.password);
};

userSchema.statics.hashPassword = function(password) {
  return bcrypt.hash(password, 10);
};



const User = mongoose.model('User', userSchema);

module.exports = {User};
