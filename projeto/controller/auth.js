var userModel = require('../models/user');
var mongoose  = require('mongoose');
var config = require('../config'); 
var passport = require("passport");
var passportJWT = require("passport-jwt");
var ExtractJwt = passportJWT.ExtractJwt;
var JwtStrategy = passportJWT.Strategy;

var params = {};
params.secretOrKey = config.secret;
params.jwtFromRequest= ExtractJwt.fromAuthHeaderAsBearerToken();


module.exports = function() {
    var strategy = new  JwtStrategy(params, function(jwt_payload, done) {
        userModel.findOne({id: jwt_payload.id}, function(err, user) {
            if (err) {
                return done(err, false);
            }
            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
            }
        });
    });
    passport.use(strategy);
    return {
      initialize: function() {
        return passport.initialize();
      },
      authenticate: function() {
        return passport.authenticate("jwt", config.jwtSession);
      }
    };
  };