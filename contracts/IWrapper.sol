// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.7.5;
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";


interface IWrapper is IERC20{
    event Deposit(address indexed dst, uint amount);
    event Withdrawal(address indexed src, uint amount);

    function deposit() external payable;

    function withdraw(uint amount) external;
}