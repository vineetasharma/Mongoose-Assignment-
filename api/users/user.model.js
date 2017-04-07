/**
 * Created by ttn on 06/04/17.
 */
var mongoose= require('mongoose');
var userSchema= new mongoose.Schema({

userName : {
  type: String,
  required: true,
},
  email: {
  type: String,
  }
});

module.exports= mongoose.model('User', userSchema)