module.exports = {
    findOrCreate: function (accessToken, refreshToken, profile, cb) {

        db.collection('users').findAndModify({
                id: profile.id
            }, {}, {
                $setOnInsert: {
                    id: profile.id,
                    name: profile.displayName || 'Anonymous',
                    email: profile.email || 'No public email',
                    created_on: new Date(),
                    provider: profile.provider || ''
                },
                $set: {
                    last_login: new Date()
                },
                $inc: {
                    login_count: 1
                }
            }, {
                upsert: true,
                new: true
            }, //Insert object if not found, Return new object after modify
            (err, doc) => {
                console.log(err)
                return cb(null, doc.value);
            }
        );
    }
}