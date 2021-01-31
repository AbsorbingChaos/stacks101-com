---
title: "Setting up a STX Miner"
date: 2020-12-12T15:36:10Z
description: "Keep it simple, stacker."
layout: "section"
---

## Mine to 1 Million Stacks - Part 2

Part 2 of the competition will run on the Stacks Xenon testnet network, and from here forward miners need to run a local Bitcoin node as well as use the [latest release of stacks-node.](https://github.com/blockstack/stacks-blockchain/releases/latest)

Instructions are divided into three sections:

{{< notification params="is-danger is-light py-6 has-text-weight-bold"
 content="Please note that the information in these tutorials was intended for Part 1 and 2 of the Daemon Technologies competition on the Stacks Testnet.<br /><br />To find the most up to date information, please visit the <a href=\"https://docs.blockstack.org/\" target=\"_blank\" rel=\"noopener\">official Stacks Documentation website.</a>" >}}

{{< columns param="start-columns" >}}
  {{< resource-card title="Bitcoin Node"
    desc="A walkthrough for setting up and interacting with bitcoind for use with stacks-node."
    link="/stx-mining-setup/bitcoin-node" >}}
  {{< resource-card title="Stacks Node"
    desc="A walkthrough for setting up stacks-node and configuring it for the competition."
    link="/stx-mining-setup/stacks-node" >}}
  {{< resource-card title="Stacks Keychain"
    desc="A walkthrough of setting up a stacks keychain using various tools."
    link="/stx-mining-setup/stacks-keychain" >}}
{{< columns param="end-columns" >}}
