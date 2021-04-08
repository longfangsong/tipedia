---

category: feature
aliases: []
tags: [txn, TiDB, TiKV]
author: longfangsong
last_update: 2021-04-08T03:37:04Z
---

# Pipelined Pessimistic Lock

即 TiDB 发出加悲观锁请求后立即执行后面的语句，后台异步写入悲观锁。

## Links

- [官方文档](https://docs.pingcap.com/zh/tidb/stable/pessimistic-transaction#pipelined-%E5%8A%A0%E9%94%81%E6%B5%81%E7%A8%8B)
