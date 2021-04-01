---

category: concept
aliases: []
tags: [TiDB, optimizer]
author: longfangsong
last_update: 2021-04-01T11:44:41Z
---

# Build 表

对于两张待 join 的表 t1, t2。选取其中的一张表按照 join 条件给的列建立hash 表。然后扫描另外一张表，一行一行去建好的 hash 表判断是否有对应相等的行来完成 join 操作，这个操作我们称之为 probe (探测)。前一张表我们叫做 build 表，后一张表我们的叫做 Probe 表。

