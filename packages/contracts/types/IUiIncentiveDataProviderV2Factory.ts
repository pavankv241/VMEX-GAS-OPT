/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { IUiIncentiveDataProviderV2 } from "./IUiIncentiveDataProviderV2";

export class IUiIncentiveDataProviderV2Factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IUiIncentiveDataProviderV2 {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IUiIncentiveDataProviderV2;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "contract ILendingPoolAddressesProvider",
        name: "provider",
        type: "address",
      },
      {
        internalType: "uint64",
        name: "trancheId",
        type: "uint64",
      },
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "getFullReservesIncentiveData",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "underlyingAsset",
            type: "address",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "emissionPerSecond",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "incentivesLastUpdateTimestamp",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "tokenIncentivesIndex",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "emissionEndTimestamp",
                type: "uint256",
              },
              {
                internalType: "address",
                name: "tokenAddress",
                type: "address",
              },
              {
                internalType: "address",
                name: "rewardTokenAddress",
                type: "address",
              },
              {
                internalType: "address",
                name: "incentiveControllerAddress",
                type: "address",
              },
              {
                internalType: "uint8",
                name: "rewardTokenDecimals",
                type: "uint8",
              },
              {
                internalType: "uint8",
                name: "precision",
                type: "uint8",
              },
            ],
            internalType: "struct IUiIncentiveDataProviderV2.IncentiveData",
            name: "aIncentiveData",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "emissionPerSecond",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "incentivesLastUpdateTimestamp",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "tokenIncentivesIndex",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "emissionEndTimestamp",
                type: "uint256",
              },
              {
                internalType: "address",
                name: "tokenAddress",
                type: "address",
              },
              {
                internalType: "address",
                name: "rewardTokenAddress",
                type: "address",
              },
              {
                internalType: "address",
                name: "incentiveControllerAddress",
                type: "address",
              },
              {
                internalType: "uint8",
                name: "rewardTokenDecimals",
                type: "uint8",
              },
              {
                internalType: "uint8",
                name: "precision",
                type: "uint8",
              },
            ],
            internalType: "struct IUiIncentiveDataProviderV2.IncentiveData",
            name: "vIncentiveData",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "emissionPerSecond",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "incentivesLastUpdateTimestamp",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "tokenIncentivesIndex",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "emissionEndTimestamp",
                type: "uint256",
              },
              {
                internalType: "address",
                name: "tokenAddress",
                type: "address",
              },
              {
                internalType: "address",
                name: "rewardTokenAddress",
                type: "address",
              },
              {
                internalType: "address",
                name: "incentiveControllerAddress",
                type: "address",
              },
              {
                internalType: "uint8",
                name: "rewardTokenDecimals",
                type: "uint8",
              },
              {
                internalType: "uint8",
                name: "precision",
                type: "uint8",
              },
            ],
            internalType: "struct IUiIncentiveDataProviderV2.IncentiveData",
            name: "sIncentiveData",
            type: "tuple",
          },
        ],
        internalType:
          "struct IUiIncentiveDataProviderV2.AggregatedReserveIncentiveData[]",
        name: "",
        type: "tuple[]",
      },
      {
        components: [
          {
            internalType: "address",
            name: "underlyingAsset",
            type: "address",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "tokenincentivesUserIndex",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "userUnclaimedRewards",
                type: "uint256",
              },
              {
                internalType: "address",
                name: "tokenAddress",
                type: "address",
              },
              {
                internalType: "address",
                name: "rewardTokenAddress",
                type: "address",
              },
              {
                internalType: "address",
                name: "incentiveControllerAddress",
                type: "address",
              },
              {
                internalType: "uint8",
                name: "rewardTokenDecimals",
                type: "uint8",
              },
            ],
            internalType: "struct IUiIncentiveDataProviderV2.UserIncentiveData",
            name: "aTokenIncentivesUserData",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "tokenincentivesUserIndex",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "userUnclaimedRewards",
                type: "uint256",
              },
              {
                internalType: "address",
                name: "tokenAddress",
                type: "address",
              },
              {
                internalType: "address",
                name: "rewardTokenAddress",
                type: "address",
              },
              {
                internalType: "address",
                name: "incentiveControllerAddress",
                type: "address",
              },
              {
                internalType: "uint8",
                name: "rewardTokenDecimals",
                type: "uint8",
              },
            ],
            internalType: "struct IUiIncentiveDataProviderV2.UserIncentiveData",
            name: "vTokenIncentivesUserData",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "tokenincentivesUserIndex",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "userUnclaimedRewards",
                type: "uint256",
              },
              {
                internalType: "address",
                name: "tokenAddress",
                type: "address",
              },
              {
                internalType: "address",
                name: "rewardTokenAddress",
                type: "address",
              },
              {
                internalType: "address",
                name: "incentiveControllerAddress",
                type: "address",
              },
              {
                internalType: "uint8",
                name: "rewardTokenDecimals",
                type: "uint8",
              },
            ],
            internalType: "struct IUiIncentiveDataProviderV2.UserIncentiveData",
            name: "sTokenIncentivesUserData",
            type: "tuple",
          },
        ],
        internalType:
          "struct IUiIncentiveDataProviderV2.UserReserveIncentiveData[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ILendingPoolAddressesProvider",
        name: "provider",
        type: "address",
      },
      {
        internalType: "uint64",
        name: "trancheId",
        type: "uint64",
      },
    ],
    name: "getReservesIncentivesData",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "underlyingAsset",
            type: "address",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "emissionPerSecond",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "incentivesLastUpdateTimestamp",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "tokenIncentivesIndex",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "emissionEndTimestamp",
                type: "uint256",
              },
              {
                internalType: "address",
                name: "tokenAddress",
                type: "address",
              },
              {
                internalType: "address",
                name: "rewardTokenAddress",
                type: "address",
              },
              {
                internalType: "address",
                name: "incentiveControllerAddress",
                type: "address",
              },
              {
                internalType: "uint8",
                name: "rewardTokenDecimals",
                type: "uint8",
              },
              {
                internalType: "uint8",
                name: "precision",
                type: "uint8",
              },
            ],
            internalType: "struct IUiIncentiveDataProviderV2.IncentiveData",
            name: "aIncentiveData",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "emissionPerSecond",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "incentivesLastUpdateTimestamp",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "tokenIncentivesIndex",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "emissionEndTimestamp",
                type: "uint256",
              },
              {
                internalType: "address",
                name: "tokenAddress",
                type: "address",
              },
              {
                internalType: "address",
                name: "rewardTokenAddress",
                type: "address",
              },
              {
                internalType: "address",
                name: "incentiveControllerAddress",
                type: "address",
              },
              {
                internalType: "uint8",
                name: "rewardTokenDecimals",
                type: "uint8",
              },
              {
                internalType: "uint8",
                name: "precision",
                type: "uint8",
              },
            ],
            internalType: "struct IUiIncentiveDataProviderV2.IncentiveData",
            name: "vIncentiveData",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "emissionPerSecond",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "incentivesLastUpdateTimestamp",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "tokenIncentivesIndex",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "emissionEndTimestamp",
                type: "uint256",
              },
              {
                internalType: "address",
                name: "tokenAddress",
                type: "address",
              },
              {
                internalType: "address",
                name: "rewardTokenAddress",
                type: "address",
              },
              {
                internalType: "address",
                name: "incentiveControllerAddress",
                type: "address",
              },
              {
                internalType: "uint8",
                name: "rewardTokenDecimals",
                type: "uint8",
              },
              {
                internalType: "uint8",
                name: "precision",
                type: "uint8",
              },
            ],
            internalType: "struct IUiIncentiveDataProviderV2.IncentiveData",
            name: "sIncentiveData",
            type: "tuple",
          },
        ],
        internalType:
          "struct IUiIncentiveDataProviderV2.AggregatedReserveIncentiveData[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ILendingPoolAddressesProvider",
        name: "provider",
        type: "address",
      },
      {
        internalType: "uint64",
        name: "trancheId",
        type: "uint64",
      },
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "getUserReservesIncentivesData",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "underlyingAsset",
            type: "address",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "tokenincentivesUserIndex",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "userUnclaimedRewards",
                type: "uint256",
              },
              {
                internalType: "address",
                name: "tokenAddress",
                type: "address",
              },
              {
                internalType: "address",
                name: "rewardTokenAddress",
                type: "address",
              },
              {
                internalType: "address",
                name: "incentiveControllerAddress",
                type: "address",
              },
              {
                internalType: "uint8",
                name: "rewardTokenDecimals",
                type: "uint8",
              },
            ],
            internalType: "struct IUiIncentiveDataProviderV2.UserIncentiveData",
            name: "aTokenIncentivesUserData",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "tokenincentivesUserIndex",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "userUnclaimedRewards",
                type: "uint256",
              },
              {
                internalType: "address",
                name: "tokenAddress",
                type: "address",
              },
              {
                internalType: "address",
                name: "rewardTokenAddress",
                type: "address",
              },
              {
                internalType: "address",
                name: "incentiveControllerAddress",
                type: "address",
              },
              {
                internalType: "uint8",
                name: "rewardTokenDecimals",
                type: "uint8",
              },
            ],
            internalType: "struct IUiIncentiveDataProviderV2.UserIncentiveData",
            name: "vTokenIncentivesUserData",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "tokenincentivesUserIndex",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "userUnclaimedRewards",
                type: "uint256",
              },
              {
                internalType: "address",
                name: "tokenAddress",
                type: "address",
              },
              {
                internalType: "address",
                name: "rewardTokenAddress",
                type: "address",
              },
              {
                internalType: "address",
                name: "incentiveControllerAddress",
                type: "address",
              },
              {
                internalType: "uint8",
                name: "rewardTokenDecimals",
                type: "uint8",
              },
            ],
            internalType: "struct IUiIncentiveDataProviderV2.UserIncentiveData",
            name: "sTokenIncentivesUserData",
            type: "tuple",
          },
        ],
        internalType:
          "struct IUiIncentiveDataProviderV2.UserReserveIncentiveData[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
