---

category: concept
aliases: []
tags: [TiKV, txn]
author: longfangsong
last_update: 2021-04-01T08:31:10Z
---

# Scanner

TiKV 中用于进行 mvcc 扫描读取的组件

## Cursor vs Iterator vs Scanner

- Scanner 包含多个 Cursor，Cursor 是 Iterator 的封装
- Cursor 在 Iterator 基础上提供了更多功能，如搜集统计信息等
- 虽然 Cursor 本身的实现中并没有体现，但是 Cursor 一定是工作在某一个 [Column Family](/tipedia/zh/what/Column family.html) 上的，而 Iterator 
- Scanner 工作在mvcc层，对版本信息是有感知的，即只会看某个 `Snapshot` 上的数据，而 Cursor 和 Iterator 能看到全部数据。

## Links

- [代码](https://github.com/tikv/tikv/blob/bbc6bffcdadb52d065b184beb49eeac261ab9abe/src/storage/mvcc/reader/scanner/mod.rs#L171)