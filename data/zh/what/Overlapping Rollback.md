---

category: concept
aliases: [overlapped_rollback]
tags: [TiKV, txn]
author: longfangsong
last_update: 2021-03-29T11:27:08Z
---

# Overlapping Rollback

在引入了 async commit 之后，由于 `commit_ts` 可以是算出来的，所以某一个 key 在某一个 ts 上是可能同时存在一个 rollback 记录和一个（`commit_ts` 是算出来的的） commit 记录的，但 TiKV 将 commit 记录和 rollback 记录存在同一个 Column Family 内，为了避免两者的冲突，我们选择在这种情况下不记 rollback 记录，而是给 commit 记录添加上 `has_overlapped_rollback`。
（当然，不需要 [protect](https://longfangsong.github.io/tipedia/zh/what/Protected%20Rollback.html) 的 rollback 就不用管直接覆盖掉就好了）

## Links

- [引入的 pr](https://github.com/tikv/tikv/pull/8349)
