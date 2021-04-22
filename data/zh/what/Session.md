---

category: concept
aliases: []
tags: [TiDB]
author: longfangsong
last_update: 2021-04-22T03:26:57Z
---

# Session

一个 MySQL 客户端在 TiDB 侧的体现，提供了运行语句，获取 `LastInsertID` 等能力。

主要使用的实现是 [`session`](https://github.com/pingcap/tidb/blob/1f95d7de836a566ebb1edf447e1d891463dc63ba/session/session.go#L182)。

## Links

- [代码](https://github.com/pingcap/tidb/blob/1f95d7de836a566ebb1edf447e1d891463dc63ba/session/session.go#L113)
