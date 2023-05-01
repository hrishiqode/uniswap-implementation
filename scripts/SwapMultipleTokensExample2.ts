import { ethers } from "hardhat";
const path = require("path");
const fs = require("fs");
async function main() {
  const signers = await ethers.getSigners();
  const ABI_WETH = JSON.parse(
    fs.readFileSync(
      path.resolve(
        __dirname,
        "../artifacts/contracts/IWrapper.sol/IWrapper.json"
      ),
      "utf-8"
    )
  ).abi;
  const ABI_ERC20 = JSON.parse(
    fs.readFileSync(
      path.resolve(
        __dirname,
        "../artifacts/@openzeppelin/contracts/token/ERC20/IERC20.sol/IERC20.json"
      ),
      "utf-8"
    )
  ).abi;
  const WETH = new ethers.Contract(
    "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    ABI_WETH,
    signers[0]
  );
  const USDT = new ethers.Contract(
    "0xdAC17F958D2ee523a2206206994597C13D831ec7",
    ABI_ERC20,
    signers[0]
  );
  const swapTokens = await (
    await ethers.getContractFactory("SwapTokens")
  ).deploy(
    "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    "0xdAC17F958D2ee523a2206206994597C13D831ec7",
    "0xE592427A0AEce92De3Edee1F18E0157C05861564"
  );
  await WETH.deposit({ value: ethers.utils.parseEther("1") });
  await WETH.approve(swapTokens.address, 1000000000000);
  console.log("Before Swap:");
  console.log("  WETH:", await WETH.balanceOf(signers[0].address));
  console.log("  USDT:", await USDT.balanceOf(signers[0].address));
  await swapTokens.multiSwapAmountOut(
    18,
    1000000000000,
    "0x514910771AF9Ca656af840dff83E8264EcF986CA"
  );
  console.log("After Swap:");
  console.log("  WETH:", await WETH.balanceOf(signers[0].address));
  console.log("  USDT:", await USDT.balanceOf(signers[0].address));
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
