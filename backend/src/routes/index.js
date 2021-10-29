const userRouter = require('./Users');
const groupRouter = require('./Groups');
const timelineRouter = require('./Timelines');
const categoryRouter = require('./Categories')
const linkRouter = require('./Links');

function route(app) {
    app.use('/users', userRouter);
    app.use('/groups', groupRouter);
    app.use('/timelines', timelineRouter);
    app.use('/categories', categoryRouter);
    app.use('/links', linkRouter);
}

module.exports = route;