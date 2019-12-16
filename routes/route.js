const controller = require('../controllers/user-management/controller-um')

const controllergm = require('../controllers/group-management/controller-gm')
const controllerem = require('../controllers/expense-management/controller-em')

let setRouter = (app) => {

    let baseurl = '/exsp/api/v1';

    app.post(baseurl+'/user/login', controller.login);
    app.post(baseurl+'/user/signup', controller.signup);
    app.get(baseurl+'/user/forgotpassword',controller.forgotpassword);
    app.get(baseurl+ '/user/getallUsers', controller.getAllUsers);
    app.get(baseurl+'/user/group/getallgroups/:userid',controller.getAllGroupsForUser)

    app.post(baseurl+'/group/create', controllergm.createGroup);
    app.get(baseurl+'/group/getall', controllergm.getAllGroups);
    app.post(baseurl+'/group/delete', controllergm.deleteGroup);
    app.get(baseurl+'/group/:groupid',controllergm.getGroup);
    app.get(baseurl+'/group/:groupid/getAllUsers',controllergm.getAllUsersForAGroup)
    
    app.post(baseurl+'/group/expense',controllerem.getAllExpensesForGroup);
    app.get(baseurl+'/expense/:expenseid', controllerem.getExpense)
    app.get(baseurl+'/expense/users', controllerem.getAllUsersForAExpense);
    //app.post(baseurl+'/expense/create')
    
    app.post(baseurl+'group/:groupid/expense/create',controllerem.AddExpense)
    



}






module.exports = 
{setRouter: setRouter}