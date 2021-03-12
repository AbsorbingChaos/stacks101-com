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

-----

Some general factors based on community feedback include:

1. Fluctuating btc transaction fees
2. Mining on a fork
3. Whenever you restart the miner, the initial 6 commitments are spent in building your sortition weight (there is still slight chance you may win during initial 6 blocks, but it's like 1:20000)
4. If your miner misses a STX block, same point#4 applies, your chances to win a block is abysmally low for next 6 commitments.

To discuss configuration, strategy, or ask additional questions, please post in the `#mining` channel of the [Stacks Discord.](https://stacks.chat)
