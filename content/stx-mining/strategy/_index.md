---
title: "Stacks Mining Strategy"
date: 2020-12-12T15:36:10Z
description: "Wise words from other miners."
layout: "section"
---

{{< notification params="is-warning is-light"
 content="<span class=\"has-text-weight-bold\">Note:</span> this area is still under construction, more updates coming soon!" >}}

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

PSA for miners

You may want to set wait_time_for_microblocks (https://docs.blockstack.org/references/stacks-node-configuration#wait_time_for_microblocks-optional) to 30 or 45 seconds (defaults to 1min). The value is set in millisecs, so 30000 or 45000

Context: sometimes when BTC blocks are produced rather quickly, it can lead to some scenarios that miners have run into with "missed commits". Per discussion in https://github.com/blockstack/stacks-blockchain/issues/2367, reducing the default above might help.

-----

here are lots of factors in play, not just the btc commitments, and those are not clearly articulated in miners instructions, like

1. Fluctuating btc transaction fees, 

2. ending up on fork, 

3. missing STX block (that resets your sortition weights)

4. Whenever you restart miner initial 4 commitments are spent in building your sortition weight ( there is still slight chance you may win during initial 4 blocks, but it's like 1:20000)

5. If your miner misses a STX block, same point#4 applies, your chances to win a block is abysmally low for next 4 commitments. 

6. Probably your miner is regularly missing STX block say every 6th block,  and by this way you may continue 20000 rounds and might win 1 block