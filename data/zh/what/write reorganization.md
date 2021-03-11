---
category: concept
aliases: [reorg]
tags: [TiDB, DDL, schema]
---
# write reorganization

TiDB 的异步 schema 变更过程中的一个状态，这个状态只出现在 column/index/table 创建过程中，这个状态下会给新添加的列填写数据。

## Links

- [Schema change 相关blog](http://zimulala.github.io/2016/02/02/schema-change-implement/)
