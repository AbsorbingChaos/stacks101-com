---
title: "Setting up a STX Miner"
date: 2020-12-12T15:36:10Z
description: "Keep it simple, stacker."
layout: "section"
---

## Mining Bot Setup

The recent release of Mining-Bot greatly simplifies the process of both getting a Stacks miner node online as well as reviewing the associated information.

- [Mining-Bot Release on GitHub](https://github.com/Daemon-Technologies/Mining-Bot/releases/latest)

Using the Mining-Bot allows you to complete the following from a web interface:

- download stacks-node for use with the Mining-Bot
- manage BTC/STX wallet info and faucet requests
- set the burn fee used while mining
- view statistics about the chain
- view statistics about other miners

More information on installation and usage can be found in the [walkthrough videos linked here](/mining-videos#mining-bot).

*Note: If you are using **Windows** the Mining-Bot requires [Windows Subsystem for Linux (WSL)](https://docs.microsoft.com/en-us/windows/wsl/install-win10#manual-installation-steps) to correctly operate.

## Krypton Information

The current Stacks testnet has transitioned to a new phase (Xenon), but the competition will run on a slightly older infrastructure based on the Krypton phase.

Please note some of the key differences below!

| Resources | Value |
| --- | --- |
| Miner | `krypton.blockstack.org:20444` | 
| Miner Status | `http://krypton.blockstack.org:20443/v2/info` | 
| API   | `stacks-node-api.krypton.blockstack.org` |
| bitcoind | `bitcoind.krypton.blockstack.org` |

## Krypton Configuration File

```toml
[node]
rpc_bind = "0.0.0.0:20443"
p2p_bind = "0.0.0.0:20444"
bootstrap_node = "048dd4f26101715853533dee005f0915375854fd5be73405f679c1917a5d4d16aaaf3c4c0d7a9c132a36b8c5fe1287f07dad8c910174d789eb24bdfb5ae26f5f27@krypton.blockstack.org:20444"
# Enter your private key here!
seed = "replace-with-your-private-key"
miner = true
# uncomment to add a working directory
# that saves chainstate info, but
# may cause errors if data corrupted
# default is /tmp/stacks-testnet-random
# working_dir = /path/to/working/dir

[burnchain]
chain = "bitcoin"
mode = "krypton"
peer_host = "bitcoind.krypton.blockstack.org"
rpc_port = 18443
peer_port = 18444
# uncomment to change burn fee cap
# burn_fee_cap = 20000

# note this needs to be mstx NOT ustx
# when using Krypton with tagged version
# 24.0.0.0-xenon for the competition
[[mstx_balance]]
address = "STB44HYPYAT2BB2QE513NSP81HTMYWBJP02HPGK6"
amount = 10000000000000000
[[mstx_balance]]
address = "ST11NJTTKGVT6D1HY4NJRVQWMQM7TVAR091EJ8P2Y"
amount = 10000000000000000
[[mstx_balance]]
address = "ST1HB1T8WRNBYB0Y3T7WXZS38NKKPTBR3EG9EPJKR"
amount = 10000000000000000
[[mstx_balance]]
address = "STRYYQQ9M8KAF4NS7WNZQYY59X93XEKR31JP64CP"
amount = 10000000000000000
```

You can also [download a copy](https://raw.githubusercontent.com/AbsorbingChaos/bks-setup-miner/master/krypton-miner-conf.toml) of the Krypton configuration file from GitHub.

## Faucet Requests

Since the competition will be running on the Krypton infrastructure, it is using a private bitcoin regtest hosted by PBC.

*Note: all Windows commands below are using `PowerShell` instead of `cmd`! If you run into an error, be sure you have the [latest version installed](https://github.com/PowerShell/PowerShell/releases/tag/v7.1.0) from Microsoft.*

For all commands below, replace `BTCADDR` or `STXADDR` with your testnet BTC/STX addresses.

### Request tBTC

**Windows:**
`Invoke-WebRequest -Method POST -Body (@{"address"="BTCADDR";}) -Uri https://stacks-node-api.krypton.blockstack.org/extended/v1/faucets/btc`

**Mac/Linux:**
`curl -sS -X POST "https://stacks-node-api.krypton.blockstack.org/extended/v1/faucets/btc?address=BTCADDR"`

### Request STX

**Windows:**
`Invoke-WebRequest -Method POST -Body (@{"address"="STXADDR";}) -Uri https://stacks-node-api.krypton.blockstack.org/extended/v1/faucets/stx`

**Mac/Linux:**
`curl -sS -X POST "https://stacks-node-api.krypton.blockstack.org/extended/v1/faucets/stx?address=STXADDR"`

## Wallet Balances

### STX Balance

**Windows:**
`Invoke-WebRequest -Uri https://stacks-node-api.krypton.blockstack.org/extended/v1/address/STXADDR/stx`

**Mac/Linux:**
`curl https://stacks-node-api.krypton.blockstack.org/extended/v1/address/STXADDR/stx`

### tBTC Balance

**Windows:**
`Invoke-WebRequest -Uri https://stacks-node-api.krypton.blockstack.org/extended/v1/faucets/btc/BTCADDR`

**Mac/Linux:**
`curl https://stacks-node-api.krypton.blockstack.org/extended/v1/faucets/btc/BTCADDR`

## Automated CLI Setup

[This repository](https://github.com/AbsorbingChaos/bks-setup-miner) contains a simple shell script that will help you set up and run a Miner Node on the Stacks 2.0 Testnet. It **does not** include the Mining-Bot, and is designed for and used with with Ubuntu 20.04 LTS on a virtual machine.

Please be sure to:

- read the README before using
- do **not** run as `root` user
- [file an issue](https://github.com/AbsorbingChaos/bks-setup-miner/issues) if you run into a problem
