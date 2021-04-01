---

category: 词条类型，比如 concept, component, config-item 等等
aliases: [Parallel Commits]
tags: [TiKV, txn]
author: longfangsong
last_update: 2021-04-01T04:40:16Z
---

# Async commit

对 TiKV 原有事务模型的一个优化，原本基于 [Percolator](/tipedia/zh/what/Percolator.html) 的事务模型下，从用户决定提交事务到用户感知到提交成功需要 3 次 rpc：

1. 客户端 prewrite 所有 key
2. 客户端获取 `commit_ts`
3. 客户端 commit primary key

secondary keys 会在 3 结束后由客户端在后台异步提交。

而 Async Commit 将这个流程优化为：

1. 客户端获取最小 [`min_commit_ts`](/tipedia/zh/what/min_commit_ts.html)
2. 客户端 prewrite 所有 key

所有 key 都会在 2 结束后由客户端在后台异步提交。

为了使得 快照隔离性 在 Async commit 中仍然成立，每次客户端从 TiKV 上进行事务内的读时，都会用自己的 `start_ts` 推高 TiKV “看见过的最大事件戳”，在 prewrite 时会保证 [`min_commit_ts`](/tipedia/zh/what/min_commit_ts.html) 不小于 TiKV “看见过的最大事件戳” + 1，这样之前的事务就不会读到这个 prewrite 所在事务的写。

为了使得 线性一致性 在 Async commit 中仍然成立，prewrite 之前客户端会向 TSO 获取一个时间戳，作为 [`min_commit_ts`](/tipedia/zh/what/min_commit_ts.html) 的最小约束，所有提交之间的顺序仍然是由 TSO 控制的，故能保证线性一致性。

当然客户端也可以不拿这个时间戳，降级到因果一致性。这种事务可以用

```SQL
START TRANSACTION WITH CAUSAL CONSISTENCY ONLY
```

开启。

Async commit 能将事务的 latency 降低到原本的 60-70% 左右。

## Links

- [文档](https://github.com/tikv/sig-transaction/blob/master/design/async-commit/initial-design.md)
- [Prewrite Result 中的 `min_commit_ts`](https://tikv.github.io/doc/tikv/storage/struct.PrewriteResult.html#structfield.min_commit_ts)
