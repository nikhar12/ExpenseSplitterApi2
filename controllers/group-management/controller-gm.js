const mongoose = require('mongoose')
const model = require('../../models/models-gm/groupmodel')
const GroupModel = mongoose.model('group');
const shortid = require('shortid');
const UserModel = mongoose.model('user');

let createGroup = (req,res) => {

    let groupname = req.body.groupname;
    //let createdat = req.body.createdat;
    let createdby = req.body.createdby;
    //let users = req.body.users;
    let users=[];
    let temp = req.body.users+'';
    users = temp.split(',');
    users.push(createdby);
    

    console.log('users: ' + users);

    var gml = new GroupModel({
        groupid: shortid.generate(),
        groupname: groupname,
        createdby: createdby,
        users: users
    });

    gml.save((err,result) => {
        if(err)
        {
            res.send(err);
        }
        else
        {
            res.send(result);
        }
    });

};

let getAllUsersForAGroup = (req,res) => {

let groupid = req.body.groupid;

GroupModel.findOne({'groupid':groupid}, (err,result)=>{
    if(err)
    {
        res.send(err);
    }
    else
    {
        let res2 = [];
        console.log('getAllUsersForAGroup :'+result);
        for(var userid of result.users)
        {
            let obj = {};
            console.log('userid: '+userid);
            UserModel.findOne({'userid': userid}, (err,res)=>{
                if(err)
                {
                    console.log('Usremodel err: '+err);
                }else{
                    console.log('res: '+res.email);
                    obj.email = res.email;
                    obj.name = res.firstname;
                    obj.userid = res.userid;
                }
            })
            console.log('obj.email: '+obj.email);
            console.log('obj.userid: '+obj.userid);
            console.log('obj.firstname : '+obj.firstname);
            res2.push(obj);
        }
        res.send(res2);
    }
});

};

let deleteGroup = (req,res) =>{

    let groupid = req.body.groupid;

    GroupModel.findOneAndDelete({'groupid': groupid}, (err,result)=>{
        if(err){
            res.send(err);
        }else{
            res.send(result);
        }
    });

};


let getAllGroups = (req,res) => {

    GroupModel.find((err,result)=>{
        if(err){
            res.send(err);
        }else{
            res.send(result);
        }
    })
};


let getGroup = (req,res) =>{

    const groupid = req.params.groupid;

    GroupModel.find({'groupid': groupid},(err,result)=>{
        if(err){
            res.send(err);
        }else{
            res.send(result);
        }
    });

};


module.exports = {
    createGroup:createGroup,
    getAllGroups:getAllGroups,
    deleteGroup: deleteGroup,
    getGroup:getGroup,
    getAllUsersForAGroup: getAllUsersForAGroup

}