pragma solidity ^0.4.4;
contract HelloWorld{
    uint balance;
    
    //contructor
    // runs once upon contract creation
    function HelloWorld(){
        balance = 1000;
        
    }

    function deposit(){
    	balance += 1;
    }
}