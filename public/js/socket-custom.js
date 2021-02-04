var socket = io();

//Escuchar
socket.on('connect', function() {
    console.log('Conectado al servidor')
});
//Escuchar
socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor')
});

//Emitir información
socket.emit('enviarMensaje', {
    usuario: 'Anthony',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log('respuesta del server: ', resp);
});

//Escuchar información
socket.on('enviarMensaje', function(mensaje) {

    console.log('Servidor: ', mensaje)

});