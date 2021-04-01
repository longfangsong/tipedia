---

category: concept
aliases: []
tags: [TiDB, optimizer]
author: longfangsong
last_update: 2021-04-01T11:49:05Z
---

# Index Nested Loop Merge Join
即可以内部走index的，
外表经过 WHERE 条件过滤后结果集较小（小于 1 万行），join keys 中的内表列集合是内表使用的 index 的前缀，或内表使用的 index 是 join keys 中的内表列集合的前缀的场景下，该算法相比于 index loop join 会更节省内存。

## Links

- [官方文档](https://docs.pingcap.com/zh/tidb/stable/explain-overview#index-merge-join-%E7%A4%BA%E4%BE%8B)