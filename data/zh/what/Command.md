---
category: concept
aliases: []
tags: [TiKV, txn]
---
# Command

在 TiKV 的事务层中，每一个要执行某种动作的请求都被抽象为一个command。
现有的 command 有：
- acquire_pessimistic_lock
- check_secondary_locks
- check_txn_status
- cleanup
- commit
- mvcc_by_key
- mvcc_by_start_ts
- pause
- pessimistic_rollback
- prewrite
- resolve_lock
- resolve_lock_lite
- resolve_lock_readphase
- rollback
- txn_heart_beat

## Links

- [代码](https://github.com/tikv/tikv/blob/master/src/storage/txn/commands/mod.rs)
