const userRouter = require('./Users');
const groupRouter = require('./Groups');
const timelineRouter = require('./Timelines')

function route(app) {
    app.use('/users', userRouter);
    app.use('/groups', groupRouter);
    app.use('/timelines', timelineRouter);
}

module.exports = route;