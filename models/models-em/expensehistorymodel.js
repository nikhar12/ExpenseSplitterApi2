const mongoose = require('mongoose');
const schema = mongoose.schema;

/*
    action: addexpense,editexpense,adduser,removeuser
*/
let expenseHistorySchema = new schema({ 

    expenseid: String,
    history:[{userid:String, action:String, amount: Number,users:[], date: Date.now()}]
    
},
{
    collection: 'exphistory'
});

mongoose.model('expensehistory',expenseHistorySchema);