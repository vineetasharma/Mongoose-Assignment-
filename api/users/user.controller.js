/**
 * Created by ttn on 06/04/17.
 */
var UserService= require('./user.service');
exports.createUser= function (req,res,next) {

  var userData= req.body.data;
  console.log('UserData in controller----------',userData);
UserService.createUser(userData,res);
}

exports.getUsers= function (req,res,next) {
  UserService.getUsers(res);
}