/**
 * Created by ttn on 06/04/17.
 */
var userController= require('./../api/users/user.controller');
module.exports= function (app) {
app.post('/user',userController.createUser);
app.get('/users',userController.getUsers);
}