const config = require('../config');
const server = require('http').createServer();
const io = require('socket.io')(server, {serveClient: false, cookie: false});

// connections to vault clients via server handle.
let clients = [];

const startSocketIOServer = () => {
    io.on('connection', client => {
        clients.push(client);
        console.log('(server)(info) Client connected: ' + client.id);

        client.on('sync_chain_version', () => {
            console.log('(server)(info) recv: sync_chain_version from: ' + client.id);
            // send local chain version
            let chain_version = 3;
            client.emit('sync_chain_version_response', {
                chain_version: chain_version
            });
            console.log('(server)(info) send: sync_chain_version_response to: ' + client.id);
        });

        client.on('sync_chain', data => {
            console.log('(server)(info) recv: sync_chain from: ' + client.id);
            // send local chain
            let localChain = {'chain': 'hello', 'version': 3};
            client.emit('sync_chain_response', localChain);
            console.log('(server)(info) recv: sync_chain_response to: ' + client.id);
        });


    });

    server.listen(config.MESSENGER_SERVER_PORT, '0.0.0.0');
    console.log('SocketIO Server started!');
};

module.exports = {
    startSocketIOServer,
    clients
};