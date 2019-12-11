const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let groupSchema = new Schema({
    groupid: String,
    groupname: String,
    createdat: {type: Date, default: Date.now},
    createdby:String,
    users:[]
    

},
{
    collection:'groups'
});

mongoose.model('group',groupSchema);
