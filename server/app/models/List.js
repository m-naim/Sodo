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
    }
)

listSchema.methods.addUser = function(u) {
    console.log(u);
    this.user.push(u)
    return this;
}
module.exports = mongoose.model('List', listSchema);