---
title: "Setting up a Stacks Node"
date: 2020-12-12T15:36:10Z
description: "Spend sats to get STX."
layout: "section"
---

## Stacks Node Setup

There are three main steps to run a Stacks Node outlined below, each containing a link to a tutorial including more detail.

{{< notification params="is-info is-light"
 content="<span class=\"has-text-weight-bold\">Note:</span> this documentation is an alternate version of and may vary slightly from the <a href=\"https://docs.blockstack.org/understand-stacks/running-mainnet-node\" rel=\"noopener\" target=\"_blank\">official Stacks documentation.</a>" >}}

### Step 1: Set up a Bitcoin Node

A local bitcoin node is required for stacks-node to interact with the bitcoin blockchain.

Please be aware of the [system requirements for running one](/stx-mining/#system-requirements), notably ~40 GB of space for the testnet version and ~350 GB of space for mainnet.

- Bitcoin Core download links: [bitcoin.org](https://bitcoin.org/en/bitcoin-core/) and [bitcoincore.org](https://bitcoincore.org/en/download/) (*remember to verify the download once complete*)
- [Full bitcoind setup walkthrough](bitcoin-node)
- Default bitcoind configuration for mainnet
- Default bitcoind configuration for testnet

### Step 2: Set up a Stacks Keychain

A stacks keychain provides the necessary private key to generate associated BTC and STX addresses for use by the miner.

The same keychain can be used in the Stacks Explorer, a STX wallet, or to sign transactions.

{{< notification params="is-danger is-light"
 content="<span class=\"has-text-weight-bold\">Note:</span> remember to back up your 24 word seed! Nobody can recover it for you." >}}

- [@stacks/cli](https://docs.blockstack.org/start-mining/mainnet#running-a-miner) - tool provided by Hiro (formerly Blockstack) to generate a keychain
- [stacks-gen](https://github.com/psq/stacks-gen) - tool provided by Pascal (psq) to generate a keychain
- [Full keychain setup walkthrough](stacks-keychain)

### Step 3: Set up a Stacks Node

The stacks-node software downloads the Stacks blockchain, verifies transactions, and can participate in mining.

define follower
define miner
  (as notification?)

configuration file definitions

latest release
general strategy
  (add community docs?)

default mainnet stacks-node configuration
default testnet (Xenon) stacks-node configuration

## extra stuff

bootstrap node

seed nodes

need info from shared docs

-----

PSA for miners

You may want to set wait_time_for_microblocks (https://docs.blockstack.org/references/stacks-node-configuration#wait_time_for_microblocks-optional) to 30 or 45 seconds (defaults to 1min). The value is set in millisecs, so 30000 or 45000

Context: sometimes when BTC blocks are produced rather quickly, it can lead to some scenarios that miners have run into with "missed commits". Per discussion in https://github.com/blockstack/stacks-blockchain/issues/2367, reducing the default above might help.

-----

here are lots of factors in play, not just the btc commitments, and those are not clearly articulated in miners instructions, like

1. Fluctuating btc transaction fees, 

2. ending up on fork, 

3. missing STX block (that resets your sortition weights)

4. Whenever you restart miner initial 4 commitments are spent in building your sortition weight ( there is still slight chance you may win during initial 4 blocks, but it's like 1:20000)

5. If your miner misses a STX block, same point#4 applies, your chances to win a block is abysmally low for next 4 commitments. 

6. Probably your miner is regularly missing STX block say every 6th block,  and by this way you may continue 20000 rounds and might win 1 block

-----

https://live.blockcypher.com/btc-testnet/

http://stacks-node-api.stacks.co
http://stacks-node-api.testnet.stacks.co