const data = require('./test/data');
const blockchain = require('./blockchain');
const SHA256 = require('crypto-js/sha256');

const express = require('express');
let app = express();
blockchain.initializeChain();


app.get('/', (req, res) => {
    // blockchain.storeBlock(data.owner,data.file,data.transactions);
    res.json(blockchain.getChain());
});

app.get('/latest', (req, res) => {
    res.json(blockchain.getLatestBlock());
});

app.get('/sha', (req, res) => {
    res.json({sha256: SHA256(req.val).toString()});
});

app.get('/merkle', (req, res) => {
    res.send(blockchain.generateTransactionMerkleRoot(data.transactions));
});

app.listen(3000, function () {
    console.log('App listening on port 3000!');
});