---
title: "Stacks Mining Resources"
date: 2020-12-12T15:36:10Z
description: "Tips, tricks, and tools."
layout: "section"
---

## General Info

Stacks mining is currently available using the `stacks-node` executable from the [stacks-blockchain repo.](https://github.com/blockstack/stacks-blockchain)

There are two ways to obtain the software.

1. Download the [latest release from GitHub](https://github.com/blockstack/stacks-blockchain/releases/latest), which contains a ready-to-run program for your operating system.
2. Build the code directly from GitHub, which requires more prerequisites but gives access to the latest fixes.

Option 1 is the fastest way to get things running, and preferable if you do not have experience with compiling software.

Option 2 is more advanced, requiring Rust, Git, and the correct build tools for your OS.

{{< notification params="is-info is-light"
 content="<span class=\"has-text-weight-bold\">Note:</span> the Stacks blockchain software and many accompanying tools require Node.js to be installed. Mac/Linux users are recommended to use <a href=\"https://github.com/nvm-sh/nvm#install--update-script\" rel=\"noopener\" target=\"_blank\">nvm,</a> whereas Windows users can download the software directly from <a href=\"https://nodejs.dev\" rel=\"noopener\" target=\"_blank\">the NodeJS website.</a>" >}}

## Bitcoin Node Resources

- [Running a Full Node](https://bitcoin.org/en/full-node) from bitcoin.org
- [Learning Bitcoin from the Command-Line](https://github.com/BlockchainCommons/Learning-Bitcoin-from-the-Command-Line/) from BlockChain Commons

## Stacks Mining Resources

- [Stacks Node Setup](/stx-mining/setup) - instructions and links for setting up a Stacks node.
- [Stacks Node Configuration Options](https://docs.blockstack.org/references/stacks-node-configuration) - full list of supported configuration items and defaults.
- [Stacks Node RPC Endpoints](https://github.com/blockstack/stacks-blockchain/blob/master/docs/rpc-endpoints.md) - every running Stacks node exposes an RPC API, which allows you to interact with the underlying blockchain ([another reference here](https://docs.blockstack.org/understand-stacks/stacks-blockchain-api#proxied-stacks-node-rpc-api-endpoints)).
- [Understand Mining](https://docs.blockstack.org/understand-stacks/mining) - technical details related to mining on the Stacks 2.0 network.
- [Community Resources](/stx-community/#mining) - a collection of mining resources from the community.
- [Mining FAQ](/stx-mining/faq) - answers to common questions from Discord and other sources.
- [Stacks 2.0 Mining Questions](https://paper.dropbox.com/doc/Stacks-2.0-Mining-Questions--BEWhyjHlB2c4WNH5pkvL8bpmAg-63CU2wD4zQsiiU6XPUtlr) - a list of questions from community miners, and the basis of the [Mining FAQ](/stx-mining/faq)
- [Mining Community](https://paper.dropbox.com/doc/Mining-Community--BDlvJZcCd2NpQtx6beGVptijAg-mJbtjhpqzNq9iCZHASFot) - a shared document from community miners used during open community meetings
- [STX Mining: The First 1000 Blocks of Stacks 2.0](https://daemontechnologies.co/first-1000-blocks) - blog post from Xan at Daemon Technologies analyzing the first 1000 blocks

## Stacks Mining Tools

- [Mining-Bot](https://github.com/Daemon-Technologies/Mining-Bot) - A graphical interface for stacks-node with built-in blockchain statistics. *[(coming soon!)](https://forum.stacks.org/t/update-on-daemons-mining-bot/11646)*
- [Stacks-Dump](https://github.com/psq/stacks-dump) - A console application for searching stacks-node storage and displaying blockchain statistics.
- [Stacks Explorer](http://explorer.stacks.co/) - transaction and block explorer for Stacks 2.0.
- [Stacks Explorer Sandbox](http://explorer.stacks.co/sandbox) - send STX, test, deploy, and call contracts.
- [Pub-Stacks-Dump](https://friedger.github.io/pub-stacks-dump/) - an hourly update of stacks-dump from an independent miner on the Stacks 2.0 Mainnet.
