/*
const express = require('express'), // Procede a requerir el modulo de Express
  app = express(), // y al Inicializarlo este genera un objeto que se almacenara en una constante llamada app la cual tendra todas las configuraciones del servidor..
  /!*path = require('path'), // Modulo que permite manejar rutas de acceso a directorios, etc.*!/
  server = require('http').createServer(app),
  io = require('socket.io')(server); // De esta Forma Se Implementa el uso del modulo SocketIO, por regla gral el nombre del Socket se mantiene asi.


/!** Settings: Configuraciones Personalizadas para mejorar el rendimiento.*!/
//app.set('port', process.env.PORT || 8080);
/!* Configuracion del Puerto. 'process.env.PORT'-> Trae el puerto configurado para el equipo. En el caso de que no exista puerto se define uno a traves de || y colocando el numero del puerto.*!/

/!** Static Files: Archivos que se envian una sola vez al navegador y no se modifican. en el caso de modificarse debe realizarse la llamada nuevamente.*!/
/!*console.log(__dirname);*!/ // __dirname muestra la direccion del directorio actual.
app.use(express.static(path.join(__dirname, 'src'))); // Mediante esta Sentencia se le comunica al servidor que se le pasaran todos los datos almacenados en la carpeta src.



/!** WebSocket: Se configura la comunicacion del servidor, mediante la escucha de eventos determinados. *!/
io.on('connection', () => {
  console.log('Ingresa Nueva Comanda...')
  socket.emit('listarPedidos', )
}); // El primer Evento es el de conexion, el cual se le coloca el nombre y se le define la accion que realizara posterior a la susodicha conexion.

  /!** Start Server (Inicio del Servidor) *!/
server.listen(8080, () => {
  console.log('Servidor Corriendo en http://localhost:8080');
}); // Con el Metodo listen se le asigna el puerto que el servidor mantendra en escucha.

*/

function connect() {
  var socket = new SockJS('/gs-guide-websocket');
  stompClient = Stomp.over(socket);
  stompClient.connect({}, function (frame) {
    setConnected(true);
    console.log('Connected: ' + frame);
    stompClient.subscribe('/topic/greetings', function (greeting) {
      showGreeting(JSON.parse(greeting.body).content);
    });
  });
}





