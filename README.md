[![make.fun · post-x-promote-make-your-own-bounty-01](https://make.fun/badge/post-x-promote-make-your-own-bounty-01.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![rank](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/Ryanefri10/x-promote-make-your-own-bounty-20261124/rank.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![reward](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/Ryanefri10/x-promote-make-your-own-bounty-20261124/reward.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)

# Promote make.fun's make-your-own-bounty post on X

Entry for make.fun's [post-x-promote-make-your-own-bounty-01](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01) bounty ($250, top 50 share).

The entry is the X post itself: a quote of [make.fun's make-your-own-bounty post](https://x.com/makefunai/status/2124915864336236646) from [@giordi105](https://x.com/giordi105), with a photo of its own attached and the play code in its text. Places go by the post's replies + reposts + quotes, highest first.

- **The post:** https://x.com/giordi105/status/2124969853643898956
- **Play code:** makefun-feast-cricket-garnet

## How this repo works

`main.ts` (Node 22, standard library only) copies `POST.json` from the repository root into the output directory, where the gate reads the post's address and scores it from X. It prints nothing on success:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```
