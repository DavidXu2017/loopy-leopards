const routes = require('express').Router();

const yelpRoutes = require('./yelp.routes.js')
const googleAuthRoutes = require('./google.auth.routes.js')
const authRoutes = require('./auth.routes.js')
const eventbriteRoutes = require('./eventbrite.routes.js')
const eventRouter = require('./eventsRouter.js');
const userRouter = require('./users.routes.js');
const groupRouter = require('./groupsRouter.js');
const twilioRoutes = require('./twilio.routes.js');
const pushRoutes = require('./push.routes.js');
const googleMapRoutes = require('./google.map.routes.js');

// middleware to protect routes
function ensureAuthenticated(req, res, next) {
	console.log(req.isAuthenticated());
	if (req.isAuthenticated()) {
		return next();
	} else {
		return res.redirect('/login')
	}
}

// test route
routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

// auth routes
routes.use(googleAuthRoutes);
routes.use(authRoutes);

// TO PROTECT ROUTES, attach ensureAuthenticated function
// routes.get('/api/yelp', ensureAuthenticated);
routes.use(yelpRoutes);
routes.use(eventbriteRoutes);
routes.use(twilioRoutes);
routes.use(pushRoutes);
routes.use(googleMapRoutes);

routes.use('/api', eventRouter, userRouter, groupRouter);


module.exports = routes;