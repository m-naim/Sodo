var mongoose = require('mongoose');

let listSchema=new mongoose.Schema(
    {
        user:[
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            }
        ] ,
        name: String,
        tasks:[
            {
                todo: String,
                limite:Date
            }
        ]
    }
)
listSchema.methods.newTask = function(t) {
    this.tasks.push(t)
    return this.save()
}
listSchema.methods.addUser = function(u) {
    console.log(u);
    this.user.push(u)
    return this;
}
listSchema.methods.taskDone= function(id) {
    console.log(id)
    this.tasks= this.tasks.filter(item => item._id != id)
    console.log(this.tasks)
    return this.save()
}
module.exports = mongoose.model('List', listSchema);