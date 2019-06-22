const server = require('./server');
const client = require('./client');
const CONSTANTS = require('./constants');
const ip = require('ip');

console.log('Node Address: ' + ip.address());
if (ip.address() === '172.16.0.10') {
    require('../config').VAULTS.push('172.16.0.20');
    require('../config').VAULTS.push('172.16.0.30');
} else if (ip.address() === '172.16.0.20') {
    require('../config').VAULTS.push('172.16.0.10');
    require('../config').VAULTS.push('172.16.0.30');
} else if (ip.address() === '172.16.0.30') {
    require('../config').VAULTS.push('172.16.0.10');
    require('../config').VAULTS.push('172.16.0.20');
}


// client.bootstrap();
const initMessenger = (blockchain) => {
    server.bootstrap(blockchain);
    client.bootstrap(blockchain);
};

// broadcast via server sockets
const broadcast = (type, data) => {
    server.broadcastMessage(type,data);
};

module.exports = {
    initMessenger,
    broadcast,
};
