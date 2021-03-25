const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const mnemonicPhrase = 'sound talent rich seat thunder arm inherit shed warm leave adult similar'
const {interface, bytecode} = require('./compile');

let provider = new HDWalletProvider({
    mnemonic:{
        phrase: mnemonicPhrase
    },
    providerOrUrl:"https://ropsten.infura.io/v3/c90431281d444e9e9dc61eaea3181dd1"
})

let web3 = new Web3(provider);

let deploy = async () => {
    try{
    const accounts = await web3.eth.getAccounts();
    console.log(accounts);
    const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({data: bytecode, arguments: ['Ropsten, hi.']})
    .send({gas:'1000000', gasPrice:'80', from: accounts[0]});
    console.log(result);
    }
    catch (error){
        console.log(error);
    }

};

deploy();

