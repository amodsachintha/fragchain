const Realm = require('realm');
const models = require('./models');

const realm = new Realm({
    path: './db/vault.realm',
    schema: [
        models.Block,
        models.File,
        models.Frag,
        models.Owner,
        models.Transaction
    ]
});

module.exports = realm;