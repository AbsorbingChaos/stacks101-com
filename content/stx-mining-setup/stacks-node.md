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
  - [Testing the Release](#testing-the-release)
- [Mining with a Stacks Node](#mining-with-a-stacks-node)
  - [Stacks Node Configuration File](#stacks-node-configuration-file)
  - [Starting Stacks Node as a Miner](#starting-stacks-node-as-a-miner)
  - [General Strategy for Mining](#general-strategy-for-mining)
- [Other Resources](#other-resources)

{{< notification params="is-danger is-light py-6 has-text-weight-bold"
 content="Please note that the information in these tutorials was intended for Part 1 and 2 of the Daemon Technologies competition on the Stacks Testnet.<br /><br />To find the most up to date information, please visit the <a href=\"https://docs.blockstack.org/\" target=\"_blank\" rel=\"noopener\">official Stacks Documentation website.</a>" >}}

## Set up a Stacks Node

The official Stacks Documentation contains instructions for [running a testnet node](https://docs.blockstack.org/understand-stacks/running-testnet-node) and [setting up a miner](https://docs.blockstack.org/en-US/start-mining).

{{< notification params="is-info is-light"
 content="The instructions below vary a bit from the original to help simplify the process, and are geared specifically for the Daemon Technologies mining competition." >}}

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
> [Stacks Documentation: Running a testnet node](https://docs.blockstack.org/understand-stacks/running-testnet-node#hardware)

{{< notification params="is-info is-light"
 content="With this in mind, I can report personal success with a virtual machine allocated 1 vCPU, 2gb Memory, and 400gb allocated disk space that grows with the data (currently occupying 54gb on disk). I did have to <a href=\"https://linuxhint.com/change_swap_size_ubuntu/\" rel=\"noopener\" target=\"_blank\">change the swap size to 8gb</a> in order to be able to import Stacks 1.0 data and avoid OOM errors." >}}

### Downloading the Release

There are two options to set up the stacks-node software: build from source or download a release.

Building the software from source requires more tools, resources, and time, however downloading the release provides a ready-to-use file that contains the node software.

The latest release for the stacks-blockchain repository [can be found on GitHub](https://github.com/blockstack/stacks-blockchain/releases/latest), which contains `blockstack-cli`, `blockstack-core`, `clarity-cli`, and `stacks-node`.

Once downloaded, the software must be extracted from the zip file into a folder, and the location of that folder must be used when running commands.

For example, on Linux:

```bash
unzip linux-x64.zip
cd linux-x64
./stacks-node xenon
```

For example, on Windows:

- right click and extract the file to a folder
- open the command prompt (cmd)
- navigate to the directory with that folder

  ```none
  cd %userprofile%\Downloads\windows-x64
  stacks-node.exe xenon
  ```

### Testing the Release

The best way to test that the software is working before starting to mine, you can start the node as a follower and check the output.

The examples above use `stacks-node xenon` to start the node, which automatically starts as a follower attached to the Xenon testnet.

If you see output similar to the text below, then you are ready to move on to setting up a miner.

```none
INFO [1609701802.653224] [testnet/stacks-node/src/run_loop/neon.rs:132] [ThreadId(1)] Follower node: starting up
```

## Mining with a Stacks Node

To convert the follower into a miner, we have to use a [TOML formatted configuration file](https://toml.io/en/) with the settings both for our [local bitcoind node](/stx-mining-setup/bitcoin-node) and our [stacks keychain.](/stx-mining-setup/stacks-keychain)

### Stacks Node Configuration File

A default configuration file for `stacks-node` is below, copy and paste this into a text editor and save it as `xenon-miner.conf` in the same folder as `stacks-node` from the steps above:

```toml
[node]
rpc_bind = "0.0.0.0:20443"
p2p_bind = "0.0.0.0:20444"
bootstrap_node = "047435c194e9b01b3d7f7a2802d6684a3af68d05bbf4ec8f17021980d777691f1d51651f7f1d566532c804da506c117bbf79ad62eea81213ba58f8808b4d9504ad@xenon.blockstack.org:20444"
# Enter your private key here from your Stacks Keychain
seed = "replace-with-your-private-key"
miner = true
# uncomment the line below to change the directory
# where the stacks blockchain data is stored.
# NOTE: if this gets corrupted, your node will not start
# working_dir = "/home/username/stacks-blockchain-data"

[burnchain]
chain = "bitcoin"
mode = "xenon"
# connect to your Bitcoin Node
peer_host = "127.0.0.1"
username = "your-bitcoind-username"
password = "your-bitcoind-password"
rpc_port = 18332
peer_port = 18333
# uncomment the line below to customize burn fees
# burnchain_op_tx_fee = 11000
# burn_fee_cap = 20000

[[ustx_balance]]
address = "STB44HYPYAT2BB2QE513NSP81HTMYWBJP02HPGK6"
amount = 10000000000000000
[[ustx_balance]]
address = "ST11NJTTKGVT6D1HY4NJRVQWMQM7TVAR091EJ8P2Y"
amount = 10000000000000000
[[ustx_balance]]
address = "ST1HB1T8WRNBYB0Y3T7WXZS38NKKPTBR3EG9EPJKR"
amount = 10000000000000000
[[ustx_balance]]
address = "STRYYQQ9M8KAF4NS7WNZQYY59X93XEKR31JP64CP"
amount = 10000000000000000
```

{{< notification params="is-warning is-light"
 content="Note that on the Xenon testnet and moving forward, <code>mstx_balance</code> is now <code>ustx_balance</code>." >}}

*Remember to replace the **seed** with the private key from your keychain, and replace **username** and **password** values with the same values you used in your `bitcoin.conf` file.*

### Starting Stacks Node as a Miner

In order to use the configuration file created in the last step, you have to run `stacks-node` with a slightly different command:

```bash
stacks-node start --config=xenon-miner.toml
```

{{< notification params="is-warning is-light"
 content="Note that if both stacks-node and xenon-miner.toml are in the same folder, the command above will work, however if you have your .toml conf file in another folder you must include that path after <code>--config=</code>." >}}

If you see output similar to the text below, then your miner is starting up and running correctly!

```none
INFO [1609703751.604620] [testnet/stacks-node/src/run_loop/neon.rs:121] [ThreadId(1)] Miner node: checking UTXOs at address: your-btc-address
INFO [1609703751.680088] [testnet/stacks-node/src/run_loop/neon.rs:128] [ThreadId(1)] Miner node: starting up, UTXOs found.
```

{{< notification params="is-danger is-light"
 content="Note that your miner does not show <code>Miner node: starting up, UTXOs found.</code> when it first starts up then it is not configured correctly. Please review the instructions from the beginning, and if you need help, ask in the Discord #mining channel." >}}

### General Strategy for Mining

The point of the competition is to learn more about how mining will work on mainnet. Instead of giving specific ideas, it is better to formulate your own strategy based on how Proof of Transfer (PoX) works.

For more information about mining, how it works, and the technical details behind it, please refer to the official resources below.

- [Stacks Node Configuration](https://docs.blockstack.org/references/stacks-node-configuration)
- [Understand Mining](https://docs.blockstack.org/understand-stacks/mining)
- [Technical Specs](https://docs.blockstack.org/understand-stacks/technical-specs)

When setting up `stacks-node`, it is possible to set the amount of BTC spent based on the following configuration options placed under `[burnchain]`.

| Config Option | Description |
| --- | --- |
| [burnchain_op_tx_fee](https://docs.blockstack.org/references/stacks-node-configuration#burnchain_op_tx_fee-optional) | Transaction fee per burnchain operation. |
| [burn_fee_cap](https://docs.blockstack.org/references/stacks-node-configuration#burn_fee_cap-optional) | Max burn fee for a transaction. |

## Other Resources

{{< notification params="is-danger is-light py-6 has-text-weight-bold"
 content="Please note that the information in these tutorials was intended for Part 1 and 2 of the Daemon Technologies competition on the Stacks Testnet.<br /><br />To find the most up to date information, please visit the <a href=\"https://docs.blockstack.org/\" target=\"_blank\" rel=\"noopener\">official Stacks Documentation website.</a>" >}}

{{< columns param="start-columns" >}}
  {{< resource-card title="Bitcoin Node"
    desc="A walkthrough for setting up and interacting with bitcoind for use with stacks-node."
    link="/stx-mining-setup/bitcoin-node" >}}
  {{< resource-card title="Stacks Node"
    desc="A walkthrough for setting up stacks-node and configuring it for mining."
    link="/stx-mining-setup/stacks-node" >}}
  {{< resource-card title="Stacks Keychain"
    desc="A walkthrough of setting up a stacks keychain using various tools."
    link="/stx-mining-setup/stacks-keychain" >}}
{{< columns param="end-columns" >}}
