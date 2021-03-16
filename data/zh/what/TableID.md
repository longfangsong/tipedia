---
category: concept
aliases: []
tags: [TiDB]
---
# TableID

为了保证同一个表的数据放在一起，方便查找，TiDB 会为每个表分配一个表 ID，用 TableID 表示。表 ID 是一个整数，在整个集群内唯一。

## Links

- [官方文档](https://docs.pingcap.com/zh/tidb/stable/tidb-computing)
- [TiDB 中为表分配 ID 的操作](https://github.com/pingcap/tidb/blob/26ccbe972ac55bc9ff0b2f0992cad3f82198647f/ddl/ddl_api.go#L1731)
