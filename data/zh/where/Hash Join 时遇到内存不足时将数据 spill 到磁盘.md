---
category: where
aliases: []
tags: [TiDB, excutor]
author: longfangsong
last_update: 2021-03-18T00:00:00.00Z
---
# Hash Join 时遇到内存不足时将数据 spill 到磁盘

如果用户在配置文件中设置了 `OOMUseTmpStorage`，在内存不足时 TiDB 会将内存中放不下的数据 spill 到磁盘，这一行为在 [executor/join.go](https://github.com/pingcap/tidb/blob/7c552f52fabeff0c4aad33e69a8193cd94ecd9c5/executor/join.go#L748) 中注册到 `memory.Tracker`。在 [Consume](https://github.com/pingcap/tidb/blob/7c552f52fabeff0c4aad33e69a8193cd94ecd9c5/util/memory/tracker.go#L280) 内存时，如果发现了OOM，就会调用这里设置的 `action`。

