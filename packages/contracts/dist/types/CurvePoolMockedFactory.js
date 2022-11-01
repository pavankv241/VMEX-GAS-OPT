"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurvePoolMockedFactory = void 0;
const contracts_1 = require("@ethersproject/contracts");
class CurvePoolMockedFactory extends contracts_1.ContractFactory {
    constructor(signer) {
        super(_abi, _bytecode, signer);
    }
    deploy(_virtual_price, overrides) {
        return super.deploy(_virtual_price, overrides || {});
    }
    getDeployTransaction(_virtual_price, overrides) {
        return super.getDeployTransaction(_virtual_price, overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static connect(address, signerOrProvider) {
        return new contracts_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.CurvePoolMockedFactory = CurvePoolMockedFactory;
const _abi = [
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_virtual_price",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        inputs: [],
        name: "get_virtual_price",
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
const _bytecode = "0x608060405234801561001057600080fd5b506040516100f93803806100f983398101604081905261002f91610047565b8061003f5750670e27c49886e600005b60005561005f565b600060208284031215610058578081fd5b5051919050565b608c8061006d6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c8063bb7b8b8014602d575b600080fd5b60336047565b604051603e9190604d565b60405180910390f35b60005490565b9081526020019056fea2646970667358221220c99546aa50a5feba93a50c907c0a7c53ea258e41c449783902e6d7d187a94fa864736f6c63430008000033";
//# sourceMappingURL=CurvePoolMockedFactory.js.map