---
category: concept
aliases: []
tags: [TiKV, txn]
---
# Scheduler

在 TiKV 的事务层中，`Scheduler` 负责调度 [`Command`](/tipedia/zh/what/Command.html) 的执行，当一个 `Command` 从用被打到 TiKV 请求中被创建之后，就会被放入这个结构中，在适当时机得到执行.
并且 Scheduler 也会在 Command 的生命周期的各个阶段执行一些操作，比如记录监控数据等。

为了支持 `Command` 的顺利执行，这一结构提供了用于对 `Command` 执行并发控制的 `Latches`、用于悲观事务获取锁的 [`LockManager`](/tipedia/zh/what/LockManager.html) 等。

## Links

- [代码](https://github.com/tikv/tikv/blob/abc9a81117df0ad3e99ab16a519b717bc676f595/src/storage/txn/scheduler.rs#L242)
