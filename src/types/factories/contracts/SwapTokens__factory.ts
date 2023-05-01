/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  SwapTokens,
  SwapTokensInterface,
} from "../../contracts/SwapTokens";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "token0_",
        type: "address",
      },
      {
        internalType: "address",
        name: "token1_",
        type: "address",
      },
      {
        internalType: "address",
        name: "swapRouter_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "fee",
    outputs: [
      {
        internalType: "uint24",
        name: "",
        type: "uint24",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount0",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "intermediateToken",
        type: "address",
      },
    ],
    name: "multiSwapAmountIn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount1",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxAmount0",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "intermediateToken",
        type: "address",
      },
    ],
    name: "multiSwapAmountOut",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount0",
        type: "uint256",
      },
    ],
    name: "swap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "swapRouter",
    outputs: [
      {
        internalType: "contract ISwapRouter",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "token0",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "token1",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60e060405234801561001057600080fd5b50604051610f81380380610f8183398101604081905261002f91610072565b6001600160601b0319606093841b811660a05291831b821660c05290911b166080526100b4565b80516001600160a01b038116811461006d57600080fd5b919050565b600080600060608486031215610086578283fd5b61008f84610056565b925061009d60208501610056565b91506100ab60408501610056565b90509250925092565b60805160601c60a05160601c60c05160601c610e2f610152600039806101e0528061043852806105b852806106c552508061010252806101295280610155528061020652806102de528061032a528061035e528061038a5280610412528061050c5280610538528061059352508061017652806101b352806102ff52806103ab52806103e55280610559528061061452806106a15250610e2f6000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c806394b918de1161005b57806394b918de146100c8578063c31c9c07146100db578063d21220a7146100e3578063ddca3f43146100eb5761007d565b80630dfe1681146100825780632bfed7eb146100a05780637cf1ebd8146100b5575b600080fd5b61008a610100565b6040516100979190610ccd565b60405180910390f35b6100b36100ae366004610b9c565b610124565b005b6100b36100c3366004610b71565b610359565b6100b36100d6366004610b41565b610507565b61008a61069f565b61008a6106c3565b6100f36106e7565b6040516100979190610d63565b7f000000000000000000000000000000000000000000000000000000000000000081565b6101507f00000000000000000000000000000000000000000000000000000000000000003330856106ed565b61019b7f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000084610747565b6040805160a081019091526000906001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063f28c0498908061022e7f0000000000000000000000000000000000000000000000000000000000000000610bb888817f000000000000000000000000000000000000000000000000000000000000000060c08701610c63565b6040516020818303038152906040528152602001336001600160a01b03168152602001428152602001878152602001868152506040518263ffffffff1660e01b815260040161027d9190610ce1565b602060405180830381600087803b15801561029757600080fd5b505af11580156102ab573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102cf9190610b59565b905082811015610353576103257f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006000610747565b6103537f000000000000000000000000000000000000000000000000000000000000000030338487036106ed565b50505050565b6103857f00000000000000000000000000000000000000000000000000000000000000003330856106ed565b6103d07f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000084610747565b6040805160a081019091526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063c04b8d5990806104607f0000000000000000000000000000000000000000000000000000000000000000610bb887817f000000000000000000000000000000000000000000000000000000000000000060c08701610c63565b6040516020818303038152906040528152602001336001600160a01b0316815260200142815260200185815260200160008152506040518263ffffffff1660e01b81526004016104b09190610ce1565b602060405180830381600087803b1580156104ca57600080fd5b505af11580156104de573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105029190610b59565b505050565b6105337f00000000000000000000000000000000000000000000000000000000000000003330846106ed565b61057e7f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000083610747565b60408051610100810182526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811682527f000000000000000000000000000000000000000000000000000000000000000081166020830152610bb88284015233606083015242608083015260a08201849052600060c0830181905260e0830152915163414bf38960e01b81527f00000000000000000000000000000000000000000000000000000000000000009092169163414bf3899161064991600401610cf4565b602060405180830381600087803b15801561066357600080fd5b505af1158015610677573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061069b9190610b59565b5050565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b610bb881565b604080516001600160a01b0380861660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b03166323b872dd60e01b179052610353908590610856565b8015806107cd575060408051636eb1769f60e11b81523060048201526001600160a01b03848116602483015291519185169163dd62ed3e91604480820192602092909190829003018186803b15801561079f57600080fd5b505afa1580156107b3573d6000803e3d6000fd5b505050506040513d60208110156107c957600080fd5b5051155b6108085760405162461bcd60e51b8152600401808060200182810382526036815260200180610dc46036913960400191505060405180910390fd5b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b1790526105029084905b60606108ab826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166109079092919063ffffffff16565b805190915015610502578080602001905160208110156108ca57600080fd5b50516105025760405162461bcd60e51b815260040180806020018281038252602a815260200180610d9a602a913960400191505060405180910390fd5b60606109168484600085610920565b90505b9392505050565b6060824710156109615760405162461bcd60e51b8152600401808060200182810382526026815260200180610d746026913960400191505060405180910390fd5b61096a85610a7c565b6109bb576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b60006060866001600160a01b031685876040518082805190602001908083835b602083106109fa5780518252601f1990920191602091820191016109db565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114610a5c576040519150601f19603f3d011682016040523d82523d6000602084013e610a61565b606091505b5091509150610a71828286610a86565b979650505050505050565b803b15155b919050565b60608315610a95575081610919565b825115610aa55782518084602001fd5b8160405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610aef578181015183820152602001610ad7565b50505050905090810190601f168015610b1c5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b80356001600160a01b0381168114610a8157600080fd5b600060208284031215610b52578081fd5b5035919050565b600060208284031215610b6a578081fd5b5051919050565b60008060408385031215610b83578081fd5b82359150610b9360208401610b2a565b90509250929050565b600080600060608486031215610bb0578081fd5b8335925060208401359150610bc760408501610b2a565b90509250925092565b6001600160a01b03169052565b6000815160a0845280518060a0860152825b81811015610c0c57602081840181015160c0888401015201610bef565b81811115610c1d578360c083880101525b5060208401519150610c326020860183610bd0565b6040848101519086015260608085015190860152608093840151938501939093525050601f01601f19160160c00190565b6bffffffffffffffffffffffff19606096871b811682527fffffff000000000000000000000000000000000000000000000000000000000060e896871b8116601484015294871b811660178301529290941b909216602b840152921b909116602e82015260420190565b6001600160a01b0391909116815260200190565b6000602082526109196020830184610bdd565b6000610100820190506001600160a01b0380845116835280602085015116602084015262ffffff60408501511660408401528060608501511660608401526080840151608084015260a084015160a084015260c084015160c08401528060e08501511660e08401525092915050565b62ffffff9190911681526020019056fe416464726573733a20696e73756666696369656e742062616c616e636520666f722063616c6c5361666545524332303a204552433230206f7065726174696f6e20646964206e6f7420737563636565645361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f20746f206e6f6e2d7a65726f20616c6c6f77616e6365a2646970667358221220fbed52e0e88f64f26f3d89139760723fb68c604284ddeeafadaa4fb8fdce177e64736f6c63430007050033";

type SwapTokensConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SwapTokensConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SwapTokens__factory extends ContractFactory {
  constructor(...args: SwapTokensConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    token0_: PromiseOrValue<string>,
    token1_: PromiseOrValue<string>,
    swapRouter_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<SwapTokens> {
    return super.deploy(
      token0_,
      token1_,
      swapRouter_,
      overrides || {}
    ) as Promise<SwapTokens>;
  }
  override getDeployTransaction(
    token0_: PromiseOrValue<string>,
    token1_: PromiseOrValue<string>,
    swapRouter_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      token0_,
      token1_,
      swapRouter_,
      overrides || {}
    );
  }
  override attach(address: string): SwapTokens {
    return super.attach(address) as SwapTokens;
  }
  override connect(signer: Signer): SwapTokens__factory {
    return super.connect(signer) as SwapTokens__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SwapTokensInterface {
    return new utils.Interface(_abi) as SwapTokensInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SwapTokens {
    return new Contract(address, _abi, signerOrProvider) as SwapTokens;
  }
}