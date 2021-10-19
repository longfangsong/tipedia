---

category: feature
aliases: []
tags: [TiDB, TiFlash]
author: longfangsong
last_update: 2021-10-19T06:49:21Z
---

# Super batch

TiDB 读取 TiFlash 时的一个优化。

Region 过多时，TiDB 会产生大量的 Region 读取请求，而造成调度延迟放大。

TiDB 可以把所有需要发送到同一个 TiFlash 的请求合并，而 TiFlash 则会在内部自行进行 Raft 相关的读取容错。这个优化就是 Super batch。

## Links

- [官博文章](https://pingcap.com/zh/blog/tiflash-is-getting-faster)
