---
title: "Setting up a STX Miner"
date: 2020-12-12T15:36:10Z
description: "Keep it simple, stacker."
layout: "section"
---

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

[burnchain]
chain = "bitcoin"
mode = "krypton"
peer_host = "bitcoind.krypton.blockstack.org"
rpc_port = 18443
peer_port = 18444

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

## Faucet Requests

Since the competition will be running on the Krypton infrastructure, it is using a private bitcoin regtest hosted by PBC.

*Note: all Windows commands below are using `PowerShell` instead of `cmd`! If you run into an error, be sure you have the [latest version installed](https://github.com/PowerShell/PowerShell/releases/tag/v7.1.0) from Microsoft.*

For all commands below, replace `BTCADDR` or `STXADDR` with your testnet BTC/STX addresses.

### Request tBTC

**Windows:**
`Invoke-WebRequest -Method POST -Body (@{"address"="BTCADDR";}) -Uri https://stacks-node-api.krypton.blockstack.org/extended/v1/faucets/btc`

**Mac/Linux:**
`curl -sS -X POST https://stacks-node-api.krypton.blockstack.org/extended/v1/faucets/btc?address=BTCADDR`

### Request STX

**Windows:**
`Invoke-WebRequest -Method POST -Body (@{"address"="STXADDR";}) -Uri https://stacks-node-api.krypton.blockstack.org/extended/v1/faucets/stx`

**Mac/Linux:**
`curl -sS -X POST https://stacks-node-api.krypton.blockstack.org/extended/v1/faucets/stx?address=STXADDR`

## Wallet Balances

### STX Balance

**Windows:** `Invoke-WebRequest -Uri https://stacks-node-api.krypton.blockstack.org/extended/v1/address/STXADDR/stx`

**Mac/Linux:** `curl https://stacks-node-api.krypton.blockstack.org/extended/v1/address/STXADDR/stx`

### tBTC Balance

**Windows:** `Invoke-WebRequest -Uri https://stacks-node-api.krypton.blockstack.org/extended/v1/faucets/btc/BTCADDR`

**Mac/Linux:** `curl https://stacks-node-api.krypton.blockstack.org/extended/v1/faucets/btc/BTCADDR`
