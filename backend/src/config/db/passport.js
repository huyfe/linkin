const passport = require('passport');
const User = require('../../app/models/UsersModel');
const LocalStrategy = require('passport-local').Strategy;

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done){
    User.findById(id, function(err, user){
        done(err, user);
    });
});

// Đăng ký
passport.use('local.signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, 
function(req,email,password, done){  
    User.findOne({'email': email}, function(err, user){
        if(err){
            return done(err);
        }
        if(user){
            return done(null, false, {message: 'Email đã tồn tại!'});
        }
        const newUser = new User();
        newUser.name = req.body.name;
        newUser.address = req.body.address;
        newUser.sothich = req.body.sothich;
        newUser.email = email;
        newUser.token = req.body._csrf;
        newUser.sdt = req.body.sdt;
        newUser.role = req.body.role;
        newUser.password = newUser.encryptPassword(password);
        /* newUser.address = address; */
        newUser.save(function(err, result){
            if(err){
                return done(err);
            }
            return done(null, newUser);
        });
    }
    
    );
}

));

// Đăng nhập
passport.use('local.signin', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
},
function(req, email, password, done){
    User.findOne({'email': email}, function(err, user){
        if(err){
            return done(err);
        }
        if(!user){
            return done(null, false, {message: 'Email Không tồn tại hoặc sai!'});
        }
        if(!user.validPassword(password)){
            return done(null, false, {message: 'Mật khẩu Không tồn tại hoặc sai!'});
        }
        req.session.user = email;
        return done(null, user);
    });
}));
/* passport.serializeUser((user, done) => { })
passport.deserializeUser((id, done) => { }) */

// Đổi mật khẩu
/* passport.use('local.reset', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, 
function(req,email,password, done){  
    User.findOne({'email': email}, function(err, user){
        if(err){
            return done(err);
        }
        const newUser = new User();     
        newUser.password = newUser.encryptPassword(password);
        newUser.save(function(err, result){
            if(err){
                return done(err);
            }
            return done(null, User);
        });
    }
    
    );
}

));
 */