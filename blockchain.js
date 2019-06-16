const realm = require('./realm');
const {MerkleTree} = require('merkletreejs');
const SHA256 = require('crypto-js/sha256');

const initializeChain = () => {
    let size = realm.objects('Block').length;
    if (size === 0)
        generateGenesisBlock();
};

const generateGenesisBlock = () => {
    console.log('Generating Genesis Block!');
    const block = {
        index: 0,
        previousHash: '0000000000000000000000000000000000000000000000000000000000000000',
        owner: {
            uuid: '000000-00000000-00000000',
            name: 'Vault Genesis Block',
            username: 'vault',
            privateKey: 'vault.genesis',
            publicKey: 'vault.genesis',
            masterKey: 'vault.genesis',
            createdAt: new Date()
        },
        file: {
            fileName: 'vault.genesis',
            fileSize: 0,
            fileHash: '0000000000000000000000000000000000000000000000000000000000000000'
        },
        transactions: [{
            index: 1,
            encFragCount: 2,
            fragHash: '0000000000000000000000000000000000000000000000000000000000000000',
            encFragHash: '0000000000000000000000000000000000000000000000000000000000000000',
            frags: [{
                index: 1,
                RSfragCount: 1,
                fragHash: '0000000000000000000000000000000000000000000000000000000000000000',
                fragLocation: 'Mars :D',
            }],
            merkleRoot: '0000000000000000000000000000000000000000000000000000000000000000',
            transactionHash: '0000000000000000000000000000000000000000000000000000000000000000',
            rsConfig: '4+2'
        }],
        timestamp: new Date(),
        merkleRoot: '0000000000000000000000000000000000000000000000000000000000000000',
        blockHash: undefined
    };
    block.blockHash = SHA256(block.index + block.previousHash + block.timestamp.getTime() + block.merkleRoot).toString();
    try {
        realm.write(() => {
            realm.create('Block', block);
        });
    } catch (e) {
        console.log('Error generating Genesis Block!!!');
        console.log(e);
    }
    console.log('Genesis block generated successfully!');
    console.log('Local chain is at idx: 1');
};

const storeBlock = (owner, file, transactions) => {
    const prevBlock = getLatestBlock();
    const block = {
        index: prevBlock.index + 1,
        previousHash: prevBlock.blockHash,
        owner: owner,
        file: file,
        transactions: transactions,
        timestamp: new Date(),
        merkleRoot: generateTransactionMerkleRoot(transactions),
        blockHash: undefined
    };
    block.blockHash = generateBlockHash(block);
    return new Promise((resolve, reject) => {
        try {
            realm.write(() => {
                const blockFromChain = realm.create('Block', block);
                resolve(blockFromChain);
            })
        } catch (e) {
            reject(e);
        }
    })
};

const generateTransactionMerkleRoot = (transactions) => {
    const leaves = transactions[0].frags.map(x => x.fragHash);
    const tree = new MerkleTree(leaves, SHA256);
    tree.print();
    return tree.getRoot().toString('hex');
};

const generateBlockHash = (block) => {
    return SHA256(block.previousHash + block.owner.uuid + block.file.fileHash + block.timestamp.getTime() + block.merkleRoot).toString();
};

const getChain = () => {
    return realm.objects('Block');
};

const getLatestBlock = () => {
    try {
        let sortedChain = realm.objects('Block').sorted('timestamp', true);
        return sortedChain[0];
    } catch (e) {
        console.log(e);
        return null;
    }
};

module.exports = {
    initializeChain,
    storeBlock,
    getChain,
    getLatestBlock,
    generateTransactionMerkleRoot
};