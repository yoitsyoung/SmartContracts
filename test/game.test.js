const assert = require('assert');
const ganache = require('ganache-cli');

const {interface , bytecode} = require('../compile');

//Whenever we are working with a constructor function, we capitalize the names
const Web3 = require('web3');
//actual instance of web3. Need to select provider depending on what network you're connecting to 
const web3 = new Web3(ganache.provider())

// Some functions are organizational in nature... see describe() in mocha framework

let accounts;
let referrerContract;
beforeEach(async () => {
    accounts = await web3.eth.getAccounts();
    console.log(accounts);
        referrerContract = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({
            data: bytecode,
            //constructor arguments here
            arguments: ['Yooooo!']
        })
        .send({from: accounts[0], gas: '1000000'})
        
});

describe('mygame', () => {
    it('Is deployed', async () => {
        var referrerContractAddress = await referrerContract.options.address;
        console.log(referrerContractAddress)
        console.log(referrerContract);
    });

    it('Has functions' , () => {
        console.log(referrerContract.methods);
    })

    it('Can set storage value', async () =>{
        //gets back tx hash
        let hash = await referrerContract.methods.setStorage(4).send({from: accounts[0]});
        console.log(hash);      
    });
    it('sets the correct storage value', async () => {
        let storage = await referrerContract.methods.getStorage().call({from: accounts[0]});
        console.log(storage)
        });

    
});



