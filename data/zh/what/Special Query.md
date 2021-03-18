---
category: concept
aliases: []
tags: [TiDB]
author: longfangsong
last_update: 2021-03-18T00:00:00.00Z
---
# Special Query

Special Query 指三种执行时需要特别处理的查询：

- load data
- load stats
- index advice

这三种查询在 `clientConn. handleQuerySpecial` 中被处理。

## Links