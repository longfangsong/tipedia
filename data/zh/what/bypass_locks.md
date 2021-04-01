---

category: concept
aliases: []
tags: [TiKV, mvcc]
author: longfangsong
last_update: 2021-04-01T06:38:38Z
---

# bypass_locks

在 client 从 TiKV 中读取过程中，别的事务的 [`min_commit_ts`](/tipedia/zh/what/min_commit_ts.html) 会被向前推进，然后这向前推的这段时间内被锁住的 key 就不会再 block 这个事务的读。

`bypass_locks` 字段记录这些 lock 的ts。

## Links

- [引入的 PR](https://github.com/tikv/tikv/pull/5798)
- [coprocessor::ReqContext 中的这一字段](https://tikv.github.io/doc/tikv/coprocessor/struct.ReqContext.html#structfield.bypass_locks)
- [PointGetter 中的这一字段](https://tikv.github.io/doc/tikv/storage/mvcc/struct.PointGetter.html#structfield.bypass_locks)
- [SnapshotStore 中的这一字段](https://tikv.github.io/doc/tikv/storage/struct.SnapshotStore.html#structfield.bypass_locks)
- [ScannerConfig 中的这一字段](https://tikv.github.io/doc/tikv/storage/mvcc/reader/scanner/struct.ScannerConfig.html#structfield.bypass_locks)