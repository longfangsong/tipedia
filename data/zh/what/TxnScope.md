---
category: concept
aliases: []
tags: [TiDB, txn]
---
# TxnScope

TiDB 5.0 版本中，为加强 TiDB 的跨中心部署能力，将事务分成了 Local （只访问本地数据中心）和 Global （可访问所有数据中心） 两类，在 TiDB 中使用 `TxnScope` 标明每个事务的作用域。

## Links

- [Blog](https://pingcap.com/blog-cn/preliminary-study-on-cross-center-deployment-capability-of-tidb5.0/)