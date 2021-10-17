const userRouter = require('./Users');
const groupRouter = require('./Groups');

function route(app) {
    app.use('/users', userRouter);
    app.use('/groups', groupRouter);
}

module.exports = route;