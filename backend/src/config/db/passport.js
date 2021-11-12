const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport');

const GOOGLE_CLIENT_ID = "1022092216832-1lvitselar5rlit7j0u9400bblvf0vhj.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

passport.use('google',
    new GoogleStrategy(
        {
            clientID: GOOGLE_CLIENT_ID,
            clientSecret: GOOGLE_CLIENT_SECRET,
            callbackURL: "/auth/google/callback",
        },
        function (accessToken, refreshToken, profile, done) {
            done(null, profile);
        }
    )
);

passport.serializeUser((usersss, done) => {
    done(null, usersss);
});

passport.deserializeUser((usersss, done) => {
    done(null, usersss);
});