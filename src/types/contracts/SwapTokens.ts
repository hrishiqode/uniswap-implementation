/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export interface SwapTokensInterface extends utils.Interface {
  functions: {
    "fee()": FunctionFragment;
    "multiSwapAmountIn(uint256,address)": FunctionFragment;
    "multiSwapAmountOut(uint256,uint256,address)": FunctionFragment;
    "swap(uint256)": FunctionFragment;
    "swapRouter()": FunctionFragment;
    "token0()": FunctionFragment;
    "token1()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "fee"
      | "multiSwapAmountIn"
      | "multiSwapAmountOut"
      | "swap"
      | "swapRouter"
      | "token0"
      | "token1"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "fee", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "multiSwapAmountIn",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "multiSwapAmountOut",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "swap",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "swapRouter",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "token0", values?: undefined): string;
  encodeFunctionData(functionFragment: "token1", values?: undefined): string;

  decodeFunctionResult(functionFragment: "fee", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "multiSwapAmountIn",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "multiSwapAmountOut",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "swap", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "swapRouter", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "token0", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "token1", data: BytesLike): Result;

  events: {};
}

export interface SwapTokens extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SwapTokensInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    fee(overrides?: CallOverrides): Promise<[number]>;

    multiSwapAmountIn(
      amount0: PromiseOrValue<BigNumberish>,
      intermediateToken: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    multiSwapAmountOut(
      amount1: PromiseOrValue<BigNumberish>,
      maxAmount0: PromiseOrValue<BigNumberish>,
      intermediateToken: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    swap(
      amount0: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    swapRouter(overrides?: CallOverrides): Promise<[string]>;

    token0(overrides?: CallOverrides): Promise<[string]>;

    token1(overrides?: CallOverrides): Promise<[string]>;
  };

  fee(overrides?: CallOverrides): Promise<number>;

  multiSwapAmountIn(
    amount0: PromiseOrValue<BigNumberish>,
    intermediateToken: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  multiSwapAmountOut(
    amount1: PromiseOrValue<BigNumberish>,
    maxAmount0: PromiseOrValue<BigNumberish>,
    intermediateToken: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  swap(
    amount0: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  swapRouter(overrides?: CallOverrides): Promise<string>;

  token0(overrides?: CallOverrides): Promise<string>;

  token1(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    fee(overrides?: CallOverrides): Promise<number>;

    multiSwapAmountIn(
      amount0: PromiseOrValue<BigNumberish>,
      intermediateToken: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    multiSwapAmountOut(
      amount1: PromiseOrValue<BigNumberish>,
      maxAmount0: PromiseOrValue<BigNumberish>,
      intermediateToken: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    swap(
      amount0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    swapRouter(overrides?: CallOverrides): Promise<string>;

    token0(overrides?: CallOverrides): Promise<string>;

    token1(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    fee(overrides?: CallOverrides): Promise<BigNumber>;

    multiSwapAmountIn(
      amount0: PromiseOrValue<BigNumberish>,
      intermediateToken: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    multiSwapAmountOut(
      amount1: PromiseOrValue<BigNumberish>,
      maxAmount0: PromiseOrValue<BigNumberish>,
      intermediateToken: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    swap(
      amount0: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    swapRouter(overrides?: CallOverrides): Promise<BigNumber>;

    token0(overrides?: CallOverrides): Promise<BigNumber>;

    token1(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    fee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    multiSwapAmountIn(
      amount0: PromiseOrValue<BigNumberish>,
      intermediateToken: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    multiSwapAmountOut(
      amount1: PromiseOrValue<BigNumberish>,
      maxAmount0: PromiseOrValue<BigNumberish>,
      intermediateToken: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    swap(
      amount0: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    swapRouter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    token0(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    token1(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
