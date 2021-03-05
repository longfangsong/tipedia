---
category: concept
aliases: []
tags: [TiKV, sig/txn, largeTxn, asyncCommit]
---
# min_commit_ts

`min_commit_ts` 指事务预期最早被提交的时间戳，在两个场合被使用：

## 大事务中的 `min_commit_ts`

`min_commit_ts` 在事务开始时设置为该事务（设其为事务 A）的 `start_ts` + 1。

当其他事务（设其为事务 B）试图读事务 A “锁住”的 key 时，会将事务 A 的 `min_commit_ts` 推进为事务 B 自身的`start_ts` + 1，来强迫系统使得自己看不到事务 A 的结果。可以看作是事务 A rebase 到了事务 B 上面。

## async commit 中的 `min_commit_ts` 

在使用了 async commit 的事务处理过程中，TiKV 会在对每个 Prewrite 请求持久化时，将本地所“看见”到过最大的时间戳作为 `min_commit_ts` 一起持久化下去，并返回给 TiDB。

对于 TiDB，实际用于提交的 `commit_ts = max { min_commit_ts }`。

## Links

- [大事务文档](https://pingcap.com/blog/large-transactions-in-tidb)
- [async commit文档](https://github.com/tikv/sig-transaction/blob/master/design/async-commit/initial-design.md)
- [Prewrite Result 中的 `min_commit_ts`](https://tikv.github.io/doc/tikv/storage/struct.PrewriteResult.html#structfield.min_commit_ts)
