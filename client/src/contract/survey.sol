pragma solidity 0.8.9;

contract survey {
    
    address owner;
    mapping  (uint => address) surveyUser;
    event addUser(uint, address);
    
    
    constructor () {
        owner = msg.sender;
    }
    
    function who (uint _num, address _user )public {
        surveyUser[_num] = _user;     
        emit addUser(_num , _user);
        // 디비저장
    }
    
}