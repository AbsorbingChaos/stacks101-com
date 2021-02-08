---
title: "Setting up a Bitcoin Node"
date: 2021-01-02T15:36:10Z
description: "Tracking sats like a pro"
layout: "section"
---

### Table of Contents

- [Set up a Local Bitcoin Node](#set-up-a-local-bitcoin-node)
  - [Bitcoind System Requirements](#bitcoind-system-requirements)
  - [Bitcoind Configuration File](#bitcoind-configuration-file)
  - [Verify Bitcoind is Running](#verify-bitcoind-is-running)
  - [Interacting with Bitcoind](#interacting-with-bitcoind)
  - [Bash Alias Function](#bash-alias-function)
- [Other Resources](#other-resources)

{{< notification params="is-danger is-light py-6 has-text-weight-bold"
 content="Please note that the information in these tutorials was intended for Part 1 and 2 of the Daemon Technologies competition on the Stacks Testnet.<br /><br />To find the most up to date information, please visit the <a href=\"https://docs.blockstack.org/\" target=\"_blank\" rel=\"noopener\">official Stacks Documentation website.</a>" >}}

## Set up a Local Bitcoin Node

The first step to setting up a miner is setting up a local bitcoin node using bitcoind.

More information about what it means to run a full bitcoin node, instructions for downloading and setting it up on each operating system, and various configuration options are [all outlined on bitcoin.org.](https://bitcoin.org/en/full-node#what-is-a-full-node)

Once you download the software, it is good practice to verify the release signatures to make sure the software was not modified or changed from its original state. PGP signatures can be verified with [Gpg4win on Windows](https://www.gpg4win.de/index.html) and [gpg on Linux](https://www.gnupg.org/gph/en/manual/x135.html).

{{< notification params="is-danger is-light"
 content="Pro Tip: Signature verification is very important to learn when running applications like bitcoind, especially on mainnet. If someone were to modify the code and insert something malicious, then you would see the signatures do not match and know not to run it." >}}

### Bitcoind System Requirements

A local bitcoin node runs as a command-line application (CLI) by default, and there are additional instructions on how to add a graphical user interface (GUI) depending on your operating system.

{{< notification params="is-info is-light"
 content="This tutorial assumes you are using the CLI version, and anyone using the GUI (<a href=\"https://bitcoin.org/en/full-node#other-linux-gui\" rel=\"noopener\" target=\"_blank\">bitcoin-qt on Linux</a> or <a href=\"https://bitcoin.org/en/full-node#win10-gui\" rel=\"noopener\" target=\"_blank\">Bitcoin Core on Windows</a>) will need to adapt the instructions for their own setup. The bitcoin.conf file used by the GUI should be accessible via the settings / preferences panel." >}}

The bitcoin testnet currently requires **30-40gb of storage**, and the bitcoin mainnet requires upwards of **350gb of storage**.

Please consider this requirement for both storage space and network quality when selecting where to run a node, as it will be required to download all past transactions on the blockchain.

### Bitcoind Configuration File

When starting up `bitcoind` you can use a configuration file to simplify the process and create a consistent result.

Instead of running a command like:

```bash
bitcoind -printtoconsole -testnet -server=1 -rpcuser=username -rpcpassword=password -txindex=0 -listen=1 -rpcserialversion=0 -maxorphantx=1 -banscore=1 -bind=0.0.0.0:18333 -rpcbind=0.0.0.0:18332 -rpcport=18332
```

You can simply run `bitcoind -conf=path/to/bitcoin.conf` and let it use the values from the configuration file.

```none
server=1
# use the below setting to run in the background
# daemon=1
rpcuser=replace-with-your-bitcoind-username
rpcpassword=replace-with-your-bitcoind-password
rpcallowip=127.0.0.1
# use the below settings at your own risk, as it
# opens up bitcoind to access from any IP address
# rpcallowip=0.0.0.0/0
# rpcallowip=::/0
testnet=1
txindex=0
listen=1
rpcserialversion=0
maxorphantx=1
banscore=1

[test]
bind=0.0.0.0:18333
rpcbind=0.0.0.0:18332
rpcport=18332
```

### Verify Bitcoind is Running

{{< notification params="is-warning is-light"
 content="On Windows, you can verify the process is running by opening the task manager (<kbd>CTRL + Shift + Esc</kbd>) and searching for the process name `bitcoind` under details. The commands in this section were written for Mac, Linux, or Windows WSL users." >}}

Search for the bitcoind process using `ps`:

```bash
ps -ax | grep bitcoin | grep -v grep
```

Which will output something similar to:

```bash
1969 ?        Ssl   80:26 bitcoind
```

Here we can see bitcoind is running. If it did *not* appear, then you need to start your bitcoin node again.

{{< notification params="is-info is-light"
 content="Pro tip: you can run <code>lsof -i -P -n | grep LISTEN</code> to check the ports in use by bitcoind, which will output something similar to:<br /><br /><code>bitcoind 1969 whoabuddy   10u  IPv4  26807      0t0  TCP 127.0.0.1:18332 (LISTEN)</code>" >}}

### Interacting with Bitcoind

The easiest way to interact with `bitcoind` is to use `bitcoin-cli`. There are various commands available to interact with the bitcoind daemon.

{{< notification params="is-info is-light"
 content="Much more information and a full list of commands is available <a href=\"https://developer.bitcoin.org/reference/rpc/\" rel=\"noopener\" target=\"_blank\">on the developer.bitcoin.org RPC API Reference</a>" >}}

| Description | Command |
| --- | --- |
| Get blockchain info including sync progress | `getblockchaininfo` |
| Import wallet address for checking UTXOs | `importaddress` |
| Import private key for making transactions | `importprivkey` |
| Get wallet info | `getwalletinfo` |
| See wallet transactions | `listunspent` |
| See adresses in wallet | `listaddressgroupings` |
| Stop bitcoind | `stop` |

{{< notification params="is-warning is-light"
 content="Note that all commands above require using the correct flags with bitcoin-cli so that it knows how to interact with bitcoind. All configuration values below must match your configuration in bitcoin.conf." >}}

For example, the command below would be used with `importprivkey` above.

```bash
bitcoin-cli -testnet -rpcport=18332 -rpcuser=user -rpcpassword=password -rpcclienttimeout=7200 importprivkey "wif-formatted-private-key"
```

*Remember to replace the **rpcport**, **rpcuser**, and **rpcpassword** values with the same values you used in your `bitcoin.conf` file.*

### Bash Alias Function

In the same way we use `bitcion.conf` to prevent using a long command every time we start `bitcoind`, we can create a bash alias function to make running `bitcoin-cli` much simpler.

{{< notification params="is-warning is-light"
 content="The commands in this section were written for Linux users but should work with any environment that uses .bashrc by default. This will not work with Windows, but it will work with Windows WSL and Ubuntu." >}}

Instead of running a command like:

```bash
bitcoin-cli -testnet -rpcport=18332 -rpcuser=user -rpcpassword=password getblockchaininfo
```

You can simply run `bitcoin-cli-stx getblockchaininfo` and it will automatically fill in the configuration values.

{{< notification params="is-warning is-light"
 content="Note that all configuration values below must match your configuration in bitcoin.conf." >}}

To setup a custom function, back up and then edit the `.bashrc` file with your editor of choice.

```bash
cp .bashrc .bashrc-backup
nano .bashrc
```

Add the following code to the end of the file, and save your changes.

```bash
# function to simplify using bitcoin-cli
bitcoin-cli-stx() {
  # prefills testnet and rpc port info
  bitcoin-cli -testnet -rpcport=18332 -rpcuser=user -rpcpassword=password "$@"
}
```

*Remember to replace the **rpcport**, **rpcuser**, and **rpcpassword** values with the same values you used in your `bitcoin.conf` file.*

Close and open the terminal, then test out the command:

```bash
bitcoin-cli-stx getblockchaininfo
```

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
