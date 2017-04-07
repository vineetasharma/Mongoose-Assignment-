/**
 * Created by ttn on 06/04/17.
 */
var User = require('./user.model');
exports.createUser= function (userData,res) {

  User.create(userData, function (err,data) {
    if(err){
      res.send({message:"error while creating user",error: err});
    }
    else{
      res.send({message:"user created ::", user: data});
    }

  })
  
}
exports.getUsers= function (res) {

  User.find({}, function (err,data) {
    if(err){
      res.send({message:"error while geting data user",error: err});
    }
    else{
      res.send({message:"Results:::", user: data});
    }

  })

}