const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
    updatedby:[],
    deletedby:[],
    archived: Boolean

},
{
    collection:'expenses'
});

mongoose.model('expense',expenseSchema);
