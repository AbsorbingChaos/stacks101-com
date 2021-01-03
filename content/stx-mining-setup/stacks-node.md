---
title: "Setting up a Stacks Node"
date: 2021-01-02T15:36:10Z
description: "Supporting STX and BTC together"
layout: "section"
---

### Table of Contents

- [Set up a Stacks Node](#set-up-a-stacks-node)
  - [Stacks Node System Requirements](#stacks-node-system-requirements)
  - [Downloading the Release](#downloading-the-release)
  - [Stacks Node Configuration File](#stacks-node-configuration-file)
- [Other Resources](#other-resources)

## Set up a Stacks Node

### Stacks Node System Requirements

- new hardware requirements
  - way around: swap file mod (Linux)

### Downloading the Release

There are two options to set up the node software: build from source or download a release.

The former requires many more tools, steps, and complications.

The latter is as simple as downloading the required programs from GitHub.

Best way to test that it's working is to start a follower.

### Stacks Node Configuration File

- xenon-miner-config.toml
  - keychain values
  - burn fee values
- debug mode and better handling

reference to all config options in docs

## Other Resources

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
