const path = require("path");
const envPath = path.join(__dirname, "./.env");
const dotenv = require("dotenv");

const envCheck = dotenv.config();
if (envCheck.error) {
  throw envCheck.error;
}

dotenv.config({ path: envPath });

const HDWalletProvider = require("@truffle/hdwallet-provider");

module.exports = {
  // You can also follow this format for other networks;
  // see <http://truffleframework.com/docs/advanced/configuration>
  // for more details on how to specify configuration options!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*", // Match any network id
      gas: 6021975,
    },
  },
  rinkeby: {
    provider: () =>
      new HDWalletProvider(
        process.env.PRV_KEYS,
        process.env.INFURA_URL_RINKEBY
      ),
    network_id: 4,
    gas: 10000000,
    timeoutBlocks: 200,
    networkCheckTimeout: 1000000,
    skipDryRun: true,
    websockets: true,
  },
  compilers: {
    solc: {
      version: "0.8.0",
    },
  },
  db: {
    enabled: false,
  },
  api_keys: {
    etherscan: process.env.ETHERSCAN_API_KEY_RINKEBY,
  },
};
