const realm = require('./realm');
const {MerkleTree} = require('merkletreejs');
const SHA256 = require('crypto-js/sha256');

/* Initializes the blockchain. Generates the genesis block when run for the first time. */
const initializeChain = () => {
    let size = realm.objects('Block').length;
    if (size === 0)
        generateGenesisBlock();
};

/* Generate the genesis block. */
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
                fileHash: '0000000000000000000000000000000000000000000000000000000000000000',
                fragHash: '0000000000000000000000000000000000000000000000000000000000000000',
                fragLocation: 'Mars :D',
            }],
            merkleRoot: '0000000000000000000000000000000000000000000000000000000000000000',
            transactionHash: '0000000000000000000000000000000000000000000000000000000000000000',
            rsConfig: '4+2'
        }],
        timestamp: new Date(),
        merkleRoot: '0000000000000000000000000000000000000000000000000000000000000000',
        blockHash: '0000000000000000000000000000000000000000000000000000000000000000'
    };
    // GENESIS should be the same on all nodes
    // block.blockHash = generateBlockHash(block);
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

/* Store a block in the local-chain. returns a Promise. */
const storeBlock = (owner, file, transactions) => {
    // previous block is the latest block
    const prevBlock = getLatestBlock();
    const block = {
        index: prevBlock.index + 1,
        previousHash: prevBlock.blockHash,
        owner: owner,
        file: file,
        transactions: transactions,
        timestamp: new Date(),
        merkleRoot: generateTransactionMerkleRoot(transactions),
        blockHash: null
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

/* Generate Merkle root of -ALL- Transactions from Transaction Hash (transactionHash) */
const generateTransactionMerkleRoot = (transactions) => {
    const trLeaves = transactions.map(x => x.transactionHash);
    const trTree = new MerkleTree(trLeaves, SHA256);
    console.log('Generating the Merkle Root of Transactions..');
    trTree.print();
    return trTree.getRoot().toString('hex');
};

/* Generate Merkle root of -ALL- Reed Solomon Fragments from Fragment Hash (fragHash) */
const generateRSFragMerkleRoot = (fragments) => {
    const fragLeaves = fragments.map(x => x.fragHash);
    const fragTree = new MerkleTree(fragLeaves, SHA256);
    console.log('Generating the Merkle Root of Fragments..');
    fragTree.print();
    return fragTree.getRoot().toString('hex');
};

/* Generate the main Block Hash */
const generateBlockHash = (block) => {
    return SHA256(
        block.previousHash +
        block.owner.uuid +
        block.file.fileHash +
        block.timestamp.getTime() +
        block.merkleRoot
    ).toString();
};

/* Generate the Transaction Hash */
const generateTransactionHash = (transaction) => {
    return SHA256(
        transaction.index +
        transaction.encFragCount +
        transaction.encFragHash +
        transaction.fragHash +
        transaction.merkleRoot +
        transaction.rsConfig
    ).toString();
};

/* Generate the Reed Solomon Fragment Hash */
const generateRSFragmentHash = (fragment) => {
    return SHA256(
        fragment.index +
        fragment.RSfragCount +
        fragment.fileHash +
        fragment.fragLocation
    ).toString();
};

/* Creates a single Transaction Object from redundant fragment data */
const createTransaction = (fragments, index, encFragCount, fragHash, encFragHash, rsConfig) => {
    const transaction = {
        index: index,
        encFragCount: encFragCount,
        fragHash: fragHash,
        encFragHash: encFragHash,
        frags: fragments,
        merkleRoot: generateRSFragMerkleRoot(fragments),
        transactionHash: null,
        rsConfig: rsConfig
    };
    transaction.transactionHash = generateTransactionHash(transaction);
    return transaction;
};

/* Creates a single RSFragment Object from fragmented file data */
const createRSFragment = (index, rsFragCount, fileHash, fragLocation) => {
    const frag = {
        index: index,
        RSfragCount: rsFragCount,
        fileHash: fileHash,
        fragLocation: fragLocation,
        fragHash: null,
    };
    frag.fragHash = generateRSFragmentHash(frag);
    return frag;
};

/* Get a lazy loaded object mapping to the local chain. */
const getChain = () => {
    return realm.objects('Block').sorted('index', true);
};

/* Gets the latest (top) block */
const getLatestBlock = () => {
    try {
        let sortedChain = realm.objects('Block').sorted('index', true);
        return sortedChain[0];
    } catch (e) {
        console.log(e);
        return null;
    }
};

/* Find all Blocks in the local chain by user.uuid. Returns a promise */
const findBlocksByOwner = (owner) => {
    return new Promise((resolve => {
        let localChain = realm.objects('Block');
        let filteredBlocks = localChain.filtered('owner.uuid = "' + owner.uuid + '"');
        resolve(filteredBlocks);
    }))
};

/* Validate the Localchain. Returns a promise */
const validateLocalChain = () => {
    return new Promise(((resolve, reject) => {
        // get chain with the latest block on top
        let blockchain = realm.objects('Block').sorted('index', true);
        const chainLength = blockchain.length;
        console.log('Blockchain Length: ' + chainLength);
        let currentBlock, previousBlock, currentBlockHash, previousBlockHash;
        for (let i = 0; i < chainLength; i++) {
            console.log('Iteration: ' + (i + 1));
            if (blockchain[i].index === 0) {
                console.log('On genesis block now.\n└─Local chain integrity verified!\n');
                return resolve(true);
            }
            currentBlock = blockchain[i];
            currentBlockHash = generateBlockHash(currentBlock);

            previousBlock = blockchain[i + 1];
            previousBlockHash = generateBlockHash(previousBlock);

            console.log('(Current Block) index: ' + currentBlock.index + ', hash: ' + currentBlock.blockHash);
            console.log('(Previous Block) index: ' + previousBlock.index + ', hash: ' + previousBlock.blockHash);

            // step 1: validate current Block Hash
            process.stdout.write('Validating current block hash...');
            if (currentBlockHash !== currentBlock.blockHash) {
                console.log('\n└─Current block hash does not match generated hash!');
                return reject(false);
            }
            console.log('ok');

            // step 2: validate prev Block Hash
            process.stdout.write('Validating previous block hash...');
            if (previousBlockHash !== previousBlock.blockHash) {
                console.log('\n└─Previous block hash does not match generated hash!');
                return reject(false);
            }
            console.log('ok');

            // step 3: validate hash link
            process.stdout.write('Validating hash chain link...');
            if (currentBlock.previousHash !== previousBlock.blockHash) {
                console.log('\n└─Current block\'s previous hash does not match current block\'s hash!');
                return reject(false);
            }
            console.log('ok');

            console.log('---------------------------------------');
        }
    }));

};

/* Gets local chain version. Returns the chain length as an integer. */
const getLocalChainVersion = () => {
    return realm.objects('Block').length;
};

/* Good old exports */
module.exports = {
    initializeChain,
    storeBlock,
    getChain,
    getLatestBlock,
    generateTransactionMerkleRoot,
    createTransaction,
    findBlocksByOwner,
    validateLocalChain,
    createRSFragment,
    getLocalChainVersion
};