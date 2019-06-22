const server = require('./server');
const client = require('./client');
const ip = require('ip');

const blockchain = {};

server.startSocketIOServer();

console.log(ip.address());
if (ip.address() === '172.16.0.10')
    require('../config').VAULTS.push('172.16.0.20');
else if (ip.address() === '172.16.0.20')
    require('../config').VAULTS.push('172.16.0.10');

client.initializeSockets(blockchain);
client.synchronizeChainVersionBroadcast().then(() => {
    console.log('Sync Chain complete!')
});