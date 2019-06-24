const data = require('./blockchain/mock/data');
const blockchain = require('./blockchain/blockchain');
const messenger = require('./messenger/messenger');
const express = require('express');
const CONSTANTS = require('./messenger/constants');
let app = express();
const ip = require('ip');
const logger = require('./logger').getLogger('index');

// initializing
logger.info('Initializing....');
blockchain.initializeChain();
messenger.initMessenger(blockchain);

const store = (owner, file, transactions) => {
    blockchain.storeBlock(owner, file, transactions).then((block) => {
        messenger.broadcast(CONSTANTS.BROADCAST_NEW_BLOCK, block);
    }).catch(e => {
        logger.crit(e)
    });
};

const find = () => {

};

const getChain = () => {

};

// if(ip.address() === '172.16.0.10'){
//     setTimeout(() => {
//         store(data.owner, data.file, data.transactions);
//     }, 20000);
// }

//
// if(ip.address() === '172.16.0.20'){
//     setTimeout(() => {
//         store(data.owner, data.file, data.transactions);
//     }, 30000);
// }


app.get('/', (req, res) => {
    // blockchain.storeBlock(data.owner, data.file, data.transactions);
    res.sendFile(require('path').join(__dirname, '/public/index.html'));
    // res.json(blockchain.getChain());
});

app.get('/chain', (req, res) => {
    let chain = blockchain.getChain();
    res.json({
        ip: ip.address(),
        clients: messenger.getConnectedClientsToServer(),
        chain: chain.map(bl => bl.blockHash)
    });
});

app.get('/store', (req, res) => {
    store(data.owner, data.file, data.transactions);
    res.json({'status': 'ok'});
});


app.listen(3000, function () {
    logger.info('App listening on port 3000!');
});