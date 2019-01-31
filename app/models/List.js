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
module.exports = mongoose.model('List', listSchema);