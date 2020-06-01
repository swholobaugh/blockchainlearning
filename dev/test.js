const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();


bitcoin.createNewBlock(2389, 'OIUOEREDHJHJD', '78s97d4x6dsf');
bitcoin.createNewBlock(111, 'NJNASDNF09ASDF', '78s97d4x6ds8');
bitcoin.createNewBlock(14223, 'DJ283SX957G', '86s45hs32x9');

console.log(bitcoin);