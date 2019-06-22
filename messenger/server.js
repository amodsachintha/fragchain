const config = require('../config');
const server = require('http').createServer();
const io = require('socket.io')(server, {path: '/messenger', serveClient: false, cookie: false});
const c = require('./constants');
let blockchainRef = undefined;
// connections to vault clients via server handle.
let clients = [];

const bootstrap = (blockchain) => {
    blockchainRef = blockchain;
    io.on('connection', client => {
        const host = client.handshake.headers.host;
        clients.push({
            client: client,
            host: host
        });
        console.log('(server)(success) Client connected: ' + host);

        client.on(c.SYNC_CHAIN_VERSION, () => {
            console.log('(server)(info) recv: ' + c.SYNC_CHAIN_VERSION + ' from: ' + host);
            // send local chain version
            client.emit(c.SYNC_CHAIN_VERSION_RESPONSE, {
                chain_version: blockchainRef.getLocalChainVersion()
            });
            console.log('(server)(info) send: ' + c.SYNC_CHAIN_VERSION_RESPONSE + ' to: ' + host);
        });

        client.on(c.SYNC_CHAIN, data => {
            console.log('(server)(info) recv: ' + c.SYNC_CHAIN + ' from: ' + host);
            // send local chain
            let chain = blockchainRef.getChain(false).map(bl => {
                let transactions = bl.transactions.map((transaction) => {
                    let frags = transaction.frags.map((frag) => {
                        return {
                            index: frag.index,
                            RSfragCount: frag.RSfragCount,
                            fileHash: frag.fileHash,
                            fragHash: frag.fileHash,
                            fragLocation: frag.fragLocation,
                        }
                    });
                    return {
                        index: transaction.index,
                        encFragCount: transaction.encFragCount,
                        fragHash: transaction.fragHash,
                        encFragHash: transaction.encFragHash,
                        frags: frags,
                        merkleRoot: transaction.merkleRoot,
                        transactionHash: transaction.transactionHash,
                        rsConfig: transaction.rsConfig
                    }
                });
                return {
                    index: bl.index,
                    previousHash: bl.previousHash,
                    owner: bl.owner,
                    file: bl.file,
                    transactions: transactions,
                    merkleRoot: bl.merkleRoot,
                    timestamp: bl.timestamp,
                    blockHash: bl.blockHash
                }
            });
            client.emit(c.SYNC_CHAIN_RESPONSE, chain);
            console.log('(server)(info) recv: ' + c.SYNC_CHAIN_RESPONSE + ' to: ' + host);
        });


    });

    server.listen(config.MESSENGER_SERVER_PORT || 4444, '0.0.0.0');
    console.log('SocketIO Server started!');
};

const broadcastMessage = (type, data) => {
    if (type === c.BROADCAST_NEW_BLOCK) {
        console.log('(server)(info) bcast: ' + c.BROADCAST_NEW_BLOCK);
        console.log('CLIENTS.LENGTH: ' + clients.length);
        clients.forEach(client => {
            client.client.emit(c.RECV_NEW_BLOCK, data)
        });
    }

};

module.exports = {
    bootstrap,
    broadcastMessage
};