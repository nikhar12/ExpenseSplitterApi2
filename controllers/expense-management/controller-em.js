const mongoose = require('mongoose')
const model = require('../../models/models-em/expensemodel')
const historymodel = require('../../models/models-em/expensehistorymodel')
const ExpenseModel = mongoose.model('expense');
const ExpenseHistoryModel = mongoose.model('expensehistory')
const shortid = require('shortid');



let deleteExpense = (req,res) => {
    let expenseid = req.params.expenseid;

    ExpenseModel.deleteOne({'expenseid': expenseid}, (err)=>{
        if(err){
            console.log('ERR: '+JSON.stringify(err));
            res.send(err);
        }
    });
}

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

    ExpenseModel.findOne({'expenseid': expenseid}, (err,result)=>{
        if(err)
        {
            res.send(err);

        }else{
            console.log('expenseobject: ' + result);
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
    let array = [];
    console.log('users: '+users);
    let temp = users.split(',');
  
    for(let a of temp)
    {
        let obj = {
            userid: a,
            socketroom: socketroom
        }
       
        array.push(obj);
    }
    console.log('array '+array);


    let eml = new ExpenseModel({
        expenseid: expenseid,
        amount: totalExpenseAmount,
        totalpaidby: totalPaidBy,
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
            console.log('result: eml: '+result);
            
res.send(result);
        

            /*  let obj = {
                userid: userid,
                action: 'addExpense',
                amount: totalExpenseAmount,
                users: users
                
            }
            let hist = new ExpenseHistoryModel({
                expenseid: expenseid,
                history: obj
            }); */

            /* hist.save((err,result)=>{
                if(err){
                    console.log('history '+err);
                    res.send(err);
                } else {
                    console.log('history succ '+result);
                    res.send(result);
                }
            }) */

           
 
        }
    });

    //expense history

};




module.exports = {
    AddExpense:AddExpense,
    getAllExpensesForGroup: getAllExpensesForGroup,
    getExpense: getExpense,
    getAllUsersForAExpense: getAllUsersForAExpense,
    deleteExpense: deleteExpense
}