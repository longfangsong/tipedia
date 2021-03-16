---
category: concept
aliases: []
tags: [TiDB]
---
# Special Query

Special Query 指三种执行时需要特别处理的查询：

- load data
- load stats
- index advice

这三种查询在 `clientConn. handleQuerySpecial` 中被处理。

## Links