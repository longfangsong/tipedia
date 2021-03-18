---
category: where
aliases: []
tags: [TiDB, exec, sql]
author: longfangsong
last_update: 2021-03-18T00:00:00.00Z
---
# TiDB 开始处理一句SQL

在 [server/conn.go](https://github.com/pingcap/tidb/blob/master/server/conn.go#L1435) 中的 [`handleQuery` 函数](https://github.com/pingcap/tidb/blob/cad8e15db2da8caf2cc0e03b2caa9939e35bf6f0/server/conn.go#L1435)，TiDB 第一次意识到了自己处理的是用户传入的 SQL。

这个函数会 parse 传入的 SQL 并用来调用同一文件中的 [`handleStmt`](https://github.com/pingcap/tidb/blob/cad8e15db2da8caf2cc0e03b2caa9939e35bf6f0/server/conn.go#L1618)，而 `handleStmt` 会将大部分SQL语句转发到 [`TiDBContext.ExecuteStmt`](https://github.com/pingcap/tidb/blob/cad8e15db2da8caf2cc0e03b2caa9939e35bf6f0/server/driver_tidb.go#L216)，然后再转发到 [`session.ExecuteStmt`](https://github.com/pingcap/tidb/blob/cad8e15db2da8caf2cc0e03b2caa9939e35bf6f0/session/session.go#L1373) 处理。
大部分语句会在 `session.ExecuteStmt` 中[被编译成 `Plan`](https://github.com/pingcap/tidb/blob/cad8e15db2da8caf2cc0e03b2caa9939e35bf6f0/session/session.go#L1400) 并由 [`runStmt`](https://github.com/pingcap/tidb/blob/cad8e15db2da8caf2cc0e03b2caa9939e35bf6f0/session/session.go#L1482) [执行](https://github.com/pingcap/tidb/blob/cad8e15db2da8caf2cc0e03b2caa9939e35bf6f0/session/session.go#L1422)

## Links

- [TiDB 源码阅读系列文章（三）SQL 的一生](https://pingcap.com/blog-cn/tidb-source-code-reading-3/)
