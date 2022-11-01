/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { IReserveInterestRateStrategy } from "./IReserveInterestRateStrategy";

export class IReserveInterestRateStrategyFactory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IReserveInterestRateStrategy {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IReserveInterestRateStrategy;
  }
}

const _abi = [
  {
    inputs: [],
    name: "baseVariableBorrowRate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "reserve",
            type: "address",
          },
          {
            internalType: "address",
            name: "aToken",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "liquidityAdded",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "liquidityTaken",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "reserveFactor",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "globalVMEXReserveFactor",
            type: "uint256",
          },
        ],
        internalType: "struct DataTypes.calculateInterestRatesVars",
        name: "calvars",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "totalStableDebt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalVariableDebt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "averageStableBorrowRate",
        type: "uint256",
      },
    ],
    name: "calculateInterestRates",
    outputs: [
      {
        internalType: "uint256",
        name: "liquidityRate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "stableBorrowRate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "variableBorrowRate",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getMaxVariableBorrowRate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
