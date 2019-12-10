const mongoose = require('mongoose')
const model = require('../../models/models-gm/groupmodel')
const GroupModel = mongoose.model('group');
const shortid = require('shortid');


let createGroup = (req,res) => {

    let groupname = req.body.groupname;
    let createdat = req.body.createdat;
    let createdby = req.body.createdby;
    let users = req.body.users;



    var gml = new GroupModel({
        groupid: shortid.generate(),
        groupname: groupname,
        createdat: createdat,
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

module.exports = {
    createGroup:createGroup,
    getAllGroups:getAllGroups,
    deleteGroup: deleteGroup

}