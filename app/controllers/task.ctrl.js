const task = require('./../models/task');

module.exports={
    new: (req, res, next) =>{
        console.log( req.body.token);
        var newTask = new task( {'name':req.body.name} );
        newTask.addUser(req.body.token);
        newTask.addList(req.body.list_id);
        newTask.save().then(data => res.send(data))
        .catch(next);
        },
    getToday: (req, res,next) =>{
        console.log('getting tasks!!');
        task.find()
        .exec((err, data)=> {
            if (err)
                res.send(err)
            else if (!task)
                res.send(404)
            else
                res.send(data)
             next;
        })
    },
    taskDone: (req, res, next) => {
        console.log(req.params)
        task.findById(req.params.task_id)
            .then(item => item.remove().then(() => res.send({ success: true })))
            .catch(err =>{
                res.status(404).send({ erreur: err })
                next
            } );
    },
    taskImportance: (req,res,next)=>{ 
        task.findById(req.params.task_id)
            .then(item =>{
                item.change()
                item.save().then(() => res.send({ success: true }))
            })
            .catch(err =>{
                res.status(404).send({ erreur: err })
                next
            } );
    },
    taskDeadLine: (req,res,next) =>{
        console.log(req.body)
        task.findById(req.body.task_id)
        .then(item =>{
            console.log(item)
            item.setlimite(req.body.date)
            item.save().then(() => res.send({ success: true }))
        })
        .catch(err =>{
            res.status(404).send({ erreur: err })
            next
        } );
    }
}