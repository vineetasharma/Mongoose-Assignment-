/**
 * Created by ttn on 06/04/17.
 */

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/demo');

(function(){
  mongoose.connection.on('open',function(err,data){
    console.log('connected successfully||||');
  });
  mongoose.connection.on('error',function(err,data){
    console.log('could not connected',err);
  })
})();