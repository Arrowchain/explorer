import { BTCP2P } from 'btcp2p'

const NODE_ENV = process.env.NODE_ENV;
const PORT = process.env.PORT;

const arwOptions = {
  name: 'arrow',
  host: 'localhost',
  port: 7654,
  startServer: false,
  relayTransactions: false,
  persist: false,
  fetchMempool: false,
  logLevel: 1,
  network: {
    protocol: 'zcash',
    magic: '27a2261c',
    genesisTarget: '1f07ffff',
    genesisHash: '00028de97cd7b8e1b90918186387c0e6b9f65ac433bdde036aa93e184593da4e',
    protocolVersion: 170007,
    pubKeyVersion: 0,
    scriptVersion: 5
  },
  api: true,
  frontEndPath: __dirname + '/dist',
  dbPath: __dirname + '/data',
  apiPort: 8080
};

if (NODE_ENV === 'dev') {
  arwOptions.frontEndPath = undefined;
}
if (PORT !== undefined) {
  arwOptions.apiPort = parseInt(PORT, 10);
}

const  btcp2p: BTCP2P = new BTCP2P(arwOptions);

btcp2p.client.on('getheaders', (e: any) => {
  btcp2p.client.events.clearGetHeaders();
  console.log('requesting:', e.parsed.hashes[1]);
});

btcp2p.client.on('headers', (e: any) => {
  console.log('headers')
  console.log(e)
});

btcp2p.client.on('disconnect', (e: any) => {

});

btcp2p.client.on('block', (e: any) => {

});

btcp2p.client.on('connect', (e: any) => {
  console.log('** connected!')
});
