---
category: optimize
aliases: []
tags: [TiKV, txn]
author: longfangsong
last_update: 2021-03-18T00:00:00.00Z
---
# Collapse Rollback

如果一个 key 被连续多次 rollback，我们可以将这些 rollback 合并，只保留最后一个 rollback。以免 `write` column family 的大量数据拖慢读取。

## Links

- [带入这个优化的pr](https://github.com/tikv/tikv/pull/3290)

## 太史公曰

如果是我来做而且知道后面会引发那么多麻烦的话，我宁可不要这个优化 （❌

（其实和后面做 Feature 的方式可能也有关系吧…… 太难了.jpg）