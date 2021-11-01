pragma solidity 0.8.9;

contract issuer {
    
    address DID;
    string publicKey;
    string privateKey;
    string encryptPublickey;
    mapping (address => bool) vcList;
    
    constructor (string memory _publicKey, string memory _privateKey, string memory _encryptPublickey)  {
        DID = msg.sender;
        publicKey = _publicKey;
        privateKey = _privateKey;
        encryptPublickey = _encryptPublickey;
    }
    
    function makeVC() public {
        
    }
}