---
title: "Common STX Miner Questions"
date: 2020-12-12T15:36:10Z
description: "Keep it simple, stacker."
layout: "section"
---

### Table of Contents

- [Daemon Technologies Competition](#daemon-technologies-competition)
  - [Important Considerations](#important-considerations)
  - [Registration](#registration)
  - [Using Mining-Bot](#using-mining-bot)
- [Tips and Tricks](#tips-and-tricks)
  - [Configuring Stacks-Node CLI](#configuring-stacks-node-cli)
  - [Running stacks-node](#running-stacks-node)
  - [Miscellaneous](#miscellaneous)

## Daemon Technologies Competition

### Important Considerations

**Should I use the Blockstack / Stacks documentation?**
: The official Stacks documentation refers to the next phase of testnet, Xenon, and should not be used for Part 1 of the competition.
: Instead, please see the links below from Daemon Technologies:

- [Official Website for the Competition](https://daemontechnologies.co/minestx-challenge)
- [Official FAQ from Daemon Technologies](https://daemon-technologies.github.io/docs/Mining-Bot-Alpha-Version/FAQ/)
- [Mining-Bot Setup and Configuration](https://daemon-technologies.github.io/docs/Mining-Bot-Alpha-Version/Build-Before-Using/Mining-Bot-Alpha-Tutorial-EN.html)
- [Mining-Bot User's Guide](https://daemon-technologies.github.io/docs/Mining-Bot-Alpha-Version/Use-Mining-Bot-For-Mining/)
- [Mining-Bot Alpha Release](https://github.com/Daemon-Technologies/Mining-Bot/releases/latest)

**Are there any videos outlining the setup process?**
: Yes! Please see the videos linked below.

- [Setup Mining-Bot Alpha 1.0.0 Release on Mac OSX](/stx-mining-videos/#setup-mining-bot-alpha-100-release-on-mac-osx)
- [Setup Mining-Bot Alpha 1.0.0 Release on Windows](/stx-mining-videos/#setup-mining-bot-alpha-100-release-on-windows)

### Registration

**Where do I sign up?**
: Use the register button on the [competition sign-up page](https://daemontechnologies.co/minestx-challenge), and enter your name, email address, and keychain information (BTC and STX addresses).

-----

**Can I sign up after the competition starts?**
: Yes, but to be eligible at the end you must mine at least 30% of the total blocks produced over the course of the competition. For more information, see the [official rules](https://daemontechnologies.co/stx-mining-rules).

-----

**What is a keychain?**
: A keychain represents a private cryptographic key used to generate your public BTC and STX addresses used with the Stacks 2.0 network.

-----

**How do I generate a keychain?**
: Generating a keychain requires [Node.js](https://nodejs.dev) as a prerequisite, and afterward there are two packages that help create the keychain. There is also a [video outlining the process](/stx-mining-videos/#freehold-stx-mining---creating-a-keychain-on-windows) on Windows.
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
: For more information, please see the [official rules](https://daemontechnologies.co/stx-mining-rules).

-----

### Using Mining-Bot

**Do I have to use Daemon's Mining Bot to participate in STX Mining Challenge Part 1?**
: No, however it is recommended.
: The Mining-Bot simplifies the process of running a node and analyzing the related data.

-----

**What is difference between Mining-Local-Server and Mining-Bot?**
: Mining-Local-Server handles the back-end process of starting and stopping stacks-node.
: Mining-Bot is the frontend GUI for interacting with a miner.
: The [Mining-Bot Alpha Release](https://github.com/Daemon-Technologies/Mining-Bot/releases/latest) contains both Mining-Local-Server and Mining-Bot, and includes an option to download the stacks-node application as well. All in one package!

-----

**I have an error, what do I do?**
: Post in the the Stacks Discord chat under #mining, the community is really helpful.
: Create an issue on the [Daemon Technologies GitHub](https://github.com/Daemon-Technologies/Mining-Bot/issues) page for Mining-Bot, outlining the steps you took, the errors you received, and additional information as needed.

-----

## Tips and Tricks

*Note: This FAQ represents common questions from Discord and other outlets, and is a supplement to the [official FAQ](https://daemontechnologies.co/minestx-challenge#faq) from Daemon Technologies.*

### Configuring Stacks-Node CLI

**Where to find the release for Krypton?**
: [v24.0.0.0-xenon release](https://github.com/blockstack/stacks-blockchain/releases/tag/v24.0.0.0-xenon)
: If using the CLI, run `git clone` as you normally would, then run:
: `git checkout v24.0.0.0-xenon`
: *Note: the release tag says `Xenon` but the config file will tell the node to connect to the `Krypton` testnet network.

-----

**What are the correct endpoints?**
: A list of all the updated endpoints for Krypton is [available here](/stx-mining-setup/#krypton-information).

-----

**Is my configuration file correct?**
: An example of a working configuration file is [available here](/stx-mining-setup/#krypton-configuration-file).

-----

**Do I need to open any ports?**
: No, this is not necessary for miner operation, it is designed to work behind a NAT connection. If you want to expose the miner on a public IP, then you can optionally open TCP 20443/20444.

-----

**Should I use my 24 word phrase for the seed value in the config?**
: No, this should be the hex of the private key, which is a long string provided as part of your keychain.

-----

**The miner config only has the private key as the seed and does not have the BTC address and STX address. Does the seed infers those addresses so that I do not have to explicitly specify them?**
: The other way around, the BTC and STX addresses are derived from the seed.  The BTC and STX addresses are actually the same value, encoded differently to make it readable (so knowing one, you can get the other, and vice versa).

-----

**Why do I not see my testnet BTC balance in an explorer?**
: The Krypton phase of testnet runs on a private BTC regtest server that is separate from the public BTC testnet. Any online block explorers will not be able to find the wallet information.

-----

**Why do I not see my testnet STX balance in the Stacks Wallet?**
: The Stacks Wallet and other wallets in the ecosystem are using the Xenon phase of testnet, which relies on a different infrastructure.

-----

**How much BTC is needed to mine?**
: The default spent by a miner is 20,000 sats per block it attempted to mine, and testnet blocks on Krypton move at 1 block per 2 minutes (on average).

-----

**How can I adjust how much BTC my miner is committing?**
: If running via the CLI: by adding the `burn_fee_cap` setting to the configuration under the Burnchain section.
: If running the Mining-Bot: you can adjust the value when you are starting up the miner.

-----

**How long is a block?**
: on Krypton, ~2min
: on Xenon, ~10min (same as normal BTC blocks)

-----

**Where do I see my STX rewards?**
: Miners spend Bitcoin (BTC) to earn Stacks (STX), however the rewards are not immediate, it takes 100 blocks for the STX rewards to appear based on the reward cycle. The command to view the STX rewards is [available here](/stx-mining-setup/#krypton-information).

### Running stacks-node

**Does this look like my miner is running right?**
: If running on the CLI, look for `Miner node: starting up, UTXOs found.` when it first starts up.
: If running the Mining-Bot, the status will be displayed on the web page.

-----

**How do I check that my miner is running correctly?**
: If running on the CLI, by querying the /v2/info endpoints of your miner against the main krypton one.
: `http://krypton.blockstack.org:20443/v2/info`
: `http://localhost:20443/v2/info`
: If running the Mining-Bot, the status is displayed on the Mining Client page.

-----

**What does "Won sortition" mean?**
: It means that your miner was selected to create the next block in the Stacks blockchain, and will receive the reward of 1,000 STX after a 100 block maturity time.

-----

**How long do you usually have to mine for before winning a sortition?**
: The node has to catch up with the network first, which takes longer as the chain height increases. check that your node /v2/info endpoint returns the same as the seed node.
: From there, it is random, and depends on the number of miners participating.

-----

**What happens if I restart my miner?**
: By default, a folder containing the Stacks blockchain data is created in a temporary folder. Stopping and starting the miner will cause it to start over and have to resync with the network.

-----

**Where is the default working dir? I prob need to manually delete the data there.**
: default is /tmp on Linux and %temp% on Windows, folders start with stacks_
: you can add working_dir = "PATH_TO_STORAGE" under [node] in your config file, but it is safer to empty the directory before starting the node, there are some issues restarting with existing data

### Miscellaneous

**How would I create a Profit and Loss statement?**
: A P&L statement is just recording how much you spend and how much you earn, which you can do per block, or per any arbitrary time period by checking your BTC and STX balances.

-----

**Is there a minimum internet connection speed required for mining?**
: Faster is better, stable is best, but I'm using 10/2 on a rural wireless connection and successful.

-----

**I'm working with a VPS, not a local PC. Could there be a problem with that?**
: This is not directly a problem, however it does change how you interact with the node.
: If running on the CLI, you will need either SSH port forwarding or to expose ports TCP 20443/20444 to be able to query the endpoints of your miner.
: If running the Mining-Bot, a VPS is not supported at this time, but others have reported success with updating constants.ts to allow a connection outside of localhost.
: *Note: this is not a recommended configuration. The system requirements for running stacks-node are very light and should work with any home computer.*

-----

**What are these P2P errors?**
: The error below can be safely ignored.
: `failed to recv on P2P conversation: PermanentlyDrained`
