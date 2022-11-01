/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { TrancheGovernance } from "./TrancheGovernance";

export class TrancheGovernanceFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<TrancheGovernance> {
    return super.deploy(overrides || {}) as Promise<TrancheGovernance>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TrancheGovernance {
    return super.attach(address) as TrancheGovernance;
  }
  connect(signer: Signer): TrancheGovernanceFactory {
    return super.connect(signer) as TrancheGovernanceFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TrancheGovernance {
    return new Contract(address, _abi, signerOrProvider) as TrancheGovernance;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "uint8",
        name: "trancheId",
        type: "uint8",
      },
      {
        internalType: "uint8",
        name: "_riskLevel",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "_variableBorrowRateMultiplier",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_stableBorrowRateMultiplier",
        type: "uint256",
      },
    ],
    name: "editTranche",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610112806100206000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c80633f784eae14602d575b600080fd5b603c603836600460a0565b603e565b005b6040805160608101825260ff948516815260208082019485528183019384529585166000908152600c90965294209351845460ff1916931692909217835551600183015551600290910155565b803560ff81168114609b57600080fd5b919050565b6000806000806080858703121560b4578384fd5b60bb85608b565b935060c760208601608b565b9396939550505050604082013591606001359056fea26469706673582212207b754e437dc819086d2349ec179f9f46b0dd3bd6ff168faf0305b580b72943c564736f6c63430008000033";
