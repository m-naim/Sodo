var FacebookStrategy = require('passport-facebook').Strategy,
	GoogleStrategy = require('passport-google-oauth20').Strategy;


module.exports = function (passport, db) {

	passport.serializeUser(function (user, done) {
		done(null, user.id);
	});

	passport.deserializeUser(function (id, done) {
		db.collection('users').findOne({
			_id: id
		}, function (err, user) {
			done(err, user);
		});
	});


	passport.use(new FacebookStrategy({
			clientID: process.env.FACEBOOK_APP_ID,
			clientSecret: process.env.FACEBOOK_APP_SECRET,
			callbackURL: "https://ephyon.herokuapp.com/auth/facebook/callback" //"https://ephyon.herokuapp.com/auth/facebook/callback"
		},
		function (accessToken, refreshToken, profile, cb) {
			console.log(profile);

			db.collection('users').findAndModify({
					id: profile.id
				}, {}, {
					$setOnInsert: {
						id: profile.id,
						name: profile.displayName || 'Anonymous',
						email: profile.emails || 'No public email',
						created_on: new Date(),
						provider: profile.provider || '',
						photo: profile.photos || ''
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
		}));

	passport.use(new GoogleStrategy({
			clientID: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
			callbackURL: "https://ephyon.herokuapp.com/auth/google/callback"
		},
		function (accessToken, refreshToken, profile, cb) {
			console.log(profile);
			db.collection('users').findAndModify({
					id: profile.id
				}, {}, {
					$setOnInsert: {
						id: profile.id,
						name: profile.displayName || 'Anonymous',
						email: profile.emails[0].value || 'No public email',
						created_on: new Date(),
						provider: profile.provider || '',
						photo: profile.photos[0].value || ''
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
	));
}