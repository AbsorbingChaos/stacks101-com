---
title: "Stacks Mining FAQ"
date: 2020-12-12T15:36:10Z
description: "Answers to common questions."
layout: "section"
---

### Table of Contents

- [Using bitcoind and bitcoin-cli](#using-bitcoind-and-bitcoin-cli)
  - [Is using a local bitcoind instance required?](#is-using-a-local-bitcoind-instance-required)
  - [How can I set up a local instance of bitcoind?](#how-can-i-set-up-a-local-instance-of-bitcoind)
  - [Where can I learn more about using bitcoind / bitcoin-cli?](#where-can-i-learn-more-about-using-bitcoind--bitcoin-cli)
- [General Mining Questions](#general-mining-questions)
  - [How do I check that my miner is running correctly?](#how-do-i-check-that-my-miner-is-running-correctly)
  - [Where can I learn more about how mining works?](#where-can-i-learn-more-about-how-mining-works)
  - [Do I need to open any ports in my firewall?](#do-i-need-to-open-any-ports-in-my-firewall)
  - [How can I adjust how much BTC my miner is committing?](#how-can-i-adjust-how-much-btc-my-miner-is-committing)
  - [How much BTC is needed to mine?](#how-much-btc-is-needed-to-mine)
  - [Why did my Actual Win value change?](#why-did-my-actual-win-value-change)
- [Miscellaneous](#miscellaneous)
  - [What do these messages from stacks-node mean?](#what-do-these-messages-from-stacks-node-mean)
  - [I have an error not covered above, what do I do?](#i-have-an-error-not-covered-above-what-do-i-do)
  - [Where do I see my STX rewards?](#where-do-i-see-my-stx-rewards)
  - [What does "Won sortition" mean?](#what-does-won-sortition-mean)
  - [How long do I have to mine for before winning?](#how-long-do-i-have-to-mine-for-before-winning)
  - [What happens if I restart my miner?](#what-happens-if-i-restart-my-miner)
  - [Where is the default working dir?](#where-is-the-default-working-dir)
  - [Can I / should I / how do I delete the working dir data?](#can-i--should-i--how-do-i-delete-the-working-dir-data)
  - [Is there a minimum internet connection speed required for mining?](#is-there-a-minimum-internet-connection-speed-required-for-mining)

### What is a keychain?

A keychain represents a private cryptographic key used to generate your public BTC and STX addresses used with the Stacks 2.0 network.

-----

### How do I generate a keychain?

Generating a keychain requires [Node.js](https://nodejs.dev) as a prerequisite, and afterward there are two packages that help create the keychain. There is also a [video outlining the process](/stx-mining-videos/#freehold-stx-mining---creating-a-keychain-on-windows) on Windows.

Generate keychain command from the [Stacks documentation](https://docs.blockstack.org/start-mining#running-a-miner):

```bash
npx @stacks/cli make_keychain -t > keychain.json
```

Generate keychain using [stacks-gen](https://github.com/psq/stacks-gen) from Pascal:

```bash
npx -q stacks-gen sk --testnet > keychain.json
```

*Note: the commands above will save the keychain information to a file named `keychain.json`. You can view this file in a text editor or via the command line using `cat keychain.json`. or `type keychain.json`*

-----

### What endpoints are used with stacks-node?

It depends on what network you want to target.

Mainnet:

Testnet:

-----

### What is the correct configuration file to use with stacks-node?

An example of a working configuration file is [available here](/stx-mining-setup/#krypton-configuration-file).

xenon config
mainnet config
(both from stx-miner-setup??)

-----

### Should I use my 24 word phrase for the seed value in the config?

No, this should be the hex of the private key, which is a long string provided as part of your keychain.

-----

### How does the miner know my BTC/STX addresses?

The BTC and STX addresses are derived from the private key, which is provided to stacks-node via the `seed` value in the configuration file.

## Using bitcoind and bitcoin-cli

### Is using a local bitcoind instance required?

Yes.

-----

### How can I set up a local instance of bitcoind?

See Bitcoin Core website.

-----

### Where can I learn more about using bitcoind / bitcoin-cli?

There is a great resource for [Learning Bitcoin from the Command-Line](https://github.com/BlockchainCommons/Learning-Bitcoin-from-the-Command-Line/) from BlockchainCommons that outlines different configuration options and usage examples for bitcoind / bitcoin-cli.

## General Mining Questions

### How do I check that my miner is running correctly?

{{< notification params="is-info is-light"
 content="The easiest way to check that the miner is running correctly is by making sure the chain info comes into sync, and following that, the BTC balance starts to decrease. This means the miner is actively participating in the network." >}}

If running on the CLI, by querying the /v2/info endpoints of your miner against the main one.

```none
Testnet: http://krypton.blockstack.org:20443/v2/info
Mainnet: http://localhost:20443/v2/info
Local: 
```

-----

### Where can I learn more about how mining works?

The [Stacks documentation](https://docs.blockstack.org/understand-stacks/mining) contains a high-level overview of how mining works, and the leader election process is described in more detail [in SIP-001](https://github.com/blockstack/stacks-blockchain/blob/master/sip/sip-001-burn-election.md#leader-election).

-----

### Do I need to open any ports in my firewall?

No, this is not necessary for miner operation as it is designed to work behind a NAT connection.

-----

### How can I adjust how much BTC my miner is committing?

If running via the CLI, add the `burn_fee_cap` setting to the configuration under the `[burnchain]` section.

-----

### How much BTC is needed to mine?

The default spent by a miner is 20,000 sats per block it attempted to mine, and mainnet blocks move at the same rate as BTC blocks.

-----

### Why did my Actual Win value change?

As miners are working to agree on the same view of the chain, occasionally a longer fork can overtake the current one. This can orphan a block created by your miner, and is part of why the STX rewards for mining a block do not show up for 100 blocks.

-----

## Miscellaneous

### What do these messages from stacks-node mean?

There are some common messages from stacks-node that can be safely ignored. If you see any of the messages below, it is not an error that needs to be reported.

```none
[ThreadId(X)] convo:id=XX,outbound=true,peer=UNKNOWN+UNKNOWN://XX.XX.XX.XX:20444: failed to recv on P2P conversation: PermanentlyDrained
[ThreadId(X)] No open socket for XXX
[ThreadId(X)] Invalid block commit: no corresponding leader key at XXXX:X
[ThreadId(X)] REJECTED(XXXX) block-commit (hash) for (hash)
```

### I have an error not covered above, what do I do?

Post in the the Stacks Discord chat under #mining with more information about your configuration, the step you got stuck on, and any screenshots, if applicable. The community is really helpful!

-----

### Where do I see my STX rewards?

Miners spend Bitcoin (BTC) to earn Stacks (STX), however the rewards are not immediate. It takes 100 blocks for the STX rewards to appear based on the reward cycle.

-----

### What does "Won sortition" mean?

It means that your miner was selected to create the next block in the Stacks blockchain, and will receive a STX reward after a 100 block maturity time.

-----

### How long do I have to mine for before winning?

The node has to catch up with the network first, which takes longer as the chain height increases. check that your node /v2/info endpoint returns the same as the seed node.

From there, it is random, and depends on the number of miners participating. One winner is selected each election to create the next block in the Stacks chain.

-----

### What happens if I restart my miner?

By default, a folder containing the Stacks blockchain data is created in a temporary folder. Stopping and starting the miner will cause it to start over and have to resync with the network.

-----

### Where is the default working dir?

The default is `/tmp` and the folder name starts with `stacks-testnet-`

C:\tmp on Windows.

You can add working_dir = "PATH_TO_STORAGE" under [node] in your config file, but it is safer to empty the directory before starting the node, as there are some known issues restarting with existing data.

Also, this [gist from whoabuddy](https://gist.github.com/whoabuddy/033a47ad502ca30722187ed1baf3cc6e) creates a rotating backup of the working_dir on a set interval using rsync and cron. *Requires some modification*


-----

### Can I / should I / how do I delete the working dir data?

If you are not using the working_dir setting in your config, every time you run the miner a new folder will be created in the temporary folder for the chain state and the sync progress will reset to 0. This should not use up a lot of resources however older folders can be safely deleted.

*Note: Linux clears the `/tmp` folder on reboot.*

-----

### Is there a minimum internet connection speed required for mining?

Faster is better, stable is best, but success has been reported with 10mbps/2mbps on a rural wireless connection.
