// 중복 지급을 막기 위한 체크 필요
// did를 저장해 두는지 하는 방법 등 필요

pragma solidity 0.8.9;

contract makeSurvey {
    
    address public owner;
    // 조사 업체

    struct survey {
        uint money; // pay 지불할 돈
        uint howMany;  // how many people can do it? 원하는 설문 수량
        uint howManyCount; //원하는 설문 수량만큼만 비용을 지불하기 위해
        address company; // issuer 의뢰업체
    }
    // 설문에 관한 정보를 모아둘 구조체

    mapping (uint => address[]) public surveyUser;
    // 중복수령을 막기위해 설문번호와 주소 맵핑

    survey[] public surveyData;
    // 구조체 배열

    uint public surveyNumber = 0;
    // 설문 번호
    
    event addSurvey(uint, uint, address, uint);
    // 설문번호, 설문 한번당 지불할 비용, 의뢰업체, 원하는 설문 수량 이벤트
    
    
    constructor () {
        owner = msg.sender;
    }
    
    function makeYourSurvey (uint _money, uint _howMany)payable public {
      require(msg.value == _money * _howMany);
      // 설문을 만들때 (설문한번당 지불할 비용 * 원하는 설문 수량)만큼의 wei 지불했는지 검증
        
      surveyData.push(survey(_money, _howMany, _howMany, msg.sender));
      // survey구조체에 정보 삽입
     
      emit addSurvey(surveyNumber, _money, msg.sender, _howMany);
      // 설문번호, 설문 한번당 지불할 비용, 의뢰업체, 원하는 설문 수량 이벤트로 전달

      surveyNumber++;
      // 다음 설문번호 자동 셋팅
    }

  

    function pay (uint _surveyNum) public{
        require(surveyData[_surveyNum].howManyCount > 0);
        // 의뢰업체가 원하는 수 만큼만 설문비용 지불하도록

        // for(uint i = 0; i <= surveyData[_surveyNum].howMany; i++){
        //     require(surveyUser[_surveyNum][i] != msg.sender);
        // }
        // 포문 돌리면 오류뜸

        // 중복 수령을 막기 위해 검증 필요 ex)did

        surveyUser[_surveyNum].push(msg.sender);
        // 중복체크위해 

        (bool success, ) = payable(msg.sender).call{value: surveyData[_surveyNum].money}("");
        require(success, "Failed to send Ether");
        // 이 함수를 실행한 사람에게 의뢰업체가 정해둔 만큼의 wei 전송

        surveyData[_surveyNum].howManyCount--;
        // 의뢰업체가 원하는 수 만큼만 설문비용 지불하도록
    }
}