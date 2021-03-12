# Stacks 2.0 Mining Questions
**Welcome! - Put que****s****tion****s** **down at the bottom and** **s****omeone will an****s****wer them A****S****AP if you don’t** **s****ee your que****s****tion an****s****wered already.**


## Where can I find information on creating a mainnet config file?
- See https://docs.blockstack.org/start-mining/mainnet
- Config will be very similar to xenon, minor changes (e.g. the “mode”)
- HOWEVER, please wait until a “mainnet build” of Stacks 2.0 is available 🙏
    - Likely to happen prior to Thursday but just watch here. 


## What pieces of information do I need to stand up a miner?
1. [Would recommend following official PBC docs first](https://docs.blockstack.org/start-mining/mainnet) - ~~keep in mind mainnet is not yet released~~
2. Run make_keychain from stacks/cli - you’ll need all of those details
    1. [Command example](https://docs.blockstack.org/start-mining/mainnet#running-a-miner)
3. [Stacks code from github](https://github.com/blockstack/stacks-blockchain) (there will be many updates between now and genesis) and compiled (it’s Rust) - suggest compile in release mode. At this point, debug symbols likely not needed for most.
4. Bitcoin production node all synched with RPC enabled so stacks node can talk to it.
5. Get some bitcoin sent to the above BTC that you generated from make_keychain.
6. Run importaaddress from bitcoin_cli to import THAT address into your node
7. **Registration of a name in the .miner namespace is not technically required now that the 20 names have registered to trigger the hard fork.**
8. Wait for more instructions for genesis 🙂


## How to calculate the amount of BTC required for mining for a week? 
1. https://friedger.github.io/mining-calculator/
2. Lots of moving parts, but should help you get the gist of it.
## How to stop and start mining?
1. Make sure your bitcoin production node is synched up and ready (should say 1.0000 in the logs) and you’ve imported your address and have BTC ready to burn.
2. Then, just run the stacks node pointing to the right config file.
3. Once, your node is running as miner (“found UTXOs”) 
    - you can remove and add btc to stop and start mining (note the required tx fees for that) or
    - you can just stop and start the stacks node (note the required sync for that) or
    - you can use some programmed logic in the stacks node to stop and start the stacks node (note the technical knowledge required for that) - open feature request


## What is the minimum hardware requirement?
1. Just about any VPS or home PC will work - “mining” is not a compute intensive operation for stacks. That said, you need at least enough storage (currently 350GB) to hold bitcoin mainnet and 5GB/ish +/- per day in bandwidth.
    1. [Stacks-node hardware requirements](https://docs.blockstack.org/understand-stacks/running-mainnet-node#hardware)
    2. [Bitcoind hardware requirements](https://bitcoin.org/en/bitcoin-core/features/requirements)
[](https://docs.blockstack.org/understand-stacks/running-mainnet-node#hardware)## How much is the minimum investment required in BTC?
1. Default to mine is set is 20,000 satoshis per stacks block. You can adjust this in your stacks config file to your liking. Remember, each block that gets mined is mined by a node selected by a verifiable random number (VRF) which means even if you spend 20,000 satoshis, you MAY not win and if you don’t win, your 20,000 satoshis are gone. If you spend more than 20,000 satoshis, your odds of winning go up, but is never 100%.
2. A calculation performed today (Jan 11, 2021) indicated the following “order of magnitude” for investment:
    1. Approximately 0.05BTC per day / $1,300 per day
    2. Approximately 0.35BTC per week / $9,000 per week
    These numbers will fluctuate with bitcoin’s pricing and are listed here so you can see something of a range of what you’ll need to mine.
## How do I access my STX account?

You’ll want to leverage the STX wallet. The version 3 wallet is a stacks 1.0 wallet but can be used for prepping for 2.0 mainnet (BTC for .miner registration). The version 4.0 wallet is test-net only and will switch to mainnet when genesis is mined.
UI for 4.0 wallet asks for a 24 word key phrase, but it will also work with a 12 word key phrase.

## Where can I learn more? 
https://stacks101.com/stx-mining-faq/

## What is the benefit of registering in the .miner namespace?

In Blockstack 1, the code that causes the fork to occur is set so that once 20 .miner names are registered, then 300 blocks from that point is when the fork happens.


## What is the difference between burn_fee and burnchain_op_tx_fee?
1. burn_fee-> how much BTC you are willing to burn to win leader election
2. burnchain_op_tx_fee -> BTC TX fee

Remember, the higher the value of #1 gives you more opportunities to win leader of the block, but is not guaranteed. Suggest you not mess with item #2. Also remember - to CHANGE these values, you must stop and restart your client, which means you will likely miss 5-6 blocks while it resyncs.

**Assuming the software is available before block 666050 what happens with my miner before that block? Can we setup the network already?**

1. The miner prior to that is still xenon. A release will be announced on Github and you can then download, compile, and start it. It won’t “activate” however, until the appointed block. Once that block hits, it will try to start mining.

**S****hould we verify the export before mining? How to verify?**
Mainnet is live, already done.

Put new questions below this line:

**How handle consensus breaking and non-consensus breaking updates for the mining software? In particular:**
1. [https://github.com/blockstack/stacks-blockchain/issues/2358](https://github.com/blockstack/stacks-blockchain/issues/2358) 
2. [https://github.com/blockstack/stacks-blockchain/issues/2356](https://github.com/blockstack/stacks-blockchain/issues/2356) 
3. [https://github.com/blockstack/stacks-blockchain/issues/2347](https://github.com/blockstack/stacks-blockchain/issues/2347) 
4. [https://github.com/blockstack/stacks-blockchain/issues/2346](https://github.com/blockstack/stacks-blockchain/issues/2346)
5. https://github.com/blockstack/stacks-blockchain/pull/2196


How does the smoothing function effect me as a miner?

Looking for a config file setup - needing bootstrap_node and mode I think. Do we have this for mainnet? Actually, I think mode is literally mainnet but still need boostrap_node address.

#1 miner is mining on the wrong fork as far as i got, it can be identified by comparing results from localhost:20443/v2/info; [http://seed-0.mainnet.stacks.co:20443/v2/info](http://seed-0.mainnet.stacks.co:20443/v2/info) what are the key parameters to look at? if there is an issue, how to fix it? 

#2 bitcoin transaction was not processed due to low tx fee how to figure out that this issue took place? how to fix it? 

#3 what are the key metrics that miners have to look at in order to be confident that mining is going fine? it seems like stack-dump is the main source of information. The only info that i am familiar with is mining stats per wallet

**When do I get the block reward?** 

**The reward amount is more than the expected 2000STX. Where does the extra STX come from?**

**Can I join a mining pool?**
multi-sig accounts is the most efficient today. There is a pooling protocol, however, not (yet) implemented

**What are common errors or warning and what do they mean?**
“WARN \[1610727023.945899\] [testnet/stacks-node/src/neon_node.rs:1638] [relayer] Failed to submit Bitcoin transaction”

“WARN \[1610707802.885815\] [src/chainstate/stacks/miner.rs:1318] [relayer] Failed to apply tx 514884b56143871f7cdd1cd7ea1b2fb4b2bbfc4bbde2fac86bce903f1d429bc5: InvalidStacksTransaction("Invalid TokenTransfer: address tried to send to itself", false)”

“ERRO \[1610706829.585543\] [testnet/stacks-node/src/burnchains/bitcoin_regtest_controller.rs:962] [relayer] Bitcoin RPC failure: transaction submission failed - Network("Bitcoin RPC: status(500) != success, body is \'Object({\"error\": Object({\"code\": Number(-26), \"message\": String(\"insufficient fee, rejecting replacement f412715382e60913b1d25fd435b134b7f7af16ca1665864dad6d781813230f9e, not enough additional fees to relay; 0.00000346 < 0.00000352\")}), \"id\": String(\"stacks\"), \"result\": Null})\'") ?”
See [https://github.com/blockstack/stacks-blockchain/issues/2347](https://github.com/blockstack/stacks-blockchain/issues/2347)

“WARN \[1610695716.508201\] [src/chainstate/stacks/miner.rs:981] [relayer] Miner failed to load parent microblock, mining without parent microblock tail, parent_block_hash: e08b2fe3dce36fd6d015c2a839c8eb0885cbe29119c1e2a581f75bc5814bce6f, parent_index_hash: e08b2fe3dce36fd6d015c2a839c8eb0885cbe29119c1e2a581f75bc5814bce6f, parent_consensus_hash: e08b2fe3dce36fd6d015c2a839c8eb0885cbe29119c1e2a581f75bc5814bce6f, parent_microblock_hash: Some(b638aaeda6946653b633d93955d2c0403af312a2b117e86d8b7bb6803a9f392e), error: NoSuchBlockError”

“WARN \[1610805779.599113\] [src/net/p2p.rs:4243] [p2p] Atlas: updating attachment inventory failed Not connected to peer network “

“ERRO [1610808785.386308] [testnet/stacks-node/src/burnchains/bitcoin_regtest_controller.rs:953] \[relayer] Bitcoin RPC failure: transaction submission failed - Network("Bitcoin RPC: status(500) != success, body is 'Object({"error": Object({"code": Number(-25), "message": String("bad-txns-inputs-missingorspent")}), "id": String("stacks"), "result": Null})'") WARN [1610808785.386393\] [testnet/stacks-node/src/neon_node.rs:1638] [relayer] Failed to submit Bitcoin transaction”

**Why do I see won sortition but don’t get a reward?**

Why do I see won sortition but I am not listed in stacks-dump as winner?
“INFO \[1610651139.365728\] [testnet/stacks-node/src/neon_node.rs:787] [relayer] Won sortition! Mining reward will be received in 100 blocks (block #101)”

Why do I not win a block over 10 blocks or so even though I am bidding the most?

**What is the roadmap for the miner code? Suggested improvements/wishlist:**

- set sats/b, burn_fee_cap without restarting the node
- start/stop mining without stopping the node
- restart node using the same working directory
- better logging for miners, better logging tools documentation (links to logrotate?, ..)
    - RUST_BACKTRACE=1 STACKS_LOG_DEBUG=1 ./stacks-node start --config miner.toml 2>&1 | tee miner-(date +%s).log | grep -v DEBG
    - 

**Is there possible to count breakeven price for BTC and for STX? maybe there could be a formula that will say that mining is becoming unprofitable?**
To be verified:
A calculation for each block like: total commit * total fees / reward - price_sats_per_stx_in_100_blocks . If positive it is profitable, if not it is not ?(edited)
*[*12:47 PM*]*
Or for an individual miner for long term average: (commit / total_commit * reward / price_sats_per_stx_in_100_blocks) - btc_fees_per_tx If positive it is profitable, if not it is not. Assuming that the total_commit and btc_fees_per_tx and the price is the same over a long time
****

Put new questions above this line

The below markdown questions should be taken to the forums as this document is intended to be about getting miner questions solved for mining. Will leave them here for now, please put mining questions ABOVE this.


    First I would like to say THANK YOU for setting up this doucment to organize all our community questions. I know it has been really busy especially the past few days. I would like to apologize ahead of time for the amount and the length of these questions, but I really do appreciate the opportunity to finally have them read and replied to. Thank you!
    
    I really do hope we can resolve all the questions from the mining community and their concerns about launch before PBC prematurely hits the launch button, but I think this is a good start to organizing of that, thank you again!
    
    I think the main concern for everyone on all sides is that we have Working, Tested, Stable code before it is released into the wild, because once it is released to the wild it is impossible to go back and force changes.
    -------------------
    Question A:
     Patent for "Decentralized processing of global naming systems"
    https://patents.google.com/patent/US20170236123A1/en
    
    Is this patent part of the codebase going forward? Are there any patents still attached to the code in the 2.0 launch or any other property that is not being trasnfered to the public domain like the 2.0 chain will become after the launch?
    
    Would this put any strings on the community as far as wanting to copy or modify or use the code or features of this blockchain in their own public or private projects? (aka: is this an artificial control on the stacks ecosystem held by an organization? that would make it controlled aka centralized as there would be limitations on its usage/modification possibly)
    -------------------
    Question B:
     Since the patent mentioned in question A either does not work or is not yet implemented in the 2.0 codebase, and the 2.0 lacks some basic functionality regarding name registrations and accounts that exists in 1.0 - what is the argument to release 2.0 without being complete with major features that are included in 1.0?
    
    (hank 7.1.21 #dev-general) "Ah, I think they were talking about how we won't have a registrar that will sponsor you for a free username. Which is true. However, that doesn't mean you can't login to an app for free. It just means you won't have a username (if you don't already) on the Blockstack Naming System" 
    -------------------
    Question C:
    Why do some PBC developers believe that the .naming mining addresses force a countdown to launch? It was described at length how they were only vanity, there are multiple references in the chats on discord and in one of the zoom chats with the ceo. 
    
    It was only communicated that the launch could not happen at all unless there was 20 registered miners. In all official communication it has stated that we will go live when we are feature complete _and_ its up to the miners, but we would not be able to go live without 20. No where did it say the countdown IS going to start at 20 and its automatic thing.
    
    So can you explain to the community if it is known to whoever is deciding on starting the countdown at the 20 signup mark instead of waiting and seeing if that would even be enough time to fix and test the forking bugs? Was the development team consulted before the countdown? Were the miners or the community consulted before the countdown?
    
    The question was discussed many times in the mining chat if you view the history (some of the messages seem not to be able to be loaded anymore for some reason, but you can still find plenty, will these be saved post-launch in case there are any issues to look at afterwards?)
    -------------------
    Question D:
    According to PBC official communication: "To celebrate feature completion and community momentum, the Stacks Foundation is putting up 1 Million STX to be won in an upcoming mining challenge hosted by Daemon Technologies. The mining challenge will follow code completion on Dec 15th. Independent miners will be the ones to launch the network, so this will be a great way for prospective miners to learn the final system before that and to celebrate their key role in enabling the user-owned internet on Bitcoin."
    
     This tells me that Daemon Technologies is only the host of the contest, and PBC still controls the funds, so the funds can be used to test the codebase after it is complete. I know the communication describes Dec15th it was declaired feature complete, but from the view of the bugs and the testing, it is not only missing features but it is not complete or working as described. I don't believe that can be qualified as Feature Complete. So my question is, can we have a full test with the funds that were created for testing before we are handed over the codebase?
    If Daemon is too busy to host the test due to being focused on fixing the launch fork bugs or other issues, can we have it done by another entitiy or something?
    -------------------
    Question E:
    - Who is resopnsibe for any bugs, including the forking bug, after launch? Is Blockstack company, or whoever raised the funds from the investors, liable to fix anything with known bugs after the launch or does their liability to code missing things and correct issues end after launch?
    
    If the answer is the community, was the community expecting and promised working code?
    -------------------
    Question F:
    Can the miners right now in the mining community channel decide not to go forward with the launch of they believe there are still fatal flaws or issues that need to be resolved and tested before launch? If not, what is the justification used to force a launch without a proper test?
    -------------------
    Question G:
    When this goes live, if there are any bugs or issues that were not tested or resolved for launch, does the community know that it is not possible for you to stop the network, start the netwokr, or force any changes or correct the issues?
    
    So my question is, given the grave dangers of a premature launch, can we test the network with at least the conditions that crashed it last time after the forking issue is fixed before we rush live?
    -------------------
    Quetion H:
    on 9.1.21 Daemon gave away 500stx to every .miner - did this come from the PBC funds given to run the testing contest? If so can we have these used for testing instead before mainnet launch?
    -------------------
    Question I:
    Where/what is phase three of the mining testing? Is that still happening? What are the details? 
    -------------------
    Question J:
    Were any agreements or contracts made through PBC or any of its afiliates in agreeing on a launch date with any exchanges or mining companies or anything without consulting with the mining community or mentioning in the community communications? What happens if we do not launch on that date?
    -------------------
    Question K:
    https://blog.blockstack.org/stacks-2-feat-complete-dec-15/
    
    Is blockstacks top proirity with the 2.0 launch to ship high-quality well tested code? If that is still the case, we need to get the code high-quality (forking issue) and test it (another testing round and one that isn't cut early because it crashed and the software did not perform or even work for its intended purpose)
    
    Can we ensure that the code will be high quality and well tested before the launch?
    -------------------
    Question L:
    Is this still true?
    "Thanks to the hard work of engineers at PBC, the Stacks Foundation, and community contributors, the Stacks 2.0 blockchain is on target to reach feature completion by December 15th. This is largely in line with previous estimations about mainnet readiness, most recently covered in the post, ‘When Stacks 2.0’. After discussing with exchanges, launch partners, and potential miners we can now set a launch date of January 14th, 2021. This date is the recommendation by PBC after consultation with other entities; miners will ultimately decide exactly when and how the launch happens."
    If that is the case, can you reconsile the "miners will decide when and how the launch happens" and "target to be featuer complete December 15th."
    
    Two questions here:
    Does PBC declair the codebase to be feature complete at this time since PBC has started a countdown to launch? 
    and
    Can the miners still say they want to test first and see the fixes before launch? 
    -------------------
    Question M:
    Since 2.0 is not launching with all advertised features complete (identities, stacking, anything else?) the forking bug literally means the main feature of its core has still not been worked out or at least demonstrated in the past test. what is the expectation of being feature complete? should we not wait until all the features are completed (and preferably tested)?
    -------------------
    Question N:
    Are there any marketing commitments, business commitments, or any other promises or reasons why a launch must happen on the 14th if the miners have not yet even seen working code? Who's call is it?
    -------------------
    Question O:
    Can anyone speak on mining competition part 3?
    -------------------
    Question P:
    Is it correct to say that blockstack the company raised funds to complete this project, and it is their responsibility to deliver it to the community in the condition that was advertised? or at least close to it? 
    
    Do dates or timelines have any bearing on that statement?
    -------------------
    Question Q:
    As evidenced from the mining channel, during the test, a very large portion of interested miners and others in the community were simply unable to get the system working or synced up or anywhere near the state needed to even start testing. data that was collected is conflicting between nodes, and it was ulitmately stopped shortly after it began. Even the blockstack official test nodes were not able to function so it was not a matter of technical competence on the community side.
    
    Can the mining community have a chance to see what is going live in action after the bug fixes before it goes live and is unreversable?
    -------------------
    Question R:
    Will we have another opportunity like this to have any followup questions heard and taken care of before pbc decides to launch? If so are you able to give those details now so we can schedule?
    
    -------------------
    Question S:
    Thank you again for going through these questions, I really appreciate it!
    
    Last one, it seems like the communication channels have become quite divers recently. Twitter/forums/chats/blogs/etc. 
    
    Can we have the questions and answers to these posted on whatever forms of media/communication PBC has branched out to before launch? 
    
    That way everyone can be informed. I think the community would benifit from some more unified and direct communication before launch.
    -------------------
    
    


