var mongoose = require('mongoose');

let listSchema=new mongoose.Schema(
    {
        name: String,
        tasks:[
            {
                todo: String
            }
        ]
    }
)
listSchema.methods.newTask = function(t) {
    this.tasks.push(t)
    return this.save()
}
listSchema.methods.taskDone= function(id) {
    console.log(id)
    this.tasks= this.tasks.filter(item => item._id != id)
    console.log(this.tasks)
    return this.save()
}
module.exports = mongoose.model('List', listSchema);