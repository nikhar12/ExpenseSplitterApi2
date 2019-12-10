const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
    userid: String,
    firstname: String,
    lastname: String,
    email: String,
    password: String,
    mobile: Number

});

mongoose.model('user',userSchema);
