pragma solidity 0.8.9;

contract survey {
    
    address owner;
    // address verifier; 
    mapping  (uint => string) surveyUser;
    event addUser(uint, string);
    
    
    constructor () {
        owner = msg.sender;
    }
    
    function who  (uint _num, string memory _user )  public {
        surveyUser[_num] = _user;
        emit addUser(_num , _user);
        // 디비저장
    }    
}