const Blockchain = require('./blockchain');
const bitcoin = new Blockchain();

console.log(bitcoin);

/*
const previousBlockHash = 'OINAISDFN09N09ASDNF90N90ASNDF';

const currentBlockData = [
    {
        amount: 101,
        sender: 'N90ANS90N90ANSDFN',
        recipient: '90NA90SNDF90ANSDF09N',
    },
    {
        amount: 30,
        sender: '09ANS09DFNA8SDNF',
        recipient: 'UIANSIUDFUIABSDUIFB',
    },
    {
        amount: 200,
        sender: '89ANS89DFN98ASNDF89',
        recipient: 'AUSDF89ANSD9FNASD',
    },
];

console.log(bitcoin.proofOfWork(previousBlockHash, currentBlockData));
*/