---

category: concept
aliases: []
tags: [Rocksdb]
author: longfangsong
last_update: 2021-05-10T03:37:40Z
---

# Write Stall

当上层写入 RocksDB 速度过快，RocksDB 就会对写入进行降速（stall）处理。
主要有以下几个 stall 的点：
- Too many memtables
  当 `max_write_buffer_number` 大于等于 3，需要 flush 的 memtable 数量已经大于等于 `max_writer_buffer_number - 1` 的时候，RocksDB 就会 stall 写入。

- Too many level-0 SST files
  当 level 0 的 SST file 的数量达到 level0_slowdown_writes_tigger 的时候，RocksDB 就会 stall 写入。

- Too many pending compaction bytes
  当预计的 compaction 数据的大小达到了 sofe_pending_compaction_bytes 之后，RocksDB 会 stall 写入。


## Links

- [RocksDB 官方文档](https://github.com/facebook/rocksdb/wiki/Write-Stalls)
- [唐长老在简书上的文章](https://www.jianshu.com/p/a2892a161a7b)
