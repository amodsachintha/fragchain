const { VAULTS } = require('../config');
const ioClient = require('socket.io-client');

// connections to vault servers via socket
let sockets = [];
let latestChainVersion = 0;

const initializeSockets = (blockchain) => {
    VAULTS.map(serverIP => {
        const sock = ioClient('http://' + serverIP, {path: '/messenger'});
        sock.on('sync_chain_version_response', data => {
            if(data.chain_version > latestChainVersion){
                // sync chain
            }
        });
        sockets.push(sock);
    });
};

const addSocket = (serverIP) => {
    const sock = ioClient('http://' + serverIP, {path: '/messenger'});
    sockets.push(sock);
};

const synchronizeChain = () => {
  sockets.forEach(socket => {
     socket.emit('sync_chain_version');
  });
};

const sendMessage = (type, message, broadcast = false) => {
    if(broadcast){

    }else {

    }
};
module.exports = {
    sockets,
    addSocket,
    initializeSockets
};