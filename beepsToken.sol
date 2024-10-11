// SPDX-License-Identifier: MIT
pragma solidity 0.8.28;

contract MyToken {

    // Public variables 
    string public tokenName = "Bea's Token"; 
    string public tokenAbbreviation = "MTK"; 
    uint public totalSupply = 0; 

    // Mapping variable 
    mapping(address => uint) public balances;

    // Mint function 
    function mint(address _addressTo, uint _value) public {
        require(_addressTo != address(0), "Invalid address"); 
        totalSupply += _value; 
        balances[_addressTo] += _value; 
    }

    // Burn function
    function burn(address _addressFrom, uint _value) public {
        require(_addressFrom != address(0), "Invalid address"); 
        require(balances[_addressFrom] >= _value, "Insufficient balance"); 
        balances[_addressFrom] -= _value; 
        totalSupply -= _value; 
    }
}
