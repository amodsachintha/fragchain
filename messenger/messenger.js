const server = require('./server');
const client = require('./client');
const ip = require('ip');

const blockchain = {};

server.startSocketIOServer();

console.log('Node Address: ' + ip.address());
if (ip.address() === '172.16.0.10') {
    require('../config').VAULTS.push('172.16.0.20');
    // require('../config').VAULTS.push('172.16.0.30');
} else if (ip.address() === '172.16.0.20') {
    require('../config').VAULTS.push('172.16.0.10');
    // require('../config').VAULTS.push('172.16.0.30');
} else if (ip.address() === '172.16.0.30') {
    require('../config').VAULTS.push('172.16.0.10');
    require('../config').VAULTS.push('172.16.0.20');
}


client.initializeSockets(blockchain);
setTimeout(() => {
    client.synchronizeChainVersionBroadcast().then(() => {
        console.log('Sync Chain complete!')
    });
}, 5000);
