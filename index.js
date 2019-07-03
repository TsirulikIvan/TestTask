let express = require('express');
let app = express();
let server = require('http').createServer(app);
let io = require('socket.io')(server);
//let Sequelize = require('sequelize');
//let sequelize = new Sequelize("Randis","", "",{
//});
let port = 3000;

server.listen(port);

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/index.html');
});

app.use(express.static('public'));

io.on('connection', function(socket){

  socket.on('subscribeToTimer', (interval) => {
    console.log('client is subscribing to timer with interval ', interval);
    setInterval(() => {
      socket.emit('timer', new Date());
    }, interval);
  });

  socket.on('eventServer', function (data) {
		console.log(data);
		socket.emit('eventClient', { data: 'Hello Client' });
	});

  socket.on('disconnect', function(){
      console.log('user disconnected');
    });
});
