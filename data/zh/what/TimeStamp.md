---

category: concept
aliases: [TS]
tags: [PD, TiDB, TiKV, txn]
author: longfangsong
last_update: 2021-04-25T05:05:41Z
---

# TimeStamp

TimeStamp 是用于 TiDB 事务系统协调的重要元素，目前设计中的 TimeStamp 分为物理和逻辑两个部分。

物理部分是利用 `UnixNano` 计算得到，保留到 `ms` 精度。

## Links

- [TiKV 中的 `TimeStamp`](https://tikv.github.io/doc/tikv/storage/mvcc/struct.TimeStamp.html)
- [AskTug 的文章](https://asktug.com/t/topic/2026)
- [pd 中生成 TS 的代码](https://github.com/tikv/pd/blob/85d588391bc2fc4265220c50be41f77e7f5b347f/server/tso/tso.go#L89)
