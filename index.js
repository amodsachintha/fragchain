const data = require('./blockchain/mock/data');
const blockchain = require('./blockchain/blockchain');
const messenger = require('./messenger/messenger');
const SHA256 = require('crypto-js/sha256');
const express = require('express');
const CONSTANTS = require('./messenger/constants');
const ip = require('ip');
let app = express();

// initializing
blockchain.initializeChain();
messenger.initMessenger(blockchain);

const store = (owner, file, transactions) => {
    blockchain.storeBlock(owner, file, transactions).then((block) => {
        messenger.broadcast(CONSTANTS.BROADCAST_NEW_BLOCK, block);
    });
};

const find = () => {

};

const getChain = () => {

};
//
// if(ip.address() === '172.16.0.10'){
//     setTimeout(() => {
//         store(data.owner, data.file, data.transactions);
//     }, 20000);
// }
//
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