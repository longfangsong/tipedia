---

category: config-item
aliases: []
tags: [TiDB, txn]
author: longfangsong
last_update: 2021-03-31T03:21:45Z
---

# tidb_guarantee_linearizability

用于控制 TiDB 的事务是否要保证 linearizability，关闭后则只保证因果一致性。

## Links

- [代码](https://github.com/pingcap/tidb/blob/f43f750fb551f2f9f62a046cdc04d13f5ca4b51c/sessionctx/variable/tidb_vars.go#L514)
