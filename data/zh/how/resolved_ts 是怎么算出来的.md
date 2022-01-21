---

category: how
aliases: []
tags: [TiKV, txn]
author: longfangsong
last_update: 2022-01-21T03:52:40Z
---

# resolved_ts 是怎么算出来的

- 一开始，对每个 region，`resolved_ts = min(start_ts in all locks)`
- 维护一个 `start_ts` 的最小堆，在删除 lock cf 中的锁时推进即可
- 为了防止 `resolved_ts` 在整个 region 上没有锁时长期无法推进，会定期从 PD 拿最新 ts，如果没有锁则可以直接使用这个 ts 作为 `resolved_ts`


