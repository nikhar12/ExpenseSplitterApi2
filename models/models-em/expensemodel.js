const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shortid = require('shortid');


let expenseSchema = new Schema({
    expenseid: String,
    expensename: String,
    amount:Number,
    totalpaidby:[{userid:String, amount:Number}],
    createdat:{type: Date, default: Date.now},
    updatedat: {type: Date},
    deletedat: {type: Date},
    groupid: String,
    createdby: String,
    updatedby:[{userid:String, amount:Number}],
    // deletedby:String,
    isarchived: Boolean,
    users:[{userid:String, socketroom:String}]
    
    

},
{
    collection:'expenses'
});

mongoose.model('expense',expenseSchema);
