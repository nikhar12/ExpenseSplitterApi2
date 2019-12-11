const mongoose = require('mongoose')
const model = require('../../models/models-em/expensemodel')
const ExpenseModel = mongoose.model('expense');
const shortid = require('shortid');


let AddExpense = (req,res) =>{

    let totalExpenseAmount = req.body.totalExpense;
    let totalPaidBy = req.body.totalPaidBy;
    let expenseName = req.body.expensename;
    let groupid = req.body.groupid;
    let expenseid = shortid.generate();
    let userid = req.body.userid;
    let archived = false;

    let eml = new ExpenseModel({
        expenseid: expenseid,
        amount: totalExpenseAmount,
        totalPaidBy: totalPaidBy,
        groupid: groupid,
        expensename: expenseName,
        createdby: userid,
        updatedby:[],
        deletedby:[],
        archived:archived
        
    });


    eml.save((err,result)=>{
        if(err)
        {
            res.send(err);

        }else {
            res.send(result);
        }
    });

};


module.exports = {
    AddExpense:AddExpense
}