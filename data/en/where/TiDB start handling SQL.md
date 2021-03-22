---

category: where
aliases: []
tags: [TiDB, exec, sql]
author: longfangsong
last_update: 2021-03-22T04:16:29Z
---

# TiDB start handling SQL

In server/conn.go, TiDB realized for the first time that it was dealing with the SQL passed in by the user.

This function will parse the incoming SQL and use it to call [`handleStmt`](https://github.com/pingcap/tidb/blob/cad8e15db2da8caf2cc0e03b2caa9939e35bf6f0/server/conn.go#L1618) in the same file, and [`TiDBContext.ExecuteStmt`](https://github.com/pingcap/tidb/blob/cad8e15db2da8caf2cc0e03b2caa9939e35bf6f0/server/driver_tidb.go#L216) will forward most of the SQL statements to `TiDBContext.ExecuteStmt`, and then to [`session.ExecuteStmt`](https://github.com/pingcap/tidb/blob/cad8e15db2da8caf2cc0e03b2caa9939e35bf6f0/session/session.go#L1373) for processing.
Most of the statements will be [compiled into `Plan`](https://github.com/pingcap/tidb/blob/cad8e15db2da8caf2cc0e03b2caa9939e35bf6f0/session/session.go#L1400) in `session.ExecuteStmt` and [executed by `runStmt`](https://github.com/pingcap/tidb/blob/cad8e15db2da8caf2cc0e03b2caa9939e35bf6f0/session/session.go#L1422)

## Links

- [TiDB Source Code Reading Series (3) The Life of SQL](https://pingcap.com/blog-cn/tidb-source-code-reading-3/) 


