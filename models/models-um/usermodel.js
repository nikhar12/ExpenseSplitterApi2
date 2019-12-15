const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
    userid: String,
    firstname: String,
    lastname: String,
    email: String,
    password: String,
    mobile: Number,
    groups: [],
    online: Boolean,
    pendingAmount: Number,
    pendingAmountPerUser: [{userid:String, amount:Number}]

});

mongoose.model('user',userSchema);
