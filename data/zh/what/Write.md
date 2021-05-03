---

category: concept
aliases: [Write Intent]
tags: [TiKV, txn, mvcc]
author: longfangsong
last_update: 2021-05-03T08:29:11Z
---

# Write

TiKV 的事务模型中，写入到 write CF 的，保存 commit 成功的最后版本等信息的数据结构。

## Links

- [TiKV 文档](https://tikv.github.io/doc/tikv/storage/mvcc/struct.Write.html)
