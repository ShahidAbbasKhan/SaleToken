// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.4;
import "./IERC20.sol";

contract SaleToken{
    address Owner;
    uint constant public firstPhaseFee = 0.005 ether; 
    uint constant public secondPhaseFee = 0.01 ether;
    uint constant public thirdPhaseFee = 0.1 ether;

     IERC20 ierc20;
    uint startTime;
    constructor(address _token){
        Owner =msg.sender;
        startTime = block.timestamp;
        ierc20 = IERC20(_token);
    }
    event _buyToken(uint purchaseTime, address purchaser, uint amountSend,uint tokenReceived,uint amountReturned);
    modifier onlyOwner{ 
        require(msg.sender == Owner,"only owner can access this function");
        _;
    }
     
    function buyToken()payable public { 
        uint noOfTokens;
        uint reminder;
       
       if(block.timestamp <= startTime + 2592000 seconds){ 
            require(msg.value >= firstPhaseFee,"Your amount is less than token price"); 
            noOfTokens = msg.value/ firstPhaseFee;
             reminder =msg.value - (noOfTokens*firstPhaseFee);

            ierc20.mintTo(msg.sender,noOfTokens);  
            (bool success,)=msg.sender.call{value:reminder}("");
            require(success,"Error");


       }else if(block.timestamp <= startTime + 5184000 seconds){ 
            require(msg.value >= secondPhaseFee,"Your amount is less than token price");
            noOfTokens = msg.value/ secondPhaseFee;
             reminder =msg.value - (noOfTokens*secondPhaseFee);
            ierc20.mintTo(msg.sender,noOfTokens);
            (bool success,)=msg.sender.call{value:reminder}("");
            require(success,"Error");


       }else{ 
            require(msg.value >= thirdPhaseFee,"Your amount is less than token price");
            noOfTokens = msg.value/ thirdPhaseFee;
            ierc20.mintTo(msg.sender,noOfTokens);
             reminder =msg.value - (noOfTokens*thirdPhaseFee);
            (bool success,)=msg.sender.call{value:reminder}("");
            require(success,"Error");
       }
  
     emit _buyToken(block.timestamp, msg.sender, msg.value,noOfTokens,reminder);
      
    }


}