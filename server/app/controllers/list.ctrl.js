const List = require('./../models/List')

module.exports = {
    newList: (req, res, next) => {
        console.log(req.body.token);
        const newList = new List({
            'name': req.body.name
        });
        newList.addUser(req.body.token);
        newList.save().then(list => res.send(list))
            .catch(next);
    },
    getAll: (req, res, next) => {
        List.find({
                user: [req.headers.token]
            })
            .exec((err, list) => {
                if (err)
                    res.send(err)
                else if (!list)
                    res.send(404)
                else
                    res.send(list)
                next
            })
    },
    delList: (req, res, next) => {

        List.findById(req.params.id).
        then(item => item.remove().then(
                () => res.send({
                    success: true
                })))
            .catch(err => {
                res.status(404).send({
                    erreur: err
                })
                next
            });
    }
}