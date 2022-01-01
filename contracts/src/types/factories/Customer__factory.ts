/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Customer, CustomerInterface } from "../Customer";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_walletAddr",
        type: "address",
      },
    ],
    name: "createCustomer",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "userId",
        type: "uint256",
      },
    ],
    name: "getCustomer",
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
    name: "owner",
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
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x6080604052600060015534801561001557600080fd5b5061003261002761003760201b60201c565b61003f60201b60201c565b610103565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b610801806101126000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c8063715018a61461005c5780638da5cb5b14610066578063d6b1389014610084578063eb876f27146100b4578063f2fde38b146100e4575b600080fd5b610064610100565b005b61006e610188565b60405161007b9190610662565b60405180910390f35b61009e6004803603810190610099919061054c565b6101b1565b6040516100ab91906106bd565b60405180910390f35b6100ce60048036038101906100c99190610575565b6102a5565b6040516100db9190610662565b60405180910390f35b6100fe60048036038101906100f9919061054c565b61035e565b005b610108610456565b73ffffffffffffffffffffffffffffffffffffffff16610126610188565b73ffffffffffffffffffffffffffffffffffffffff161461017c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101739061069d565b60405180910390fd5b610186600061045e565b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60006101bb610456565b73ffffffffffffffffffffffffffffffffffffffff166101d9610188565b73ffffffffffffffffffffffffffffffffffffffff161461022f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102269061069d565b60405180910390fd5b6001600081548092919061024290610725565b91905055508160036000600154815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001549050919050565b60006102af610456565b73ffffffffffffffffffffffffffffffffffffffff166102cd610188565b73ffffffffffffffffffffffffffffffffffffffff1614610323576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161031a9061069d565b60405180910390fd5b6003600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b610366610456565b73ffffffffffffffffffffffffffffffffffffffff16610384610188565b73ffffffffffffffffffffffffffffffffffffffff16146103da576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103d19061069d565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561044a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104419061067d565b60405180910390fd5b6104538161045e565b50565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6000813590506105318161079d565b92915050565b600081359050610546816107b4565b92915050565b60006020828403121561055e57600080fd5b600061056c84828501610522565b91505092915050565b60006020828403121561058757600080fd5b600061059584828501610537565b91505092915050565b6105a7816106e9565b82525050565b60006105ba6026836106d8565b91507f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008301527f64647265737300000000000000000000000000000000000000000000000000006020830152604082019050919050565b60006106206020836106d8565b91507f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726000830152602082019050919050565b61065c8161071b565b82525050565b6000602082019050610677600083018461059e565b92915050565b60006020820190508181036000830152610696816105ad565b9050919050565b600060208201905081810360008301526106b681610613565b9050919050565b60006020820190506106d26000830184610653565b92915050565b600082825260208201905092915050565b60006106f4826106fb565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60006107308261071b565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156107635761076261076e565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6107a6816106e9565b81146107b157600080fd5b50565b6107bd8161071b565b81146107c857600080fd5b5056fea2646970667358221220dd2fb2cc92e3169801298e44357a11fb981fd973e16d62ea3e8c0a43e5e4136864736f6c63430008000033";

type CustomerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CustomerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Customer__factory extends ContractFactory {
  constructor(...args: CustomerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Customer> {
    return super.deploy(overrides || {}) as Promise<Customer>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Customer {
    return super.attach(address) as Customer;
  }
  connect(signer: Signer): Customer__factory {
    return super.connect(signer) as Customer__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CustomerInterface {
    return new utils.Interface(_abi) as CustomerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Customer {
    return new Contract(address, _abi, signerOrProvider) as Customer;
  }
}
