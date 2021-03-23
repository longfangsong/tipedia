---

category: concept
aliases: []
tags: [TiKV]
author: longfangsong
last_update: 2021-03-23T16:48:46Z
---

# Engine

Engine 定义了存储引擎的共有行为。

生产环境中使用的实现是 `RaftKv`，其他实现都用于各个不同级别的测试。

## Links

- [代码](https://github.com/tikv/tikv/blob/6eadb9fc2d0323c712a85b671ae84c11cfbc2450/components/tikv_kv/src/lib.rs#L148)
