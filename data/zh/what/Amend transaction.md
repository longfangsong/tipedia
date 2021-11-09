---

category: feature
aliases: []
tags: [txn, TiDB]
author: longfangsong
last_update: 2021-11-09T03:51:30Z
---

# Amend transaction

在悲观事务模式下开启该特性后，如果该事务相关的表存在并发 DDL 操作和 SCHEMA VERSION 变更，TiDB 会尝试对该事务进行 amend 操作，修正该事务的提交内容，使其和最新的有效 SCHEMA VERSION 保持一致，从而成功提交该事务而不返回 Information schema is changed 报错。

## Links

- [官方文档中的相关配置项](https://docs.pingcap.com/zh/tidb/stable/system-variables#tidb_enable_amend_pessimistic_txn-%E4%BB%8E-v407-%E7%89%88%E6%9C%AC%E5%BC%80%E5%A7%8B%E5%BC%95%E5%85%A5)
