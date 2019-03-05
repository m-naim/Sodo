var mongoose = require('mongoose');

let taskSchema=new mongoose.Schema(
    {
        user:[
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            }
        ] ,
        name: String,
        limite:Date,
        list:[
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'task'
                
            }            
    ] ,
    }
)
taskSchema.methods.addUser = function(u) {
    console.log(u);
    this.user.push(u)
    return this;
}

taskSchema.methods.addList = function(l) {
    this.list.push(l)
    return this
}

module.exports = mongoose.model('task', taskSchema);