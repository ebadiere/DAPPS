pragma solidity ^0.4.4;
contract PiggyBank{
	uint public balance;
	uint threshold;

	function PiggyBank(){
		balance = 1000;
		threshold = 1500;
	}

   	function deposit(uint amount){
    	balance += amount;
    }	

    function withdrawal(uint amount) returns (uint){
    	if (balance >= threshold){
    		balance = balance - amount;
    		return amount;
    	}
    	return 0;
    }
}