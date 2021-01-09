---
title: "Common STX Miner Questions"
date: 2020-12-12T15:36:10Z
description: "Keep it simple, stacker."
layout: "section"
---

{{< notification params="is-danger is-light py-6 has-text-weight-bold"
 content="Please note that the information on this page was intended for Part 1 of the Daemon Technologies competition.<br /><br />To find the most up to date information, please visit the <a href=\"https://docs.blockstack.org/\" target=\"_blank\" rel=\"noopener\">official Stacks Documentation website.</a>" >}}

### Table of Contents

- [Daemon Technologies Competition](#daemon-technologies-competition)
  - [Official Resources](#official-resources)
  - [Where do I sign up?](#where-do-i-sign-up)
  - [Can I sign up after the competition starts?](#can-i-sign-up-after-the-competition-starts)
  - [What is a keychain?](#what-is-a-keychain)
  - [How do I generate a keychain?](#how-do-i-generate-a-keychain)
  - [How will the winners be determined?](#how-will-the-winners-be-determined)
- [Using Mining-Bot](#using-mining-bot)
  - [Are there any videos outlining the setup process?](#are-there-any-videos-outlining-the-setup-process)
  - [What operating systems are supported?](#what-operating-systems-are-supported)
  - [Can I use a VPS?](#can-i-use-a-vps)
  - [Can I run more than one miner?](#can-i-run-more-than-one-miner)
  - [Do I have to use Daemon's Mining Bot to participate?](#do-i-have-to-use-daemons-mining-bot-to-participate)
  - [What is the difference between Mining-Bot and Mining-Local-Server?](#what-is-the-difference-between-mining-bot-and-mining-local-server)
- [Using stacks-node via CLI](#using-stacks-node-via-cli)
  - [Can I use the latest release of stacks-blockchain?](#can-i-use-the-latest-release-of-stacks-blockchain)
  - [What endpoints are used with stacks-node?](#what-endpoints-are-used-with-stacks-node)
  - [What is the correct configuration file to use with stacks-node?](#what-is-the-correct-configuration-file-to-use-with-stacks-node)
  - [Should I use my 24 word phrase for the seed value in the config?](#should-i-use-my-24-word-phrase-for-the-seed-value-in-the-config)
  - [How does the miner know my BTC/STX addresses?](#how-does-the-miner-know-my-btcstx-addresses)
- [Using bitcoind and bitcoin-cli](#using-bitcoind-and-bitcoin-cli)
  - [Is using a local bitcoind instance required?](#is-using-a-local-bitcoind-instance-required)
  - [How can I set up a local instance of bitcoind?](#how-can-i-set-up-a-local-instance-of-bitcoind)
  - [How do I replenish the faucet with tBTC?](#how-do-i-replenish-the-faucet-with-tbtc)
  - [Where can I learn more about using bitcoind / bitcoin-cli?](#where-can-i-learn-more-about-using-bitcoind--bitcoin-cli)
- [General Mining Questions](#general-mining-questions)
  - [How do I check that my miner is running correctly?](#how-do-i-check-that-my-miner-is-running-correctly)
  - [Where can I learn more about how mining works?](#where-can-i-learn-more-about-how-mining-works)
  - [Do I need to open any ports in my firewall?](#do-i-need-to-open-any-ports-in-my-firewall)
  - [How can I adjust how much BTC my miner is committing?](#how-can-i-adjust-how-much-btc-my-miner-is-committing)
  - [How much BTC is needed to mine?](#how-much-btc-is-needed-to-mine)
  - [What if I am behind / ahead of the main chain?](#what-if-i-am-behind--ahead-of-the-main-chain)
  - [What if I cannot find my address under miner / mining info?](#what-if-i-cannot-find-my-address-under-miner--mining-info)
  - [Why did my Actual Win value change?](#why-did-my-actual-win-value-change)
- [Miscellaneous](#miscellaneous)
  - [What do these messages from stacks-node mean?](#what-do-these-messages-from-stacks-node-mean)
  - [I have an error not covered above, what do I do?](#i-have-an-error-not-covered-above-what-do-i-do)
  - [Why do I not see my testnet BTC balance in an explorer?](#why-do-i-not-see-my-testnet-btc-balance-in-an-explorer)
  - [Why do I not see my testnet STX balance in the Stacks Wallet?](#why-do-i-not-see-my-testnet-stx-balance-in-the-stacks-wallet)
  - [Where do I see my STX rewards?](#where-do-i-see-my-stx-rewards)
  - [What does "Won sortition" mean?](#what-does-won-sortition-mean)
  - [How long do I have to mine for before winning?](#how-long-do-i-have-to-mine-for-before-winning)
  - [What happens if I restart my miner?](#what-happens-if-i-restart-my-miner)
  - [Where is the default working dir?](#where-is-the-default-working-dir)
  - [Can I / should I / how do I delete the working dir data?](#can-i--should-i--how-do-i-delete-the-working-dir-data)
  - [Is there a minimum internet connection speed required for mining?](#is-there-a-minimum-internet-connection-speed-required-for-mining)

## Daemon Technologies Competition

### Official Resources

The [official Stacks documentation](https://docs.blockstack.org/en-US/understand-stacks/running-testnet-node) refers to the next phase of testnet, Xenon, and should not be used for Part 1 of the competition.

**Instead, please see the links below from Daemon Technologies:**

- [Official Website for the Competition](https://daemontechnologies.co/minestx-challenge)
- [Official FAQ from Daemon Technologies](https://daemon-technologies.github.io/docs/Mining-Bot-Alpha-Version/FAQ/)
- [Mining-Bot Setup and Configuration](https://daemon-technologies.github.io/docs/Mining-Bot-Alpha-Version/Build-Before-Using/Mining-Bot-Alpha-Tutorial-EN.html)
- [Mining-Bot User's Guide](https://daemon-technologies.github.io/docs/Mining-Bot-Alpha-Version/Use-Mining-Bot-For-Mining/)
- [Mining-Bot Alpha Release](https://github.com/Daemon-Technologies/Mining-Bot/releases/latest)

*Note: This FAQ represents common questions from Discord and other outlets, and is a supplement to the [official FAQ](https://daemontechnologies.co/minestx-challenge#faq) from Daemon Technologies.*

-----

### Where do I sign up?

Use the register button on the [competition sign-up page](https://daemontechnologies.co/minestx-challenge), and enter your name, email address, and keychain information (BTC and STX addresses).

-----

### Can I sign up after the competition starts?

Yes, but to be eligible at the end you must mine at least 30% of the total blocks produced over the course of the competition.

For more information, see the [official rules](https://daemontechnologies.co/stx-mining-rules).

-----

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

*Note: the commands above will save the keychain information to a file named `keychain.json`. You can view this file in a text editor or via the command line using `cat keychain.json`.*

-----

### How will the winners be determined?

The original competition rules were going to be judged by efficiency, taking into account the total amount of BTC burnt compared to the number of Stacks blocks created. **This is no longer the case due to a bug, and all miners will be rewarded for participation.**

For more information, please see the [forum post from Daemon Technologies](https://forum.stacks.org/t/mining-contest-update-new-judging-prizing/11462) and the [official rules](https://daemontechnologies.co/stx-mining-rules).

## Using Mining-Bot

### Are there any videos outlining the setup process?

Yes! Please see the videos linked below.

- [Setup Mining-Bot Alpha 1.0.0 Release on Mac OSX](/stx-mining-videos/#setup-mining-bot-alpha-100-release-on-mac-osx)
- [Setup Mining-Bot Alpha 1.0.0 Release on Windows](/stx-mining-videos/#setup-mining-bot-alpha-100-release-on-windows)

Additionally, there are several videos with one on one walkthroughs for configuration on the [Mining Videos](/stx-mining-videos) page, however note that the most up to date information can be found in the videos above.

-----

### What operating systems are supported?

The Mining Bot works with Windows, Mac, and Linux, however Windows users will need to have [Windows Subsystem for Linux (WSL)](https://docs.microsoft.com/en-us/windows/wsl/install-win10#manual-installation-steps) version 2 installed.

To see what version of WSL is installed on your machine, run the following command in Powershell:

```none
wsl -l -v
```

-----

### Can I use a VPS?

This is not a supported configuration for Mining-Bot. If you chose to do so, **it is at your own risk** and we cannot offer support.

{{< notification params="is-danger is-light"
 content="Please note that opening firewall ports exposes your system to the Internet. This can be dangerous and create unexpected or undesired results. It is recommended to run mining-bot on a local machine rather than on a VPS." >}}

If you decide to use a VPS anyway, please consider forwarding ports via ssh rather than opening them through the firewall.

-----

### Can I run more than one miner?

No, for the competition only running one miner is allowed and the same person cannot be rewarded twice for participation.

For more information, see the [official rules](https://daemontechnologies.co/stx-mining-rules).

-----

### Do I have to use Daemon's Mining Bot to participate?

No, however it is recommended. The Mining-Bot simplifies the process of running a node and analyzing the related data.

If you plan to use stacks-node independent of the Mining-Bot or require a CLI configuration, please see the section [using stacks-node via CLI](#using-stacks-node-via-cli).

-----

### What is the difference between Mining-Bot and Mining-Local-Server?

Mining-Local-Server handles the back-end process of starting and stopping stacks-node.

Mining-Bot is the frontend GUI for interacting with a miner, including a page for managing the wallet as well as starting and stopping the stacks-node.

The [Mining-Bot Alpha Release](https://github.com/Daemon-Technologies/Mining-Bot/releases/latest) contains both Mining-Local-Server and Mining-Bot, and includes an option to download the stacks-node application as well - all in one package!

## Using stacks-node via CLI

### Can I use the latest release of stacks-blockchain?

No, we are using `v24.0.0.0-xenon` to participate in the competition, and using the incorrect release can cause compatibility issues.

The Mining Bot will automatically download the correct version from the Mining Client tab.

If you are using stacks-node from the CLI, the [v24.0.0.0-xenon release](https://github.com/blockstack/stacks-blockchain/releases/tag/v24.0.0.0-xenon) is available on GitHub, or if building locally, you can use the command below to check out the correct tag.

```bash
git clone https://github.com/blockstack/stacks-blockchain.git
cd stacks-blockchain
git checkout v24.0.0.0-xenon
```

*Note: the release tag says `Xenon` but the config file will tell the node to connect to the `Krypton` testnet network.*

-----

### What endpoints are used with stacks-node?

A list of all the updated endpoints for Krypton is [available here](/stx-mining-setup/#krypton-information).

-----

### What is the correct configuration file to use with stacks-node?

An example of a working configuration file is [available here](/stx-mining-setup/#krypton-configuration-file).

-----

### Should I use my 24 word phrase for the seed value in the config?

No, this should be the hex of the private key, which is a long string provided as part of your keychain.

-----

### How does the miner know my BTC/STX addresses?

The BTC and STX addresses are derived from the private key, which is provided to stacks-node via the `seed` value in the configuration file.

## Using bitcoind and bitcoin-cli

### Is using a local bitcoind instance required?

No, but it may help with synchronization issues as there are a lot of miners connecting to the main bitcoind node hosted for Krypton.

-----

### How can I set up a local instance of bitcoind?

See [this gist from LNow](https://gist.github.com/LNow/741bc280d2062de78372bcbd82f32627) with instructions on how to set up a local bitcoind instance that connects to the Krypton bitcoind regtest.

-----

### How do I replenish the faucet with tBTC?

See [this gist from whoabuddy](https://gist.github.com/whoabuddy/05e98cd8d83a671f39e8c15d6a6a5e9d) with instructions on how to configure bitcoind with your wallet information and send a transaction back to the faucet.

{{< notification params="is-info is-light"
 content="If you are not using testnet Bitcoin (tBTC) or took more than you need from the faucet, please use the instructions above to send it back. There are several miners online and some who are still joining the competition, and we want everyone to have a fun experience!" >}}

-----

### Where can I learn more about using bitcoind / bitcoin-cli?

There is a great resource for [Learning Bitcoin from the Command-Line](https://github.com/BlockchainCommons/Learning-Bitcoin-from-the-Command-Line/) from BlockchainCommons that outlines different configuration options and usage examples for bitcoind / bitcoin-cli.

## General Mining Questions

### How do I check that my miner is running correctly?

{{< notification params="is-info is-light"
 content="The easiest way to check that the miner is running correctly is by making sure the chain info comes into sync, and following that, the tBTC balance starts to decrease. This means the miner is actively participating in the network." >}}

If running the Mining Bot, the status is displayed on the Mining Client page.

If running on the CLI, by querying the /v2/info endpoints of your miner against the main krypton one.

```none
http://krypton.blockstack.org:20443/v2/info
http://localhost:20443/v2/info
```

-----

### Where can I learn more about how mining works?

The [Stacks documentation](https://docs.blockstack.org/understand-stacks/mining) contains a high-level overview of how mining works, and the leader election process is described in more detail [in SIP-001](https://github.com/blockstack/stacks-blockchain/blob/master/sip/sip-001-burn-election.md#leader-election).

-----

### Do I need to open any ports in my firewall?

No, this is not necessary for miner operation as it is designed to work behind a NAT connection.

-----

### How can I adjust how much BTC my miner is committing?

If using the Mining-Bot, you can adjust the value when you are starting up the miner.

If running via the CLI, add the `burn_fee_cap` setting to the configuration under the `[burnchain]` section.

-----

### How much BTC is needed to mine?

The default spent by a miner is 20,000 sats per block it attempted to mine, and testnet blocks on Krypton move at 1 block per 2 minutes (on average).

-----

### What if I am behind / ahead of the main chain?

Since this is a distributed network, different miners will occasionally have different views of the chain. At this point, it is best to allow the miner to keep running as long as you see the tBTC in your wallet decreasing.

-----

### What if I cannot find my address under miner / mining info?

The address will definitely be on the list if you win a leader election and mine a STX block. Give it time to run, and eventually your info should show up here.

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

Alternatively, create an issue on the [Daemon Technologies GitHub](https://github.com/Daemon-Technologies/Mining-Bot/issues) page for Mining-Bot, outlining the steps you took, the errors you received, and additional information as needed.

-----

### Why do I not see my testnet BTC balance in an explorer?

The Krypton phase of testnet runs on a private BTC regtest server that is separate from the public BTC testnet. Any online block explorers will not be able to find the wallet information.

-----

### Why do I not see my testnet STX balance in the Stacks Wallet?

The Stacks Wallet and other wallets in the ecosystem are using the Xenon phase of testnet, which relies on a different infrastructure. The Mining Bot or [CLI commands](/stx-mining-setup/#faucet-requests) are the best way to reliably access the information.

-----

### Where do I see my STX rewards?

Miners spend Bitcoin (BTC) to earn Stacks (STX), however the rewards are not immediate. It takes 100 blocks for the STX rewards to appear based on the reward cycle.

-----

### What does "Won sortition" mean?

It means that your miner was selected to create the next block in the Stacks blockchain, and will receive the reward of 500 STX after a 100 block maturity time.

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

You can add working_dir = "PATH_TO_STORAGE" under [node] in your config file, but it is safer to empty the directory before starting the node, as there are some known issues restarting with existing data.

-----

### Can I / should I / how do I delete the working dir data?

If you are not using the working_dir setting in your config, every time you run the miner a new folder will be created in the temporary folder for the chain state and the sync progress will reset to 0. This should not use up a lot of resources however older folders can be safely deleted.

*Note: Linux clears the `/tmp` folder on reboot.*

-----

### Is there a minimum internet connection speed required for mining?

Faster is better, stable is best, but I can report success with 10mbps/2mbps on a rural wireless connection.
