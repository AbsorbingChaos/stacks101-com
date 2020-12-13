---
title: "Common STX Miner Questions"
date: 2020-12-12T15:36:10Z
description: "Keep it simple, stacker."
layout: "section"
---

## Tips and Tricks

To Do: Add common questions from Discord

First Term
: This is the definition of the first term.

Second Term
: This is one definition of the second term.
: This is another definition of the second term.


What does "Won sortition" mean???
it means you won leader election

Each participant can run 1 mining bot per STX/BTC address pair ?
For the competition it is just one bot per person altogether AFAIK

how would i create a P&L statement?
stx balance is profit, btc balance is loss.
writing a P&L statement is just recording how much you spend and how much you earn, which you can do per block, per day, per arbitrary time period

hi, I am trying to register for the testnet mining and it is asking for the testnet BTC & STX addresses. Where can I get those two? thanks for helping

Can I use a wallet?
No matter what wallet I put my 24-word Secret Key in, it shows "zero" everywhere.

how much btc is needed?
20,000 sats per block attempt

For phase 1 challenge, will there be only 1 winner or some percentages of the most efficient miners?

What is the correct configuration file?

Do I understand the rules correctly: In order to increase "Efficiency Ratio" within the competition one has to generate BTC testnet transactions from/to registered BTC address?
Or to rephrase: How can I affect my "Efficiency Ratio" within the competition, to not "game the rules" ?

Is there a minimum internet connection speed required for mining ?
Faster is better, stable is best, but I'm using 10/2 on a rural wireless connection and successful.

Hello guys, can I get a confirmation that I don't have to use Daemon's Mining Bot to participate in STX Mining Challenge Part 1? I am going to run a VPS, so I just can't install the Daemon's Mining-Local-Server on it. @Gavin @Xan

Hi, I have a Xenon miner running. According to https://docs.blockstack.org/understand-stacks/mining#probability-to-mine-next-block the chances of getting elected to mine the next block increases if the amount of BTC being transferred increases. How can I adjust how much BTC my miner is committing?


how to check that my miner is running well.. its perfectly fine that after running the miner for 24hrs I've not won any blocks?

Just to confirm that each block is 10mins?

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