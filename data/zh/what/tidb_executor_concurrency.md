---

category: config-item
aliases: []
tags: [TiDB, executor]
author: longfangsong
last_update: 2021-11-16T10:01:13Z
---

# 词条名

用于控制各个 SQL 算子的并发度，包括：

- index lookup
- index lookup join
- hash join
- hash aggregation（partial 和 final 阶段）
- window
- projection

## Links

- [官方文档](https://docs.pingcap.com/zh/tidb/stable/system-variables#tidb_executor_concurrency-%E4%BB%8E-v50-%E7%89%88%E6%9C%AC%E5%BC%80%E5%A7%8B%E5%BC%95%E5%85%A5)

