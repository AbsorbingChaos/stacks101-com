---
title: "Setting up a Stacks Node"
date: 2021-01-02T15:36:10Z
description: "Supporting STX and BTC together."
layout: "section"
---

### Table of Contents

- [Setting up a Stacks Node](#setting-up-a-stacks-node)
  - [Stacks Node System Requirements](#stacks-node-system-requirements)
  - [Downloading the Release](#downloading-the-release)
  - [Testing the Release](#testing-the-release)
- [Mining with a Stacks Node](#mining-with-a-stacks-node)
  - [Stacks Node Configuration File](#stacks-node-configuration-file)
  - [Starting Stacks Node as a Miner](#starting-stacks-node-as-a-miner)
- [Other Resources](#other-resources)

## Setting up a Stacks Node

{{< notification params="is-info is-light"
 content="<span class=\"has-text-weight-bold\">Note:</span> this documentation is an alternate version of and may vary slightly from the <a href=\"https://docs.blockstack.org/understand-stacks/running-mainnet-node\" rel=\"noopener\" target=\"_blank\">official Stacks documentation.</a>" >}}

### Stacks Node System Requirements

The official Stacks Documentation states:

> Running a node has no specialized hardware requirements. People were successful at running a node on Raspberry Pis, for instance. Minimum requirements are moving targets due to the nature of the project and some factors should be considered:
>
> - compiling node sources locally requires computing and storage resources
> - as the chain grows, the on-disk state will grow over time
>
> We suggest hardware based on a general-purpose specification, similarly to GCP E2 machine standard 2 or AWS EC2 t3.large standard:
>
> - 2 vCPUs
> - 8 GB memory
> - ~50-GB disk (preferably SSDs)
>
> It is also recommended to run the node with a publicly routable IP, that way other peers in the network will be able to connect to it.
>
> [Stacks Documentation: Running a mainnet node](https://docs.blockstack.org/understand-stacks/running-mainnet-node#hardware)

{{< notification params="is-info is-light"
 content="<span class=\"has-text-weight-bold\">Note:</span> With this in mind, I can report personal success with a virtual machine allocated 1 vCPU, 2gb Memory, and 500gb allocated disk space that grows with the data (currently occupying 54gb on disk). I did have to <a href=\"https://linuxhint.com/change_swap_size_ubuntu/\" rel=\"noopener\" target=\"_blank\">change the swap size to 8gb</a> in order to be able to import Stacks 1.0 data and avoid OOM errors." >}}

### Downloading the Release

Stacks mining is currently available using the `stacks-node` executable from the [stacks-blockchain repo.](https://github.com/blockstack/stacks-blockchain)

There are two ways to obtain the software.

1. Download the [latest release from GitHub](https://github.com/blockstack/stacks-blockchain/releases/latest), which contains a ready-to-run program for your operating system.
2. Build the code directly from GitHub, which requires more prerequisites but gives access to the latest fixes.

Option 1 is the fastest way to get things running, and preferable if you do not have experience with compiling software.

Option 2 is more advanced, requiring Rust, Git, and the correct build tools for your OS.

For this tutorial, we will focus on Option 1 for simplicity.

Once downloaded, the software must be extracted from the zip file into a folder, and the location of that folder must be used when running commands.

For example, on Linux:

```bash
unzip linux-x64.zip
cd linux-x64
./stacks-node mainnet
```

For example, on Windows:

- right click and extract the file to a folder
- open the command prompt (cmd)
- navigate to the directory with that folder

```none
cd %userprofile%\Downloads\windows-x64
stacks-node.exe mainnet
```

### Testing the Release

The best way to test that the software is working before starting to mine is to start the node as a follower and check the output.

The examples above use `stacks-node mainnet` to start the node, which automatically starts as a follower attached to the Stacks 2.0 mainnet.

If you see output similar to the text below, then you are ready to move on to setting up a miner.

```none
INFO [1609701802.653224] [testnet/stacks-node/src/run_loop/neon.rs:132] [ThreadId(1)] Follower node: starting up
```

## Mining with a Stacks Node

To convert the follower into a miner, we have to use a [TOML formatted configuration file](https://toml.io/en/) with the settings both for our [local bitcoind node](/stx-mining/setup/bitcoin-node) and our [stacks keychain.](/stx-mining/setup/stacks-keychain)

### Stacks Node Configuration File

A default configuration file for `stacks-node` is below, copy and paste this into a text editor and save it as `mainnet-miner.conf` in the same folder as `stacks-node` from the steps above.

```toml
[node]
rpc_bind = "0.0.0.0:20443"
p2p_bind = "0.0.0.0:20444"
seed = "your-private-key-seed"
local_peer_seed = "your-private-key-seed"
miner = true
# uncomment to mine microblocks
# mine_microblocks = true
# uncomment to change wait time for microblocks
# wait_time_for_microblocks = 30000
bootstrap_node = "02da7a464ac770ae8337a343670778b93410f2f3fef6bea98dd1c3e9224459d36b@seed-0.mainnet.stacks.co:20444,02afeae522aab5f8c99a00ddf75fbcb4a641e052dd48836408d9cf437344b63516@seed-1.mainnet.stacks.co:20444,03652212ea76be0ed4cd83a25c06e57819993029a7b9999f7d63c36340b34a4e62@seed-2.mainnet.stacks.co:20444"
# uncomment working_dir line below to change the directory
# where the stacks blockchain data is stored.
# NOTE: if this gets corrupted, your node will not start
# working_dir = "/home/username/stacks-blockchain-data"

[burnchain]
chain = "bitcoin"
mode = "mainnet"
peer_host = "127.0.0.1"
rpc_port = 8332
peer_port = 8333
username = "your-bitcoind-username"
password = "your-bitcoind-password"
# NOTE: adjust values below based on your strategy
satoshis_per_byte = 100
burn_fee_cap = 20000
```

{{< notification params="is-info is-light"
 content="<span class=\"has-text-weight-bold\">Note:</span> Remember to replace the <code>seed</code> and <code>local_peer_seed</code> values with the private key from your keychain, and replace <code>username</code> and <code>password</code> values with the same values you used in your <code>bitcoin.conf</code> file." >}}

A full reference for the stacks node configuration file can be found as part of [the official Stacks documentation.](https://docs.blockstack.org/references/stacks-node-configuration)

### Starting Stacks Node as a Miner

In order to use the configuration file created in the last step, you have to run `stacks-node` with a slightly different command:

```bash
stacks-node start --config=mainnet-miner.conf
```

{{< notification params="is-info is-light"
 content="<span class=\"has-text-weight-bold\">Note:</span> if both stacks-node and mainnet-miner.conf are in the same folder, the command above will work, however if you have your .toml configuration file in another folder you must include that path after <code>--config=</code>. Absolute paths are supoprted." >}}

If you see output similar to the text below, then your miner is starting up and running correctly!

```none
INFO [1609703751.604620] [testnet/stacks-node/src/run_loop/neon.rs:121] [ThreadId(1)] Miner node: checking UTXOs at address: your-btc-address
INFO [1609703751.680088] [testnet/stacks-node/src/run_loop/neon.rs:128] [ThreadId(1)] Miner node: starting up, UTXOs found.
```

{{< notification params="is-danger is-light"
 content="Note that your miner does not show <code>Miner node: starting up, UTXOs found.</code> when it first starts up then it is not configured correctly. Please review the instructions from the beginning, and if you need help, ask others in the Discord #mining channel." >}}

## Other Resources

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
