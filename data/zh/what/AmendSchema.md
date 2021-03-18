---
category: concept
aliases: [amend]
tags: [TiDB, txn]
author: longfangsong
last_update: 2021-03-18T00:00:00.00Z
---
# AmendSchema

当有并发进行的DDL时，事务可以自动修改其mutation以减少 commit 失败的情况。

## Links

- [代码](https://github.com/pingcap/tidb/blob/eae64e40fee5976dc8d22ab5ad27b3f0cdba8a67/store/tikv/txn.go#L51)
- [代码](https://github.com/pingcap/tidb/blob/d19a21d92a9b9409ee8f1c7dbb197fdcf5b7c06c/session/schema_amender.go)