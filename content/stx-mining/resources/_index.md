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
- [Stacks Node Configuration Options](https://docs.stacks.co/references/stacks-node-configuration) - full list of supported configuration items and defaults.
- [Stacks Node RPC Endpoints](https://github.com/blockstack/stacks-blockchain/blob/master/docs/rpc-endpoints.md) - every running Stacks node exposes an RPC API, which allows you to interact with the underlying blockchain ([another reference here](https://docs.stacks.co/understand-stacks/stacks-blockchain-api#proxied-stacks-node-rpc-api-endpoints)).
- [Understand Mining](https://docs.stacks.co/understand-stacks/mining) - technical details related to mining on the Stacks 2.0 network.
- [Community Resources](/stx-community/#mining) - a collection of mining resources from the community.
- [Mining FAQ](/stx-mining/faq) - answers to common questions from Discord and other sources.
- [STX Mining Reports](https://daemontechnologies.co/mining-reports) - blog posts from Xan at Daemon Technologies analyzing mining on Stacks 2.0

## Stacks Mining Tools

- [Mining-Bot](https://github.com/Daemon-Technologies/Mining-Bot) - A graphical interface for stacks-node with built-in blockchain statistics.
- [Stacks-Dump](https://github.com/psq/stacks-dump) - A console application for searching stacks-node storage and displaying blockchain statistics.
- [Stacks Explorer](http://explorer.stacks.co/) - transaction and block explorer for Stacks 2.0.
- [Stacks Explorer Sandbox](http://explorer.stacks.co/sandbox) - send STX, test, deploy, and call contracts.
