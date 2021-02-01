---
title: "Stacks Mining"
date: 2020-12-12T15:36:10Z
description: "Secure the network, compete for STX."
layout: "section"
---

## Quick Overview

Mining on the Stacks 2.0 network requires spending Bitcoin to compete for the chance to mine the next Stacks block, and in turn, receive a STX reward.

More details can be found in [the Stacks documentation](https://docs.blockstack.org/understand-stacks/mining) and [several resources](resources/) exist for would-be miners on the network.

The basic process for setting up a miner [is outlined in full here](setup/) and includes:

1. setting up and maintaining a [Bitcoin node](setup/bitcoin-node/)
2. setting up and maintaining a [Stacks keychain](setup/stacks-keychain/)
3. setting up and maintaining a [Stacks miner](setup/stacks-node/)

The Stacks miner (stacks-node) communicates with a local instance of Bitcoin Core (bitcoind) in order to:

- check the BTC balance of the miner
- perform replace-by-fee (RBF) transactions
- interact with the Bitcoin blockchain

## System Requirements

### Bitcoin Core

- Disk Space: 350 GB[^1]
- Download: 500 MB/day
- Upload: 5 GB/day
- Memory (RAM): 1 GB

More detailed information can be found on [the Bitcoin Core website.](https://bitcoin.org/en/bitcoin-core/features/requirements)

### Stacks-Node

- Processor: 2 vCPUs
- Disk Space: 50 GB[^2]
- Memory (RAM): 8 GB[^3]

[^1]: Pruning is not supported
[^2]: SSD storage preferred
[^3]: The Memory (RAM) requirement is mostly used for the initial Stacks 1.0 import, and advanced Linux users can [increase the size of their swap file](https://linuxhint.com/change_swap_size_ubuntu/) and safely operate with 2 GB of memory.
