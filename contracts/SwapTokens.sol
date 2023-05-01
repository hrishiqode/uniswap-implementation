// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.7.5;
pragma abicoder v2;
import "@uniswap/v3-periphery/contracts/interfaces/ISwapRouter.sol";
import "@openzeppelin/contracts/token/ERC20/SafeERC20.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract SwapTokens {
    ISwapRouter public immutable swapRouter;
    address public immutable token0;
    address public immutable token1;
    uint24 public constant fee = 3000;

    constructor(address token0_, address token1_, address swapRouter_) {
        token0 = token0_;
        token1 = token1_;
        swapRouter = ISwapRouter(swapRouter_);
    }

    function swap(uint256 amount0) external {
        SafeERC20.safeTransferFrom(
            IERC20(token0),
            msg.sender,
            address(this),
            amount0
        );
        SafeERC20.safeApprove(IERC20(token0), address(swapRouter), amount0);
        swapRouter.exactInputSingle(
            ISwapRouter.ExactInputSingleParams({
                tokenIn: token0,
                tokenOut: token1,
                fee: fee,
                recipient: msg.sender,
                deadline: block.timestamp,
                amountIn: amount0,
                amountOutMinimum: 0,
                sqrtPriceLimitX96: 0
            })
        );
    }

    function multiSwapAmountIn(uint256 amount0, address intermediateToken) external {
        SafeERC20.safeTransferFrom(
            IERC20(token0),
            msg.sender,
            address(this),
            amount0
        );
        SafeERC20.safeApprove(IERC20(token0), address(swapRouter), amount0);
        swapRouter.exactInput(
            ISwapRouter.ExactInputParams({
                path: abi.encodePacked(token0, fee, intermediateToken, fee, token1),
                recipient: msg.sender,
                deadline: block.timestamp,
                amountIn: amount0,
                amountOutMinimum: 0
            })
        );
    }

    function multiSwapAmountOut(uint256 amount1, uint256 maxAmount0, address intermediateToken) external {
        SafeERC20.safeTransferFrom(
            IERC20(token0),
            msg.sender,
            address(this),
            maxAmount0
        );
        SafeERC20.safeApprove(IERC20(token0), address(swapRouter), maxAmount0);
        uint256 amountIn0 = swapRouter.exactOutput(
            ISwapRouter.ExactOutputParams({
                path: abi.encodePacked(token1, fee, intermediateToken, fee, token0),
                recipient: msg.sender,
                deadline: block.timestamp,
                amountOut: amount1,
                amountInMaximum: maxAmount0
            })
        );
        if (amountIn0 < maxAmount0) {
            SafeERC20.safeApprove(IERC20(token0), address(swapRouter), 0);
            SafeERC20.safeTransferFrom(IERC20(token0), address(this), msg.sender, maxAmount0 - amountIn0);
        }
    }
}
