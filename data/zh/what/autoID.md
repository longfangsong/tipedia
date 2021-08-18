---

category: component
aliases: []
tags: [TiDB]
author: longfangsong
last_update: 2021-08-18T03:33:22Z
---

# autoID

TiDB 中负责分配和操作（主要是 rebase 操作，即修改已经分配过的最大值来操纵后面的值如何分配）各种 ID （包括Table ID，自增列的值等）的组件。

## Links

- [代码](https://github.com/pingcap/tidb/tree/7755d25aba5120dafde98fff11ab3b98ca4d192f/meta/autoid)
