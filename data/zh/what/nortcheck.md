---

category: config-item
aliases: []
tags: [TiKV, rocksdb, rust-rocksdb]
author: longfangsong
last_update: 2021-03-29T09:04:33Z
---

# nortcheck

在 TiKV 编译时可以通过开启这个 feature 来跳过在 rust-rocksdb 中的 Iterator 合法性检查，同样的检查在 rocksdb 本身中也会进行，但一旦 rocksdb 的检查失败就会使得整个进程被 kill 掉，这对测试十分不利。故引入这个 feature。

## Links

- [引入的 pr](https://github.com/tikv/tikv/pull/9630)
