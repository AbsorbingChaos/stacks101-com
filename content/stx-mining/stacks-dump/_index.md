---
title: "Analyzing Miner Data"
date: 2020-12-12T15:36:10Z
description: "Getting into the details."
layout: "section"
---

### Table of Contents

- [About stacks-dump](#about-stacks-dump)
- [Preparation](#preparation)
  - [Finding the stacks-node Directory](#finding-the-stacks-node-directory)
    - [Miner Still Running](#miner-still-running)
    - [Miner Stopped](#miner-stopped)
- [Using stacks-dump](#using-stacks-dump)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Usage - Xenon](#usage---xenon)
  - [Usage - Krypton](#usage---krypton)
- [Sample Data](#sample-data)
  - [Copy to Spreadsheet](#copy-to-spreadsheet)

## About stacks-dump

[stacks-dump is a tool from Pascal (@psq)](https://github.com/psq/stacks-dump) that analyzes the information from a miner in `stacks-node` storage and provides information such as Actual Wins, Total Wins, Total Mined, and more.

This script should be run against the `stacks-node` working directory, which is saved to `/tmp` by default unless the `working_dir` value is set in the stacks-node toml config file.

{{< notification params="is-info is-light"
 content="On Windows, the default temp directory used by stacks-node is <code>C:\tmp</code>, which is accessible from <code>/mnt/c/tmp</code> on WSL." >}}

An example of the folder name: `/tmp/stacks-testnet-5c87e24790411516`

## Preparation

### Finding the stacks-node Directory

By default, every time `stacks-node` is restarted it creates a new directory in the `/tmp` (`C:\tmp` on Windows / `/mnt/c/tmp` on WSL) folder to save data. This can lead to several versions of the `stacks-testnet-randomstring` folder, and there are two methods to find the correct one to use.

#### Miner Still Running

**If `stacks-node` is still running**, then you can use the following commands to find out what directory is in use.

First, check for the PID of the running `stacks-node` process.

```bash
ps -ax | grep stacks | grep -v grep
```

Which will output something similar to:

```bash
3322 tty1     S+     0:00 ./stacks-node krypton
```

In this case, `3322` is the PID, which we will use to find the open files by this process.

```bash
lsof -p 3322 | grep tmp
ctrl + c (to end the process)
```

Which will output something similar to:

```bash
stacks-no 3322 whoabuddy   44u      REG    8,2     16384 3801116 /tmp/stacks-testnet-cbd987d44ca5058e/burnchain/db/bitcoin/regtest/burnchain.db
```

In this case, `/tmp/stacks-testnet-cbd987d44ca5058e/` is the folder where my data is stored, and the example I will use throughout the instructions.

#### Miner Stopped

**If `stacks-node` is no longer running**, then you have to figure out which folder in `/tmp` to use. If there is only one, then that is the one, but if there are multiple, then you will need to look for either the *most recently modified* or the *largest* folder of the set.

First, review all possible folders by modified date.

```bash
ls -l /tmp | grep stacks
```

Which will output something similar to:

```bash
drwxrwxr-x 3 whoabuddy whoabuddy 4096 Dec 31 13:48 stacks-testnet-0d33c213b410ab82
drwxrwxr-x 4 whoabuddy whoabuddy 4096 Dec 31 13:47 stacks-testnet-8eedb619cefbdd92
drwxrwxr-x 3 whoabuddy whoabuddy 4096 Dec 31 13:51 stacks-testnet-915614ad40dfed6f
drwxrwxr-x 4 whoabuddy whoabuddy 4096 Dec 31 13:46 stacks-testnet-cbd987d44ca5058e
```

In this case, `Dec 31 13:51` is the last-used folder, which would contain data from my most recent run.

If that folder didn't appear to have the correct information after we run stacks-dump, we could also look for the largest folder.

```bash
du -sh /tmp/stacks*
```

Which will output something similar to:

```bash
632K  /tmp/stacks-testnet-0d33c213b410ab82
2.0M  /tmp/stacks-testnet-8eedb619cefbdd92
16K   /tmp/stacks-testnet-915614ad40dfed6f
2.7M  /tmp/stacks-testnet-cbd987d44ca5058e
```

In this case, `2.7M` is my largest folder so `/tmp/stacks-testnet-cbd987d44ca5058e` would be my target for stacks-dump, however actual testnet data will be much larger (gigabytes in size).

## Using stacks-dump

Once we know our target folder from the steps above, then we can start setting up and using stacks-dump to analyze the information.

### Prerequisites

- Node 14.x
- Yarn

(both of which *should be installed* as part of Mining-Bot procedures)

### Installation

The steps below will download stacks-dump from GitHub, change to the directory, then install the required packages via yarn.

```bash
git clone https://github.com/psq/stacks-dump.git
cd stacks-dump
yarn
```

### Usage - Xenon

The steps below will use the latest version of stacks-dump, using the start and end blocks from the competition, and outputting the information in CSV format so it can easily be transferred to a spreadsheet.

For more information on stacks-dump usage, please [see the readme on GitHub](https://github.com/psq/stacks-dump).

```bash
node report -x -s 1902238 -e 1902900 -c /tmp/stacks-testnet-ea025d61c75f983a/
```

Which will review the information in stacks-node storage, output some data about leader key registrations, pox data, and end with a chart of stats that can be copy/pasted into a spreadsheet.

### Usage - Krypton

The steps below will use the correct version of stacks-dump based on the Daemon Technologies competition, using the start and end blocks from the competition, and outputting the information in CSV format so it can easily be transferred to a spreadsheet.

For more information on stacks-dump usage, please [see the readme on GitHub](https://github.com/psq/stacks-dump).

```bash
node report-24.0.x.x -s 983 -e 7055 -c /tmp/stacks-testnet-cbd987d44ca5058e
```

Which will review the information in stacks-node storage, output some data about leader key registrations, pox data, and end with a chart of stats that can be copy/pasted into a spreadsheet.

## Sample Data

Here is an example of the data from my node following the competition:

```none
STX address,BTC address,actual wins,total wins,total mined,%actual wins,%won,paid satoshis,theoritical win%,avg paid
ST04M2QNHP9J2HXYNA9KEZPG0SWT3PK1EJEQADFF,mfYUzdzX76CkS2ymYV3wcRaT6xYKtawf8h,0,0,3,0.00%,0.00%,809400,16.88%,269800
ST06GKC6P5A3B15HDEWMKSNZ7T03C1A3VZJZ276H,mfZ7F9CSzrH9jrjLcYKjiVQU1HqYjg6vgw,0,4,201,0.00%,1.99%,5025000,0.65%,25000
ST0EPWDZ80R46C1Z4XHB0B6W3D5R85H19FK5N0PZ,mfbpM1gEYZBjXzPB6bToidz6EFJ49Uj8Na,2,3,401,0.15%,0.75%,8020000,0.26%,20000
ST102WJHRRT9CK4T8KWVJQR70ZXTV8MDQ1E2EDY1R,mmNJzcSNkbaPmqyYgrY2XpC5j4CnZCgCxF,0,3,200,0.00%,1.50%,4000000,0.46%,20000

... 700 more lines ...

STZEF1XZD0R6BQ535KRX84A808CNR09ADBYN30QM,mmFZYxBnzrbTfZnn8C77yoUUwYJeY1q6Dw,1,11,475,0.08%,2.32%,321199450,4.38%,676209.3684210526
STZJCXJ53WGD6JTV7BEA4ECS930SW3JVQ3NQXRM6,mmGrwXRikuX2vLc13D3pwNX7gMQ5UgdNod,0,2,122,0.00%,1.64%,2440000,0.37%,20000
STZNTBNWTX3MEZ2PTHYQG9KT8TZ9KAS1H42K22J0,mmHzVaTkh5d5R15zaS4YYgu1iGwDjCJipR,0,0,161,0.00%,0.00%,4830000,0.52%,30000
STZQC4PW1GW6JKDSVEQN3VY6J54WMHZHCZS96428,mmJWK3NkPqRUhGh5HFeZ1nQCqiqa2FrZSY,4,12,1129,0.30%,1.06%,22580000,0.28%,20000
STZYY6PRBCNWYXPY1GVN1T00B6E61BAKK2NN68N7,mmM1JSGjMqykTWxCcoaZJQ2vE22C5QfUSN,1,17,452,0.08%,3.76%,9040000,0.23%,20000
```

### Copy to Spreadsheet

To view an animation of copying and pasting this information from the terminal, [click here to view](/stx-mining-stacksdump/example/) a (fairly large) gif file.
