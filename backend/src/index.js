const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const handlebars = require('express-handlebars');
const route = require('./routes/index');
const db = require('./config/db');

// connect database
db.connect();
const app = express(); //Framework
require('./config/db/passport');
const port = 3000

// public
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
/* app.use(validator()); */
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use(
  express.urlencoded({
    extended: true,
  }
));
app.use(express.json());

app.use(methodOverride('_method'));
// HTTP logger
//app.use(morgan('combined'));

// app.use(session({
//     secret: 'mysupersecret', 
//     resave:false, 
//     saveUninitialized:false,
//     store: new MongoStore({ mongooseConnection: mongoose.connection }),
//     cookie: { maxAge: 180 * 60 * 1000 }
// }));
// app.use(flash());
// app.use(passport.initialize());
// app.use(passport.session());

// app.use('/user', userRouter);
// app.use(function(req, res, next){
//   res.locals.signin = req.isAuthenticated();
//   res.locals.session = req.session;
//   if(res.locals.signin){
//     res.locals.user = req.user.name;
//     res.locals.email = req.user.email;
//     res.locals.address = req.user.address;
//     res.locals.sothich = req.user.sothich;
//     res.locals.sdt = req.user.sdt;
//     if(req.user.role==0){
//       res.locals.role = req.user.role;
//     }
//     res.locals.roles = 1;
//   } 
//   next();
// });
// Template engine
app.engine('hbs', handlebars({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// Routes init
route(app);

//127.0.0.1 - http://localhost:3000

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});

//package.json
/* "watch": "node-sass --watch src/resources/scss/ --output src/public/css/", */