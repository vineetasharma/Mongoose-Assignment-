/**
 * Created by ttn on 06/04/17.
 */
var data= require('./config/dataSource');
var bodyParser= require('body-parser');
var express= require('express');
var app = express();
app.use(bodyParser());
require('./config/route')(app);

app.listen(3000,function (err,data) {
  console.log('server started---------------on port 3000');
})