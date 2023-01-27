const express = require('express');
const router = express.Router();
const signup = require('../model/signup');
const { insertEmployee, getPassword } = require('../util/controller');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const bcrypt = require('bcrypt');
const saltRounds = 10;

router.get('/signup', function (req, res, next) {
  res.render('signup')
})

router.get('/login', function (req, res, next) {
  res.render('login');
})

router.post('/signup', async function (req, res, next) {

  try {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    const signup = await insertEmployee(username, email, password)
      .then(() => {
        res.status(201).json({
          message: 'Data Created'
        })
      });
  }

  catch (err) {
    console.log("err");
    res.status(500).json({
      error: err
    });
  }
})

router.post('/login/password', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login',
}));


passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

passport.use(new LocalStrategy(async function verify(username, password, cb) {

  try{
  const getData = await getPassword(username);

  bcrypt
  .hash(password, saltRounds)
  .then(hash => {
          userHash = hash 
    console.log('Hash ', hash)
    validateUser(hash)
  })
  .catch(err => console.error(err.message))

function validateUser(hash) {
    bcrypt
      .compare(password, hash)
      .then(res => {
        console.log(res) // return true
      })
      .catch(err => console.error(err.message))        
      // $2a$10$x0JjgCPMfTqJSYn/JNx9TOj2QP8OgeU2f2i8jy0ic1z

}
 } catch (err) {
    console.log(err);
    return cb(null, false)
  }
},
));


module.exports = router;

