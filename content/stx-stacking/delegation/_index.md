---
title: "Delegated Stacking FAQ"
date: 2021-03-12T15:36:10Z
description: "Answers to common questions."
layout: "section"
---

Read below to see answers to common questions around delegated (pooled) stacking, or [view the stacking resources](/stx-stacking/resources) for more information.

---

- [Why should I delegate my STX?](#why-should-i-delegate-my-stx)
- [How do I select a pool?](#how-do-i-select-a-pool)
- [How do I join a pool?](#how-do-i-join-a-pool)
- [What is the minimum amount of STX to join a pool?](#what-is-the-minimum-amount-of-stx-to-join-a-pool)
- [How can I select the number of locking cycles?](#how-can-i-select-the-number-of-locking-cycles)
- [Can I continously stack by using a pool?](#can-i-continously-stack-by-using-a-pool)
- [Do I lose my rewards if I revoke delegation?](#do-i-lose-my-rewards-if-i-revoke-delegation)
- [What is the difference between locking period and delegation period?](#what-is-the-difference-between-locking-period-and-delegation-period)
- [My Stacks are still locked. Can I unlock by revoking delegation?](#my-stacks-are-still-locked-can-i-unlock-by-revoking-delegation)
- [How can I see that my stacks will participate in the next reward cycle? Did I do everything right?](#how-can-i-see-that-my-stacks-will-participate-in-the-next-reward-cycle-did-i-do-everything-right)
- [What is the difference between custodial and non-custodial pools?](#what-is-the-difference-between-custodial-and-non-custodial-pools)
- [How long is a cycle?](#how-long-is-a-cycle)
- [What are the risks of using a pool?](#what-are-the-risks-of-using-a-pool)
- [How do I contact the pool admin?](#how-do-i-contact-the-pool-admin)
- [What are delegatee addresses?](#what-are-delegatee-addresses)
- [There are less than 80k Stacks on the delegatee address. Does it matter?](#there-are-less-than-80k-stacks-on-the-delegatee-address-does-it-matter)
- [What happens if the total delegated Stacks are less than the dynamic minimum?](#what-happens-if-the-total-delegated-stacks-are-less-than-the-dynamic-minimum)
- [How much does it cost to join a pool?](#how-much-does-it-cost-to-join-a-pool)
- [How can I change the delegated amount?](#how-can-i-change-the-delegated-amount)
- [I transferred Stacks to the delegatee address. What now?](#i-transferred-stacks-to-the-delegatee-address-what-now)

---

### Why should I delegate my STX?

Stacking STX requires meeting a dynamic minimum threshold in order to qualify for a reward slot.

As an individual stacker, the minimum requirement is 70,000 STX, and that number can increase as more people stack STX.

- if the threshold rises above the amount you stacked, then you will not receive rewards
- if there is a series of fast bitcoin blocks, your reward slot may not receive rewards

Delegating (or pooling) STX overcomes both issues above because the total STX locked for rewards is pooled together, which helps overcome the minimum requirement and potentially secures more than one reward slot.

{{< notification params="is-info is-light"
 content="<span class=\"has-text-weight-bold\">Note:</span> More information on recent cycles and the current threshold can be found on <a href=\"https://stacking.club/\">stacking.club</a>, and the full technical details for stacking can be found <a href=\"https://github.com/stacksgov/sips/blob/main/sips/sip-007/sip-007-stacking-consensus.md\">in Stacks Improvement Proposal (SIP) 007.</a>" >}}

### How do I select a pool?

A list of pool providers can be found on both [stacks.co](https://www.stacks.co/stacking) and [stacks.org](https://www.stacks.org/stacking).

Each pool provider can determine its own rules for the pool, including how fees and payouts are handled.

Be sure to research the terms before delegating to a pool, or reach out to the pool admin for specific information.

### How do I join a pool?

The [Hiro Desktop Wallet](https://hiro.so/wallet) supports both individual and delegated stacking.

In order to delegate your STX, follow the steps below:

1. Click on **Get started** in the Stacking section
2. Click on **Continue** in the Delegate section
3. Enter the STX address of the pool provider (delegatee)
4. Enter the amount of STX to delegate
5. Confirm by signing the transaction

### What is the minimum amount of STX to join a pool?

This is determined by the pool provider. For example:

- staked.us requires a minimum of 10,000 STX
- Friedger Pool requires a minimum of 40 STX

### How can I select the number of locking cycles?

This is determined by the pool provider. For example:

- staked.us asks you to email them with the requested cycle length
- Friedger Pool uses different STX addresses for different cycle lengths

### Can I continously stack by using a pool?

Not at this time. There is a cooldown cycle built into the protocol where locked STX do not unlock in time to submit delegation for the next cycle. This means:

- If you stack for 1 cycle, you will miss the next one
- If you stack for 3 cycles, you will miss the fourth one
- If you stack for 6 cycles, you will miss the seventh one
- and so on...

There is an ongoing discussion about stacking and possible improvements [on the Stacks Forum.](https://forum.stacks.org/t/hiro-s-feedback-on-stacking/11680)

### Do I lose my rewards if I revoke delegation?

No. Revoking delegation does not affect the current state and only affects stacking in *future cycles*.

### What is the difference between locking period and delegation period?

The locking period is defined by the pool admin, and represents how long your STX are locked. For example, if you lock your STX for 6 months with a pool, then once stacked your STX will not be transferrable for 6 months, even if you revoke delegation.

After each locking period is a cooldown cycle. You can switch between pools at any time, and you can join a new pool after the cooldown cycle of your last locking period.

The delegation period is defined by the wallet owner, and represents the pool membership. The pool provider is able to stack STX on your behalf during the delegation period, which can be indefinite.

The locking period is always shorter than the delegation period, and generally there are several locking periods while you are delegating.

### My Stacks are still locked. Can I unlock by revoking delegation?

No. Once locked, the STX remain locked until the end of the locking period.

Revoking delegation ensures the pool provider cannot lock your STX for any additional amount of time.

### How can I see that my stacks will participate in the next reward cycle? Did I do everything right?

There is no simple interface for this right now, however you can call the PoX contract from the [explorer sandbox](https://explorer.stacks.co/sandbox?chain=mainnet) to see whether the pool admin has delegated your STX.

### What is the difference between custodial and non-custodial pools?

Custody references who owns and is responsible for the STX in the wallet.

When using a custodial pool, [such as OKCoin,](https://www.okcoin.com/join?channelId=600038104) you transfer your STX to their address and they also perform stacking on your behalf. The STX are no longer in your wallet, which is true with any exchange-based wallet. *Not your keys, not your coins.*

When using a non-custodial pool, [such as Friedger Pool](https://pool.friedger.de/), you are *only delegating* your STX to their address so they can perform stacking on your behalf. The STX remain in your wallet and under your control.

### How long is a cycle?

A single cycle lasts for 2,100 blocks, or about two weeks.

STX can be locked for at most 12 reward cycles (25200 Bitcoin blocks or ~7 months).

### What are the risks of using a pool?

While your STX are safe in your wallet, the pool provider is responsible for individual payouts.

The pool provider receives the total payouts for all eligible reward cycles, and can decide how rewards are paid to stackers in the pool. For example:

- staked.us pays out to a BTC address you provide
- Friedger Pool pays out STX to the address you delegate from

### How do I contact the pool admin?

This is determined by the pool provider. For example:

- staked.us provides an email address
- Friedger Pool provides a Discord handle

### What are delegatee addresses?

The delegatee address is the STX address used by the pool provider in conjunction with the `delegate-stx` function from the [PoX stacking smart contract.](https://docs.blockstack.org/references/stacking-contract#delegate-stx)

By delegating your STX to the delegatee STX address, you are giving the pool provider permisson to stack on your behalf.

### There are less than 80k Stacks on the delegatee address. Does it matter?

No. The total amount locked for a pool can be found [in the transactions of the PoX smart contract.](https://explorer.stacks.co/txid/SP000000000000000000002Q6VF78.pox?chain=mainnet)

### What happens if the total delegated Stacks are less than the dynamic minimum?

The pool will not qualify for a reward slot, however the STX will remained locked until the end of the cycle.

### How much does it cost to join a pool?

This is determined by the pool provider. Common fees for pool providers average 8-10% of the total rewards.

### How can I change the delegated amount?

As long as the STX are not locked, you can revoke and re-delegate with a new amount.

If the STX are locked, then you have to use a different STX address and delegate your remaining unlocked STX from there.

### I transferred Stacks to the delegatee address. What now?

Transferring STX to the pool provider's address is not required.

If you did this by mistake, you can ask the pool admin to return them, then delegate the STX to the pool address.
