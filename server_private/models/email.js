// ----------------------
// ****** Modules! ******
// ----------------------
var mongoose = require('mongoose');



// ---------------------
// ****** Schema! ******
// ---------------------
var EmailSchema = mongoose.Schema( {
  firstname: {type: String, required: true},
  lastname: {type: String, required: true},
  city: {type: String, required: true},
  state: {type: String, required: true},
  email: {type: String, required: true},
});



// ----------------------
// ****** Exports! ******
// ----------------------
module.exports = mongoose.model('Email', EmailSchema);
