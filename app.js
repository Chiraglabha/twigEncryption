const express = require('express');
const app = express();
const authRouter = require('./routers/auth');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: 'bla bla bla' 
  }));

  app.use(passport.initialize());
  app.use(passport.session());
  

app.set('views', __dirname + '/views');
app.set('view engine', 'twig');

app.get('/', function(req, res){
    res.render('index', {
    });
});

app.use('/',authRouter);


app.listen(3000, function() {
    console.log("running");
});