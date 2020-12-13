---
title: "Common STX Miner Questions"
date: 2020-12-12T15:36:10Z
description: "Keep it simple, stacker."
layout: "section"
---

## Tips and Tricks

TODO: Insert TOC

### Competition / Registration

**Where do I sign up?**
: Use the register button on the [competition sign-up page](https://daemontechnologies.co/minestx-challenge), and enter your name, email address, and keychain information (BTC and STX addresses).

-----

**What is a keychain?**
: A keychain represents a private cryptographic key used to generate your public BTC and STX addresses used with the Stacks 2.0 network.

-----

**How do I generate a keychain?**
: Generating a keychain requires [Node.js](https://nodejs.dev) as a prerequisite, and afterward there are two packages that help create the keychain. There is also a [video outlining the process](https://youtu.be/82b8PGoQYpI) on Windows.
: Generate keychain command from the [Stacks documentation](https://docs.blockstack.org/start-mining#running-a-miner):
: `npx @stacks/cli make_keychain -t > keychain.json`
: Generate keychain using [stacks-gen](https://github.com/psq/stacks-gen) from Pascal: 
: `npx -q stacks-gen sk --testnet > keychain.json`

-----

**Do I need to run more than one miner?**
: No, for the competition only running one miner is needed, and the same person cannot be rewarded twice for participation. For more information, see the [official rules](https://daemontechnologies.co/stx-mining-rules).

-----

**How will the winners be determined?**
: The winners are determined by two factors: their efficiency ratio and overall distribution.
: **Efficiency Ratio:** First, we'll calculate how efficiently you mined. This is done by taking the total number of block rewards you earned and dividing it by the total amount of testnet BTC you spent.
: **Distribution:** With everyone's Efficiency Ratio in hand, we'll compare them to distribute the 200,000 STX pool proportionally to all miners that attempted to mine at least 30% of all blocks during the period.
: For more information, see the [official rules](https://daemontechnologies.co/stx-mining-rules).

-----

### Using Stacks-Node

What does "Won sortition" mean???
: it means you won leader election

Is my configuration file correct?
: An example of a working configuration file is posted below.

Updated endpoints?

How long is a block? Just to confirm that each block is 10mins?

### Using Mining-Bot

I have an error, what do I do?
: post an issue on GitHub

### Miscellaneous

**How would I create a Profit and Loss statement?**
: A P&L statement is just recording how much you spend and how much you earn, which you can do per block, or per any arbitrary time period by checking your BTC and STX balances. 

**Why do I not see my testnet BTC balance in an explorer?**
: The Krypton phase of testnet runs on a private BTC regtest server that is separate from the public BTC testnet. Any online block explorers will not be able to find the information.

**Why do I not see my testnet STX balance in the Stacks Wallet?**
: The Stacks Wallet and other wallets in the ecosystem are using the Xenon phase of testnet, which relies on a different infrastructure.

**How much BTC is needed to mine?**
: The default spent by a miner is 20,000 sats per block it attempted to mine, and testnet blocks on Krypton move at 1 block per 2 minutes (on average).

**Is there a minimum internet connection speed required for mining?**
: Faster is better, stable is best, but I'm using 10/2 on a rural wireless connection and successful.

**Do I have to use Daemon's Mining Bot to participate in STX Mining Challenge Part 1?**
: No, although it makes things easier and is recommended.

**How can I adjust how much BTC my miner is committing?**
: By adding the `burn_fee_cap` setting to the configuration under the Burnchain section.

**How do I check that my miner is running correctly?**
: By querying the /v2/info endpoints of your miner against the main krypton one.

-----

### More from Discord:

Hello guys, so right now, I can start setting up and mining in the testnet and during the contest if I successfully mines a testnet block, I will get a reward. Is this correct?

is this succeeded running mining on testnet? (image of miner - show what it should look like)

what is difference between Mining-Local-Server and Mining-Bot? I don't know which one to run.

I'm working with a VPS. so it is not local pc. Could there be a problem with that?

how long do you usually have to mine for before winning a sortition? 
Your node has to catch up first, which takes longer as the chain height increases, check that your node /v2/info endpoint returns the same as the seed node

How many nodes are running in testnet mining challenge ? Where can I see?

One more newb question: the miner config only has the private key as the seed. and does not have the BTC address and STX address. Does the seed infers those addresses so that I do not have to explicitly specify them?
the other way around, the BTC and STX addresses are derived from the seed.  The BTC and STX addresses are actually the same value, encoded differently to make it readable (so knowing one, you can get the other, and vice versa)

How to know it started:
```
INFO [1607834532.026731] [testnet/stacks-node/src/run_loop/neon.rs:114] [ThreadId(1)] Miner node: checking UTXOs at address: .....
INFO [1607834535.353418] [testnet/stacks-node/src/run_loop/neon.rs:121] [ThreadId(1)] Miner node: starting up, UTXOs found.
```

This error is OK:
```
convo:id=58,outbound=true,peer=UNKNOWN+UNKNOWN://13.229.109.181:20444: failed to recv on P2P conversation: PermanentlyDrained
```

Where is the default working dir? I prob need to manually delete the data there.
you can add working_dir = "PATH_TO_STORAGE" under [node] in your config file, but it is safer to empty the directory before starting the node, there are some issues restarting with existing data

Friends using Raspberry Pi, how did you solve the storage problem? Are you using an SD card or have you integrated an SSD? Is 32 GB enough for the SD card?

is there an easy way to deal with this? Also how can we find block height for Krypton for the contest?
/v2/info ?

Where to find the latest release?
https://github.com/blockstack/stacks-blockchain/releases/latest

How do I request tBTC?
Windows: Invoke-Webrequest
Mac/Linux: Curl

----

Thanks Pascal!

the current tutorials show information for xenon, but if you need krypton info, that you should use for the upcoming mining challenge starting 12/15/20, here are the endpoints to use:
- miner: krypton.blockstack.org:20444
- API: stacks-node-api.krypton.blockstack.org (not needed for the miner)
- bitcoind: bitcoind.krypton.blockstack.org (rpc port is 18443, peer port is 18444)
No need to run your own bitcoind, as you need to use the one above
STX faucet: curl -sS -X POST https://stacks-node-api.krypton.blockstack.org/extended/v1/faucets/stx?address=YOUR_STX_ADDRESS
BTC faucet: curl -sS -X POST https://stacks-node-api.krypton.blockstack.org/extended/v1/faucets/btc?address=YOUR_BTC_ADDRESS
Check BTC balance: curl https://stacks-node-api.krypton.blockstack.org/extended/v1/faucets/btc/YOUR_BTC_ADDRESS
Check STX balance: curl https://stacks-node-api.krypton.blockstack.org/extended/v1/address/YOUR_STX_ADDRESS/stx

-----

For those participating in the Daemon Technologies competition, I made a quick video walking through how to create a keychain and register using Windows 10. For Mac/Linux the only difference is to install Node.js via nvm (documented on their website https://nodejs.dev/). The commands to create a keychain are below the video.
https://youtu.be/82b8PGoQYpI

Generate keychain command from the docs:
npx @stacks/cli make_keychain -t > keychain.json
https://docs.blockstack.org/start-mining#running-a-miner

Or you can use stacks-gen:
npx -q stacks-gen sk --testnet > keychain.json
https://github.com/psq/stacks-gen