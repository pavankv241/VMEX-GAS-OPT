/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface AaveProtocolDataProviderInterface extends ethers.utils.Interface {
  functions: {
    "ADDRESSES_PROVIDER()": FunctionFragment;
    "getAllATokens(uint64)": FunctionFragment;
    "getAllReservesTokens(uint64)": FunctionFragment;
    "getReserveConfigurationData(address,uint64)": FunctionFragment;
    "getReserveData(address,uint64)": FunctionFragment;
    "getReserveTokensAddresses(address,uint64)": FunctionFragment;
    "getUserReserveData(address,uint64,address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "ADDRESSES_PROVIDER",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getAllATokens",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getAllReservesTokens",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getReserveConfigurationData",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getReserveData",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getReserveTokensAddresses",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getUserReserveData",
    values: [string, BigNumberish, string]
  ): string;

  decodeFunctionResult(
    functionFragment: "ADDRESSES_PROVIDER",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAllATokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAllReservesTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getReserveConfigurationData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getReserveData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getReserveTokensAddresses",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUserReserveData",
    data: BytesLike
  ): Result;

  events: {};
}

export class AaveProtocolDataProvider extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: AaveProtocolDataProviderInterface;

  functions: {
    ADDRESSES_PROVIDER(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "ADDRESSES_PROVIDER()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    getAllATokens(
      trancheId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: { symbol: string; tokenAddress: string; 0: string; 1: string }[];
    }>;

    "getAllATokens(uint64)"(
      trancheId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: { symbol: string; tokenAddress: string; 0: string; 1: string }[];
    }>;

    getAllReservesTokens(
      trancheId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: { symbol: string; tokenAddress: string; 0: string; 1: string }[];
    }>;

    "getAllReservesTokens(uint64)"(
      trancheId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: { symbol: string; tokenAddress: string; 0: string; 1: string }[];
    }>;

    getReserveConfigurationData(
      asset: string,
      trancheId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      decimals: BigNumber;
      ltv: BigNumber;
      liquidationThreshold: BigNumber;
      liquidationBonus: BigNumber;
      reserveFactor: BigNumber;
      usageAsCollateralEnabled: boolean;
      borrowingEnabled: boolean;
      stableBorrowRateEnabled: boolean;
      isActive: boolean;
      isFrozen: boolean;
      0: BigNumber;
      1: BigNumber;
      2: BigNumber;
      3: BigNumber;
      4: BigNumber;
      5: boolean;
      6: boolean;
      7: boolean;
      8: boolean;
      9: boolean;
    }>;

    "getReserveConfigurationData(address,uint64)"(
      asset: string,
      trancheId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      decimals: BigNumber;
      ltv: BigNumber;
      liquidationThreshold: BigNumber;
      liquidationBonus: BigNumber;
      reserveFactor: BigNumber;
      usageAsCollateralEnabled: boolean;
      borrowingEnabled: boolean;
      stableBorrowRateEnabled: boolean;
      isActive: boolean;
      isFrozen: boolean;
      0: BigNumber;
      1: BigNumber;
      2: BigNumber;
      3: BigNumber;
      4: BigNumber;
      5: boolean;
      6: boolean;
      7: boolean;
      8: boolean;
      9: boolean;
    }>;

    getReserveData(
      asset: string,
      trancheId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      availableLiquidity: BigNumber;
      totalStableDebt: BigNumber;
      totalVariableDebt: BigNumber;
      liquidityRate: BigNumber;
      variableBorrowRate: BigNumber;
      stableBorrowRate: BigNumber;
      averageStableBorrowRate: BigNumber;
      liquidityIndex: BigNumber;
      variableBorrowIndex: BigNumber;
      lastUpdateTimestamp: number;
      0: BigNumber;
      1: BigNumber;
      2: BigNumber;
      3: BigNumber;
      4: BigNumber;
      5: BigNumber;
      6: BigNumber;
      7: BigNumber;
      8: BigNumber;
      9: number;
    }>;

    "getReserveData(address,uint64)"(
      asset: string,
      trancheId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      availableLiquidity: BigNumber;
      totalStableDebt: BigNumber;
      totalVariableDebt: BigNumber;
      liquidityRate: BigNumber;
      variableBorrowRate: BigNumber;
      stableBorrowRate: BigNumber;
      averageStableBorrowRate: BigNumber;
      liquidityIndex: BigNumber;
      variableBorrowIndex: BigNumber;
      lastUpdateTimestamp: number;
      0: BigNumber;
      1: BigNumber;
      2: BigNumber;
      3: BigNumber;
      4: BigNumber;
      5: BigNumber;
      6: BigNumber;
      7: BigNumber;
      8: BigNumber;
      9: number;
    }>;

    getReserveTokensAddresses(
      asset: string,
      trancheId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      aTokenAddress: string;
      stableDebtTokenAddress: string;
      variableDebtTokenAddress: string;
      0: string;
      1: string;
      2: string;
    }>;

    "getReserveTokensAddresses(address,uint64)"(
      asset: string,
      trancheId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      aTokenAddress: string;
      stableDebtTokenAddress: string;
      variableDebtTokenAddress: string;
      0: string;
      1: string;
      2: string;
    }>;

    getUserReserveData(
      asset: string,
      trancheId: BigNumberish,
      user: string,
      overrides?: CallOverrides
    ): Promise<{
      currentATokenBalance: BigNumber;
      currentStableDebt: BigNumber;
      currentVariableDebt: BigNumber;
      principalStableDebt: BigNumber;
      scaledVariableDebt: BigNumber;
      stableBorrowRate: BigNumber;
      liquidityRate: BigNumber;
      stableRateLastUpdated: number;
      usageAsCollateralEnabled: boolean;
      0: BigNumber;
      1: BigNumber;
      2: BigNumber;
      3: BigNumber;
      4: BigNumber;
      5: BigNumber;
      6: BigNumber;
      7: number;
      8: boolean;
    }>;

    "getUserReserveData(address,uint64,address)"(
      asset: string,
      trancheId: BigNumberish,
      user: string,
      overrides?: CallOverrides
    ): Promise<{
      currentATokenBalance: BigNumber;
      currentStableDebt: BigNumber;
      currentVariableDebt: BigNumber;
      principalStableDebt: BigNumber;
      scaledVariableDebt: BigNumber;
      stableBorrowRate: BigNumber;
      liquidityRate: BigNumber;
      stableRateLastUpdated: number;
      usageAsCollateralEnabled: boolean;
      0: BigNumber;
      1: BigNumber;
      2: BigNumber;
      3: BigNumber;
      4: BigNumber;
      5: BigNumber;
      6: BigNumber;
      7: number;
      8: boolean;
    }>;
  };

  ADDRESSES_PROVIDER(overrides?: CallOverrides): Promise<string>;

  "ADDRESSES_PROVIDER()"(overrides?: CallOverrides): Promise<string>;

  getAllATokens(
    trancheId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<{ symbol: string; tokenAddress: string; 0: string; 1: string }[]>;

  "getAllATokens(uint64)"(
    trancheId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<{ symbol: string; tokenAddress: string; 0: string; 1: string }[]>;

  getAllReservesTokens(
    trancheId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<{ symbol: string; tokenAddress: string; 0: string; 1: string }[]>;

  "getAllReservesTokens(uint64)"(
    trancheId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<{ symbol: string; tokenAddress: string; 0: string; 1: string }[]>;

  getReserveConfigurationData(
    asset: string,
    trancheId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<{
    decimals: BigNumber;
    ltv: BigNumber;
    liquidationThreshold: BigNumber;
    liquidationBonus: BigNumber;
    reserveFactor: BigNumber;
    usageAsCollateralEnabled: boolean;
    borrowingEnabled: boolean;
    stableBorrowRateEnabled: boolean;
    isActive: boolean;
    isFrozen: boolean;
    0: BigNumber;
    1: BigNumber;
    2: BigNumber;
    3: BigNumber;
    4: BigNumber;
    5: boolean;
    6: boolean;
    7: boolean;
    8: boolean;
    9: boolean;
  }>;

  "getReserveConfigurationData(address,uint64)"(
    asset: string,
    trancheId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<{
    decimals: BigNumber;
    ltv: BigNumber;
    liquidationThreshold: BigNumber;
    liquidationBonus: BigNumber;
    reserveFactor: BigNumber;
    usageAsCollateralEnabled: boolean;
    borrowingEnabled: boolean;
    stableBorrowRateEnabled: boolean;
    isActive: boolean;
    isFrozen: boolean;
    0: BigNumber;
    1: BigNumber;
    2: BigNumber;
    3: BigNumber;
    4: BigNumber;
    5: boolean;
    6: boolean;
    7: boolean;
    8: boolean;
    9: boolean;
  }>;

  getReserveData(
    asset: string,
    trancheId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<{
    availableLiquidity: BigNumber;
    totalStableDebt: BigNumber;
    totalVariableDebt: BigNumber;
    liquidityRate: BigNumber;
    variableBorrowRate: BigNumber;
    stableBorrowRate: BigNumber;
    averageStableBorrowRate: BigNumber;
    liquidityIndex: BigNumber;
    variableBorrowIndex: BigNumber;
    lastUpdateTimestamp: number;
    0: BigNumber;
    1: BigNumber;
    2: BigNumber;
    3: BigNumber;
    4: BigNumber;
    5: BigNumber;
    6: BigNumber;
    7: BigNumber;
    8: BigNumber;
    9: number;
  }>;

  "getReserveData(address,uint64)"(
    asset: string,
    trancheId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<{
    availableLiquidity: BigNumber;
    totalStableDebt: BigNumber;
    totalVariableDebt: BigNumber;
    liquidityRate: BigNumber;
    variableBorrowRate: BigNumber;
    stableBorrowRate: BigNumber;
    averageStableBorrowRate: BigNumber;
    liquidityIndex: BigNumber;
    variableBorrowIndex: BigNumber;
    lastUpdateTimestamp: number;
    0: BigNumber;
    1: BigNumber;
    2: BigNumber;
    3: BigNumber;
    4: BigNumber;
    5: BigNumber;
    6: BigNumber;
    7: BigNumber;
    8: BigNumber;
    9: number;
  }>;

  getReserveTokensAddresses(
    asset: string,
    trancheId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<{
    aTokenAddress: string;
    stableDebtTokenAddress: string;
    variableDebtTokenAddress: string;
    0: string;
    1: string;
    2: string;
  }>;

  "getReserveTokensAddresses(address,uint64)"(
    asset: string,
    trancheId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<{
    aTokenAddress: string;
    stableDebtTokenAddress: string;
    variableDebtTokenAddress: string;
    0: string;
    1: string;
    2: string;
  }>;

  getUserReserveData(
    asset: string,
    trancheId: BigNumberish,
    user: string,
    overrides?: CallOverrides
  ): Promise<{
    currentATokenBalance: BigNumber;
    currentStableDebt: BigNumber;
    currentVariableDebt: BigNumber;
    principalStableDebt: BigNumber;
    scaledVariableDebt: BigNumber;
    stableBorrowRate: BigNumber;
    liquidityRate: BigNumber;
    stableRateLastUpdated: number;
    usageAsCollateralEnabled: boolean;
    0: BigNumber;
    1: BigNumber;
    2: BigNumber;
    3: BigNumber;
    4: BigNumber;
    5: BigNumber;
    6: BigNumber;
    7: number;
    8: boolean;
  }>;

  "getUserReserveData(address,uint64,address)"(
    asset: string,
    trancheId: BigNumberish,
    user: string,
    overrides?: CallOverrides
  ): Promise<{
    currentATokenBalance: BigNumber;
    currentStableDebt: BigNumber;
    currentVariableDebt: BigNumber;
    principalStableDebt: BigNumber;
    scaledVariableDebt: BigNumber;
    stableBorrowRate: BigNumber;
    liquidityRate: BigNumber;
    stableRateLastUpdated: number;
    usageAsCollateralEnabled: boolean;
    0: BigNumber;
    1: BigNumber;
    2: BigNumber;
    3: BigNumber;
    4: BigNumber;
    5: BigNumber;
    6: BigNumber;
    7: number;
    8: boolean;
  }>;

  callStatic: {
    ADDRESSES_PROVIDER(overrides?: CallOverrides): Promise<string>;

    "ADDRESSES_PROVIDER()"(overrides?: CallOverrides): Promise<string>;

    getAllATokens(
      trancheId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      { symbol: string; tokenAddress: string; 0: string; 1: string }[]
    >;

    "getAllATokens(uint64)"(
      trancheId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      { symbol: string; tokenAddress: string; 0: string; 1: string }[]
    >;

    getAllReservesTokens(
      trancheId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      { symbol: string; tokenAddress: string; 0: string; 1: string }[]
    >;

    "getAllReservesTokens(uint64)"(
      trancheId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      { symbol: string; tokenAddress: string; 0: string; 1: string }[]
    >;

    getReserveConfigurationData(
      asset: string,
      trancheId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      decimals: BigNumber;
      ltv: BigNumber;
      liquidationThreshold: BigNumber;
      liquidationBonus: BigNumber;
      reserveFactor: BigNumber;
      usageAsCollateralEnabled: boolean;
      borrowingEnabled: boolean;
      stableBorrowRateEnabled: boolean;
      isActive: boolean;
      isFrozen: boolean;
      0: BigNumber;
      1: BigNumber;
      2: BigNumber;
      3: BigNumber;
      4: BigNumber;
      5: boolean;
      6: boolean;
      7: boolean;
      8: boolean;
      9: boolean;
    }>;

    "getReserveConfigurationData(address,uint64)"(
      asset: string,
      trancheId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      decimals: BigNumber;
      ltv: BigNumber;
      liquidationThreshold: BigNumber;
      liquidationBonus: BigNumber;
      reserveFactor: BigNumber;
      usageAsCollateralEnabled: boolean;
      borrowingEnabled: boolean;
      stableBorrowRateEnabled: boolean;
      isActive: boolean;
      isFrozen: boolean;
      0: BigNumber;
      1: BigNumber;
      2: BigNumber;
      3: BigNumber;
      4: BigNumber;
      5: boolean;
      6: boolean;
      7: boolean;
      8: boolean;
      9: boolean;
    }>;

    getReserveData(
      asset: string,
      trancheId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      availableLiquidity: BigNumber;
      totalStableDebt: BigNumber;
      totalVariableDebt: BigNumber;
      liquidityRate: BigNumber;
      variableBorrowRate: BigNumber;
      stableBorrowRate: BigNumber;
      averageStableBorrowRate: BigNumber;
      liquidityIndex: BigNumber;
      variableBorrowIndex: BigNumber;
      lastUpdateTimestamp: number;
      0: BigNumber;
      1: BigNumber;
      2: BigNumber;
      3: BigNumber;
      4: BigNumber;
      5: BigNumber;
      6: BigNumber;
      7: BigNumber;
      8: BigNumber;
      9: number;
    }>;

    "getReserveData(address,uint64)"(
      asset: string,
      trancheId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      availableLiquidity: BigNumber;
      totalStableDebt: BigNumber;
      totalVariableDebt: BigNumber;
      liquidityRate: BigNumber;
      variableBorrowRate: BigNumber;
      stableBorrowRate: BigNumber;
      averageStableBorrowRate: BigNumber;
      liquidityIndex: BigNumber;
      variableBorrowIndex: BigNumber;
      lastUpdateTimestamp: number;
      0: BigNumber;
      1: BigNumber;
      2: BigNumber;
      3: BigNumber;
      4: BigNumber;
      5: BigNumber;
      6: BigNumber;
      7: BigNumber;
      8: BigNumber;
      9: number;
    }>;

    getReserveTokensAddresses(
      asset: string,
      trancheId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      aTokenAddress: string;
      stableDebtTokenAddress: string;
      variableDebtTokenAddress: string;
      0: string;
      1: string;
      2: string;
    }>;

    "getReserveTokensAddresses(address,uint64)"(
      asset: string,
      trancheId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      aTokenAddress: string;
      stableDebtTokenAddress: string;
      variableDebtTokenAddress: string;
      0: string;
      1: string;
      2: string;
    }>;

    getUserReserveData(
      asset: string,
      trancheId: BigNumberish,
      user: string,
      overrides?: CallOverrides
    ): Promise<{
      currentATokenBalance: BigNumber;
      currentStableDebt: BigNumber;
      currentVariableDebt: BigNumber;
      principalStableDebt: BigNumber;
      scaledVariableDebt: BigNumber;
      stableBorrowRate: BigNumber;
      liquidityRate: BigNumber;
      stableRateLastUpdated: number;
      usageAsCollateralEnabled: boolean;
      0: BigNumber;
      1: BigNumber;
      2: BigNumber;
      3: BigNumber;
      4: BigNumber;
      5: BigNumber;
      6: BigNumber;
      7: number;
      8: boolean;
    }>;

    "getUserReserveData(address,uint64,address)"(
      asset: string,
      trancheId: BigNumberish,
      user: string,
      overrides?: CallOverrides
    ): Promise<{
      currentATokenBalance: BigNumber;
      currentStableDebt: BigNumber;
      currentVariableDebt: BigNumber;
      principalStableDebt: BigNumber;
      scaledVariableDebt: BigNumber;
      stableBorrowRate: BigNumber;
      liquidityRate: BigNumber;
      stableRateLastUpdated: number;
      usageAsCollateralEnabled: boolean;
      0: BigNumber;
      1: BigNumber;
      2: BigNumber;
      3: BigNumber;
      4: BigNumber;
      5: BigNumber;
      6: BigNumber;
      7: number;
      8: boolean;
    }>;
  };

  filters: {};

  estimateGas: {
    ADDRESSES_PROVIDER(overrides?: CallOverrides): Promise<BigNumber>;

    "ADDRESSES_PROVIDER()"(overrides?: CallOverrides): Promise<BigNumber>;

    getAllATokens(
      trancheId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getAllATokens(uint64)"(
      trancheId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAllReservesTokens(
      trancheId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getAllReservesTokens(uint64)"(
      trancheId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getReserveConfigurationData(
      asset: string,
      trancheId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getReserveConfigurationData(address,uint64)"(
      asset: string,
      trancheId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getReserveData(
      asset: string,
      trancheId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getReserveData(address,uint64)"(
      asset: string,
      trancheId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getReserveTokensAddresses(
      asset: string,
      trancheId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getReserveTokensAddresses(address,uint64)"(
      asset: string,
      trancheId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUserReserveData(
      asset: string,
      trancheId: BigNumberish,
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getUserReserveData(address,uint64,address)"(
      asset: string,
      trancheId: BigNumberish,
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    ADDRESSES_PROVIDER(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "ADDRESSES_PROVIDER()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAllATokens(
      trancheId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getAllATokens(uint64)"(
      trancheId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAllReservesTokens(
      trancheId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getAllReservesTokens(uint64)"(
      trancheId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getReserveConfigurationData(
      asset: string,
      trancheId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getReserveConfigurationData(address,uint64)"(
      asset: string,
      trancheId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getReserveData(
      asset: string,
      trancheId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getReserveData(address,uint64)"(
      asset: string,
      trancheId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getReserveTokensAddresses(
      asset: string,
      trancheId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getReserveTokensAddresses(address,uint64)"(
      asset: string,
      trancheId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getUserReserveData(
      asset: string,
      trancheId: BigNumberish,
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getUserReserveData(address,uint64,address)"(
      asset: string,
      trancheId: BigNumberish,
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
