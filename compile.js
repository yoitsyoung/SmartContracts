const path = require('path');
const fs = require('fs');
const solc = require('solc');
// YOU NEED PATH to ensure that this works on both windows and Unix based systems

const gamePath = path.resolve(__dirname, 'contracts', 'game.sol');
const source = fs.readFileSync(gamePath, 'utf-8');

module.exports = solc.compile(source, 1).contracts[":Referrer"];