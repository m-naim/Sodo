const List = require('./../models/List')

module.exports={
    newList: (req, res, next) =>{
        let { name } = req.body
        let obj = { name}
        new List(obj).save()
          .then( function() {
            res.status(200).json({list: ' added successfully'});
          })
          .catch(next);
      },
    getAll: (req, res,next) =>{
        List.find()
        .exec((err, list)=> {
            if (err)
                res.send(err)
            else if (!list)
                res.send(404)
            else
                res.send(list)
            next()            
        })
    },
    addTask: (req, res, next) => {
        List.findById(req.body.list_id).then((list)=> {
            return list.newTask({
                todo: req.body.todo
            }).then(() => {
                return res.json({msg: "Done"})
            })
        }).catch(next)
    }
}