const mongoose = require('mongoose')
const model = require('../../models/models-em/expensemodel')
const ExpenseModel = mongoose.model('expense');
const shortid = require('shortid');




let getExpense= (req,res) => {

    let expenseid = req.params.expenseid;

    ExpenseModel.findOne({'expenseid': expenseid },(err,result)=>{
        if(err){
            res.send(err);
        }else{
            res.send(result);
        }
    });
};

let getAllUsersForAExpense = (req,res) => {

    const expenseid = req.body.expenseid;

    ExpenseModel.find({'expenseid': expenseid}, (err,result)=>{
        if(err)
        {
            res.send(err);

        }else{
            res.send(result);
        }
    })

};

let getAllExpensesForGroup = (req,res) =>{
    const groupid = req.body.groupid;

    ExpenseModel.find({'groupid': groupid},(err,result)=>{

        if(err){
            res.send(err);
        }else{
            res.send(result);
        }
    });
};

let AddExpense = (req,res) =>{

    let totalExpenseAmount = req.body.totalExpense;
    let totalPaidBy = req.body.totalPaidBy;
    let expenseName = req.body.expensename;
    let groupid = req.body.groupid;
    let expenseid = shortid.generate();
    let userid = req.body.createdby;
    let archived = false;
   
    let users = req.body.users;
    let socketroom = shortid.generate();
    let array = []
    
    for(let a in users)
    {
        let obj = {
            user: a,
            socketroom: socketroom
        }
        array.push(obj);
    }
    


    let eml = new ExpenseModel({
        expenseid: expenseid,
        amount: totalExpenseAmount,
        totalPaidBy: totalPaidBy,
        groupid: groupid,
        expensename: expenseName,
        createdby: userid,
        isarchived:archived,
        users:array
        
    });


    eml.save((err,result)=>{
        if(err)
        {
            res.send(err);

        }else {

        

            let obj = {
                userid: userid,
                action: 'addExpense',
                amount: totalExpenseAmount,
                users: users
                
            }
            let hist = new expenseHistorySchema({
                expenseid: expenseid,
                history: obj
            });

            hist.save((res,result)=>{
                if(err){
                    console.log('err history save'+err);
                } else {
                    console.log(result);
                }
            })

            res.send(result);

        }
    });

    //expense history

};


module.exports = {
    AddExpense:AddExpense,
    getAllExpensesForGroup: getAllExpensesForGroup,
    getExpense: getExpense,
    getAllUsersForAExpense: getAllUsersForAExpense
}