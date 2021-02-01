---
title: "Setting up a Stacks Node"
date: 2020-12-12T15:36:10Z
description: "Spend sats to win STX."
layout: "section"
---

## Stacks Node Tutorials

There are three main steps to run a Stacks Node outlined below, each containing a link to a tutorial including more detail.

{{< notification params="is-info is-light"
 content="<span class=\"has-text-weight-bold\">Note:</span> this documentation is an alternate version of and may vary slightly from the <a href=\"https://docs.blockstack.org/understand-stacks/running-mainnet-node\" rel=\"noopener\" target=\"_blank\">official Stacks documentation.</a>" >}}

{{< columns param="start-columns" >}}
  {{< resource-card title="Bitcoin Node"
    desc="A walkthrough for setting up and interacting with bitcoind for use with stacks-node."
    link="/stx-mining/setup/bitcoin-node" >}}
  {{< resource-card title="Stacks Keychain"
    desc="A walkthrough of setting up a stacks keychain using various tools."
    link="/stx-mining/setup/stacks-keychain" >}}
  {{< resource-card title="Stacks Node"
    desc="A walkthrough for setting up stacks-node and configuring it for mining."
    link="/stx-mining/setup/stacks-node" >}}
{{< columns param="end-columns" >}}

## Stacks Node Quick Reference

### Step 1: Set up a Bitcoin Node

A local bitcoin node is required for stacks-node to interact with the bitcoin blockchain.

Please be aware of the [system requirements for running one](/stx-mining/#system-requirements), notably ~40 GB of space for the testnet version and ~350 GB of space for mainnet.

- Bitcoin Core download links: [bitcoin.org](https://bitcoin.org/en/bitcoin-core/) and [bitcoincore.org](https://bitcoincore.org/en/download/) (*remember to verify the download once complete*)
- Default bitcoind configuration for mainnet
- Default bitcoind configuration for testnet

### Step 2: Set up a Stacks Keychain

A stacks keychain provides the necessary private key to generate associated BTC and STX addresses for use by the miner.

The same keychain can be used in the Stacks Explorer, a STX wallet, or to sign transactions.

{{< notification params="is-danger is-light"
 content="<span class=\"has-text-weight-bold\">Note:</span> remember to back up your 24 word seed! Nobody can recover it for you." >}}

- [@stacks/cli](https://docs.blockstack.org/start-mining/mainnet#running-a-miner) - tool provided by Hiro (formerly Blockstack) to generate a keychain
- [stacks-gen](https://github.com/psq/stacks-gen) - tool provided by Pascal (psq) to generate a keychain

### Step 3: Set up a Stacks Node

The stacks-node software downloads the Stacks blockchain, verifies transactions, and can participate in mining.

- Latest [stacks-node release download link](https://github.com/blockstack/stacks-blockchain/releases/latest) from GitHub
- Default stacks-node configuration for mainnet
- Default stacks-node configuration for testnet

{{< notification params="is-info is-light"
 content="<span class=\"has-text-weight-bold\">Note:</span> a node can operate in two modes, as a <span class=\"has-text-weight-bold\">follower</span> or as a <span class=\"has-text-weight-bold\">miner</span>.<ul><li>A follower node will download the Stacks blockchain, verify transactions, contribute to the decentralization of the network, and provide an API to interact with the blockchain data.</li><li>A miner node does everything a follower node does, as well as submitting leader elections to create the next block in the Stacks chain.</li></ul>" >}}
 