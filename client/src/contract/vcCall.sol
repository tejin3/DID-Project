pragma solidity 0.8.9;

contract vcCallRecord {
    
    address owner;

    // 유저 DID OR account 에게 요청한 vc 리스트    
    mapping  (address => string[]) public vcCallList;

    // 유저 DID OR account 에게 vc 를 요청한 시간 리스트
    mapping (address => uint[]) public vcCallDate;
       
    event vcCallApprovals (address,string,uint);


    constructor () {
        owner = msg.sender;
    }

    //
    function vcCall (string memory _data) public {
    //  require(msg.sender == owner);
   
     vcCallList[tx.origin].push(_data);
    
    //  vcCallList[tx.origin].push(_vc);
    //  vcCallList[tx.origin][vcCallCount[tx.origin]] = vc;
     vcCallDate[tx.origin].push(block.timestamp);
     emit vcCallApprovals( tx.origin, _data, block.timestamp);
        // 디비저장
    }
    
    function callData(address _user) public view returns(string[] memory, uint[] memory) {
        return (vcCallList[_user] , vcCallDate[_user]);
    }
}