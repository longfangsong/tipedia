---

category: why
aliases: []
tags: [TiKV, txn]
author: longfangsong
last_update: 2021-04-19T03:37:15Z
---

# TiKV 需要 Rollback 类型的 Write

一个事务回滚之后，由于网络延迟、用户操作等原因 TiKV 仍然有可能收到同一个事务的 `prewrite` 请求，为了防止该 key 被上锁，在其 TTL 过期之前阻塞其它对该 key 的读写。通过写入 `rollback` 记录，如果在 rollback 之后收到同一个事务的 `prewrite`，会返回 `WriteConflict`。

## Links

- [TiKV 源码阅读中对 Rollback 的说明](https://pingcap.com/blog-cn/tikv-source-code-reading-12/#rollback)
