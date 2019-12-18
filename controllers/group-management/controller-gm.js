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
       
           
           // console.log('userid: '+userid);
            UserModel.find({'userid': {'$in': result.users}}, (err,res)=>{
                if(err)
                {
                    console.log('Usremodel err: '+err);
                }else{
                
                    for(var o of res)
                    {
                        let obj = {};   
                       
                        obj.email = o.email;
                        obj.name = o.firstname;
                        obj.userid = o.userid;
                        res2.push(obj);
                         console.log('res: '+o.email);
                    }
                    res.send(res2);
                   
                   // console.log(res);
                }
            })
         
            
        
       
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