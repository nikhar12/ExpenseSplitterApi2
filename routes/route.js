const controller = require('../controllers/user-management/controller-um')

const controllergm = require('../controllers/group-management/controller-gm')


let setRouter = (app) => {

    let baseurl = '/exsp/api/v1';

    app.post(baseurl+'/user/login', controller.login);
    app.post(baseurl+'/user/signup', controller.signup);
    app.get(baseurl+'/user/forgotpassword',controller.forgotpassword);
    app.get(baseurl+ '/user/getallUsers', controller.getAllUsers);

    app.post(baseurl+'/group/create', controllergm.createGroup);
    app.get(baseurl+'/group/getall', controllergm.getAllGroups);
    app.post(baseurl+'/group/delete', controllergm.deleteGroup);

}






module.exports = 
{setRouter: setRouter}