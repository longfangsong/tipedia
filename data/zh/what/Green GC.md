---
category: feature
aliases: []
tags: []
author: longfangsong
last_update: 2021-03-18T00:00:00.00Z
---
# Green GC

使得GC过程中可以跳过 raft 层直接resolve lock。

## Links

- [文档](https://docs.pingcap.com/zh/tidb/stable/garbage-collection-configuration#tikv_gc_scan_lock_mode)
