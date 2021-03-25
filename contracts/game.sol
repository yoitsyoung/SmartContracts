pragma solidity 0.4.25;

contract Referrer{
    
    uint Storage = 3;
    address Owner;
    string contractMessage;
    constructor(string initialMessage) public {
        Owner = msg.sender;
        contractMessage = initialMessage;
    }

    function setStorage(uint _number) public {
        require(msg.sender == Owner, 'Only Owner Can set storage');
        Storage = _number;
        
    }

    function getStorage() public view returns (uint){
        return(Storage);
    }

}