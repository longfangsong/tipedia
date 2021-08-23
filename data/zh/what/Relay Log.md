---

category: concept
aliases: []
tags: [tool, binlog]
author: longfangsong
last_update: 2021-08-23T03:42:42Z
---

# Relay Log

为了防止 binlog 的 drainer 异常退出造成下游集群的不一致，drainer 可以先将 binlog event 写入本地磁盘，这份 log 就是 Relay Log，再同步给下游集群，并在此过程中记录 checkpoint，开始同步时其 consistent 值为 false，结束后更新为 true。如果 drainer 启动时检测到 checkpoint 的 consistent 为 false，则会使用 Relay Log 来将下游集群同步到一致状态。

## Links

- [官方文档](https://docs.pingcap.com/zh/tidb/stable/tidb-binlog-relay-log)
- [引入的 PR](https://github.com/pingcap/tidb-binlog/pull/893)
