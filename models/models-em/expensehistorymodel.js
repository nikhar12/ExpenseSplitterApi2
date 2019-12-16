const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*
    action: addexpense,editexpense,adduser,removeuser
*/
let expenseHistorySchema = new Schema({ 

    expenseid: String,
    history:[{userid:String, action:String, amount: Number,users:[], date:{ type: Date, default: Date.now }}]
    
},
{
    collection: 'exphistory'
});

mongoose.model('expensehistory',expenseHistorySchema);