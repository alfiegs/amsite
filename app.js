let express = require('express');
let app = express();
let port = 5000;
let http = require('http').Server(app)
let io = require('socket.io')(http);



app.set('view engine', 'ejs');
app.set('views', 'views');


app.use(express.static('public')); 
app.use(require('./routes/index'));
app.use(require('./routes/albums'));
app.use(require('./routes/feedback'));
app.use(require('./routes/api'));
app.use(require('./routes/chat'));

io.on('connection', (socket) => {
    socket.on('chat message',(msg)=>{
        io.emit('chat message', msg)
    })
})



http.listen(port, (params) => {
    console.log(`listening on port ${port}`)
})