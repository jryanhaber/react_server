const passport = require('passport');

module.exports = (app) => {
  // handle auth call to google
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  // handle auth callback
  app.get('/auth/google/callback', passport.authenticate('google'));
};
