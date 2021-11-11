pragma solidity 0.8.9;

contract survey {
    
    address owner;
    //  
    
    // 중복체크 위해 사용 설문 번호=>유저 did or account => bool
    mapping (uint => mapping(address => bool)) public surveyUser;

    // 이벤트 바로 캣치 해서 디비에 저장할꺼면 안해도 됨
    mapping (uint => address[]) public surveyCompleteList;
    mapping (uint => uint) public surveyCount;
    // 이벤트 바로 캣치 해서 디비에 저장할꺼면 안해도 됨

    event addUser(uint, address);

    constructor () {
        owner = msg.sender;
    }
    
   
    // 
    function recordSurvey (uint _num)public {
     require(surveyUser[_num][tx.origin] == false);
    //  중복체크
      
        surveyUser[_num][tx.origin] = true;

    // 이벤트 바로 캣치 해서 디비에 저장할꺼면 안해도 됨
        surveyCompleteList[_num].push(tx.origin);
        surveyCount[_num]++;
    // 이벤트 바로 캣치 해서 디비에 저장할꺼면 안해도 됨


        emit addUser(_num , tx.origin);
        // 디비저장        
    }
}