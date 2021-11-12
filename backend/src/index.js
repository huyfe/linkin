const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const route = require('./routes/index');
const cors = require('cors');
const db = require('./config/db');
const http = require('http');

const socketIO = require("socket.io");

// Connect database
db.connect();
const app = express(); // Framework
const server = http.createServer(app)
const io = socketIO(server, {
  transports: ['polling'],
  cors: {
    cors: {
      origin: "http://localhost:4200"
    }
  }
})


io.on('connection', (socket) => {
  console.log('A user is connected');

  socket.on('message', (message) => {
    console.log(`message from ${socket.id} : ${message}`);
  })

  socket.on('disconnect', () => {
    console.log(`socket ${socket.id} disconnected`);
  })
})


// public
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.use(
  express.urlencoded({
    extended: true,
  }
  ));
app.use(express.json());
app.use(cors());


app.use(methodOverride('_method'));

// Routes init
route(app);

// Event listen server
const port = 3000;
server.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});