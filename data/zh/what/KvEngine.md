---

category: concept
aliases: []
tags: [TiKV]
author: longfangsong
last_update: 2021-03-23T16:11:05Z
---

# KvEngine

TiKV 中使用的单机存储引擎的抽象。

实现了这个 trait 的主要是基于 RocksDB 的 RocksEngine。

## Links

- [代码](https://github.com/tikv/tikv/blob/6eadb9fc2d0323c712a85b671ae84c11cfbc2450/components/engine_traits/src/engine.rs#L12)