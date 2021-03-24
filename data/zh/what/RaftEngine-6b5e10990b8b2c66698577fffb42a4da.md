---

category: concept
aliases: []
tags: [TiKV, raft]
author: longfangsong
last_update: 2021-03-24T06:44:29Z
---

# RaftEngine

一个代表了 “基于 Raft 的一致性存储引擎” 的抽象，生产过程中主要使用的实现为 `RaftLogEngine`。

## Links

- [代码](https://github.com/tikv/tikv/blob/2aae76a75c701db9956730b73eff27fc08ee461f/components/engine_traits/src/raft_engine.rs#L5)
