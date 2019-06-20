const config = require('../config');
const io = require('socket.io')({path: '/messenger'});

// connections to vault clients via server handle.
let clients = [];

const startSocketIOServer = () => {
    io.on('connection', client => {
        clients.push(client);
        console.log('Client connected: ' + client);

        client.on('init', data => {
            console.log('data: ' + data);
        });

        client.on('sync_chain_version', data => {
            // send local chain version
            let chain_version = 3;
            client.emit('sync_chain_version_response', {
                chain_version: chain_version
            })
        });

        client.on('sync_chain_data', data => {
            // send local chain
            let localChain = {};
            client.emit('sync_chain_data_response', localChain)
        });


    });

    io.listen(config.MESSENGER_SERVER_PORT || 4444);
    console.log('SocketIO Server started!');
};

module.exports = {
    startSocketIOServer,
    clients
};