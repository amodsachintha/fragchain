const {VAULTS} = require('../config');
const ioClient = require('socket.io-client');
let blockchainRef = undefined;
// connections to vault servers via socket
let sockets = [];
let localChainVersion = 0;
let latestChainVersion = {socket: null, version: 0};

const initializeSockets = (blockchain) => {
    blockchainRef = blockchain;
    VAULTS.forEach(serverIP => {
        const sock = ioClient('http://' + serverIP, {path: '/messenger'});
        registerEventsOnSocket(sock, serverIP);
        sockets.push(sock);
    });
};

const addSocket = (serverIP) => {
    const sock = ioClient('http://' + serverIP, {path: '/messenger'});
    registerEventsOnSocket(sock, serverIP);
    sockets.push(sock);
};

const synchronizeChainVersionBroadcast = () => {
    return new Promise((resolve) => {
        sockets.forEach(socket => {
            socket.emit('sync_chain_version');
        });
        setTimeout(() => {
            console.log('in setTimeout!');
            if (latestChainVersion.version > localChainVersion) {
                console.log('(info) replacing localchain');

                latestChainVersion.socket.emit('sync_chain');
                localChainVersion = latestChainVersion;
                resolve();
            }
        }, 10000)
    });

};

const registerEventsOnSocket = (socket, ip) => {
    socket.on('connect_error', (err) => {
        console.log('(warn) connect_error to server at: ' + ip)
    });

    socket.on('connect_timeout', (err) => {
        console.log('(warn) connect_timeout to server at: ' + ip)
    });

    socket.on('sync_chain_version_response', data => {
        console.log('(info) sync_chain_version_response from server at: ' + socket.handshake.address);
        if (data.chain_version > latestChainVersion) {
            latestChainVersion = {socket: socket, version: data.chain_version};
        }
    });

    socket.on('sync_chain_response', data => {
        console.log('(info) sync_chain_response from server at: ' + socket.handshake.address);
        console.log(data);
        // todo replace localchain for now.. add processing changes to later
    })
};


module.exports = {
    sockets,
    addSocket,
    initializeSockets,
    synchronizeChainVersionBroadcast
};