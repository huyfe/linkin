const userRouter = require('./Users');

function route(app) {
    app.use('/users', userRouter);
}

module.exports = route;