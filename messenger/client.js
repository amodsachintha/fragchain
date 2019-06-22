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
        let url = 'http://' + serverIP + ':4444';
        console.log('(client)(info) ' + url);
        const sock = ioClient(url);
        registerEventsOnSocket(sock, serverIP);
        sockets.push(sock);
    });
};

const addSocket = (serverIP) => {
    const sock = ioClient('http://' + serverIP + ':4444');
    registerEventsOnSocket(sock, serverIP);
    sockets.push(sock);
};

const synchronizeChainVersionBroadcast = () => {
    return new Promise((resolve) => {
        sockets.forEach(socket => {
            console.log('(client)(info) send: sync_chain_version to: ' + socket.id);
            socket.emit('sync_chain_version');
        });
        // console.log('(client)(info) in setTimeout!');
        setTimeout(() => {
            if (latestChainVersion.version > localChainVersion) {
                console.log('(client)(info) send: sync_chain to: ' + latestChainVersion.socket.id);
                latestChainVersion.socket.emit('sync_chain');
                localChainVersion = latestChainVersion;
            }
            resolve();
        }, 10000)
    });

};

const registerEventsOnSocket = (socket, ip) => {
    socket.on('connect_error', (err) => {
        console.log('(client)(warn) connect_error to server at: ' + ip);
        console.log(err.toString());
    });

    socket.on('connect_timeout', (err) => {
        console.log('(client)(warn) connect_timeout to server at: ' + ip);
        console.log(err.toString());
    });

    socket.on('sync_chain_version_response', data => {
        console.log('(client)(info) recv: sync_chain_version_response from: ' + socket.id);
        console.log('(client)(info) recv: chain_version: '+ data.chain_version);
        if (data.chain_version > latestChainVersion.version) {
            latestChainVersion = {socket: socket, version: data.chain_version};
        }
    });

    socket.on('sync_chain_response', data => {
        console.log('(client)(info) recv: sync_chain_response from: ' + socket.id);
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