const data = require('./blockchain/mock/data');
const blockchain = require('./blockchain/blockchain');
const messenger = require('./messenger/messenger');
const express = require('express');
const CONSTANTS = require('./messenger/constants');
let app = express();
const ip = require('ip');
const logger = require('./logger');

// initializing
logger.getLogger('index').info('Initializing....');
blockchain.initializeChain();
messenger.initMessenger(blockchain);

const store = (owner, file, transactions) => {
    blockchain.storeBlock(owner, file, transactions).then((block) => {
        messenger.broadcast(CONSTANTS.BROADCAST_NEW_BLOCK, block);
    }).catch(e=>{

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
    res.json(blockchain.getChain());
});

app.listen(3000, function () {
    console.log('App listening on port 3000!');
});