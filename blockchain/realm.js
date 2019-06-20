const Realm = require('realm');
const models = require(__dirname + '/models');

const realm = new Realm({
    path: __dirname + '/db/vault.realm',
    schema: [
        models.Block,
        models.File,
        models.Frag,
        models.Owner,
        models.Transaction
    ]
});

module.exports = realm;