---
category: concept
aliases: []
tags: [TiKV]
---
# WaiterManager

处理等待悲观锁的事务的等待与唤醒。

## 辨析

[WaiterManager](#/prerendered/what%2FWaiterManager.htmlpart) vs [LockManager](#/prerendered/what%2FLockManager.htmlpart): [WaiterManager](#/prerendered/what%2FWaiterManager.htmlpart) 是 [LockManager](#/prerendered/what%2FLockManager.htmlpart) 的一部分，[LockManager](#/prerendered/what%2FLockManager.htmlpart) 同时还有另一部分 [Detector](#/prerendered/what%2FDetector.htmlpart) 负责进行死锁检测。

## Links

- [代码](https://github.com/tikv/tikv/blob/515df8d552cce67111991fc6b205ec2905716c2b/src/server/lock_manager/waiter_manager.rs#L448)
