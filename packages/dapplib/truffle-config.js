require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess gloom symptom spot warrior ridge remind concert gesture dry foam spread'; 
let testAccounts = [
"0x8ef96b4d7f3d66d5ed93a4112912dcce350b2657790489b4f994b4ce681e078e",
"0x5fce2a3bd3b1942213e825dd4120db085f5aba8c5a6065562c8f7e27a4cd29f4",
"0xa6c95a558622ed2b3ecba9e88f75e4c2c8dc16d9f9b614d9e40f99a1116fd212",
"0x8a947024970989434f65593dfbcd2272fd16393681b5cbcca4fe88d5b70134d2",
"0x20a5993a376c7ce0fc9dff93c2f06711e9cc26676b964e72c306f2bba0172574",
"0x4ab2534119a77b2fb54032b122a37dbae980a9f21435d2582f76daec15bfd0b8",
"0x77ac4f5c516403ae045012d02e9ff047c675ba12e08fe677371450456c1d7c18",
"0x0212fbc8f879035c3b60d16fb2696cb376bf538f69c639089ba7eda5c667a032",
"0x8e4a852ef4820a4d98439ca3fc7908dccc39477b736267ed008f431eaaf47e10",
"0xb9bd90a0e543351dcacfbaa359b81768eace9338b7c6c05a179e01b8543c645e"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

