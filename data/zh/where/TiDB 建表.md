---

category: where
aliases: []
tags: [TiDB, DDL]
author: longfangsong
last_update: 2021-05-19T13:07:23Z
---

# TiDB 建表

在将建表的语句编译到 [`Executor`](https://github.com/pingcap/tidb/blob/5d40ea459a4bf3fc862d193c246dda96da976fc4/executor/executor.go#L244) 的对应变种 [`DDLExec`](https://github.com/pingcap/tidb/blob/5fd39d1ed0e4e5baeb7b759c24e140f7038fcff4/executor/ddl.go#L43) 之后，由其上的 [`executeCreateTable`](https://github.com/pingcap/tidb/blob/5fd39d1ed0e4e5baeb7b759c24e140f7038fcff4/executor/ddl.go#L204) 调用 [`ddl.CreateTableWithInfo`](https://github.com/pingcap/tidb/blob/2ca98e393cb6873727a177cb5c974fa8d3ca61c5/ddl/ddl_api.go#L1824) 将建表工作化为 `Job`，放入 DDL 执行队列异步执行。
在 [`worker.runDDLJob`](https://github.com/pingcap/tidb/blob/6344f7a02e4243949e892ddc02ffd142de6890d7/ddl/ddl_worker.go#L672) 函数中，`Job` 被从队列中取出，并根据任务的具体类型，被分配到使用 [`onCreateTable`](https://github.com/pingcap/tidb/blob/2ca98e393cb6873727a177cb5c974fa8d3ca61c5/ddl/table.go#L45) 执行，然后调用 [`createTableOrViewWithCheck`](https://github.com/pingcap/tidb/blob/2ca98e393cb6873727a177cb5c974fa8d3ca61c5/ddl/table.go#L99)，用 [`Meta.CreateTableOrView`](https://github.com/pingcap/tidb/blob/d2bdfd51b71646dd7c78e437ee40458bef6649cd/meta/meta.go#L333) 最终将表的元信息编码为 KV 对，并通过 [`HSet`](https://github.com/pingcap/tidb/blob/86c8bf05503340493223f54088b7bb705a7ae3bb/structure/hash.go#L46) 写入到事务中，并最终提交到 TiKV。
