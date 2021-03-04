---
category: concept
tags: [transaction, TiKV, Lock]
---
# LockManager

TiKV中用于管理悲观锁的组件。

## 辨析

[WaiterManager](#/prerendered/what%2FWaiterManager.htmlpart) vs [LockManager](#/prerendered/what%2FLockManager.htmlpart): [WaiterManager](#/prerendered/what%2FWaiterManager.htmlpart) 是 [LockManager](#/prerendered/what%2FLockManager.htmlpart) 的一部分，[LockManager](#/prerendered/what%2FLockManager.htmlpart) 同时还有另一部分 [Detector](#/prerendered/what%2FDetector.htmlpart) 负责进行死锁检测。

## Links

- [代码](https://github.com/tikv/tikv/blob/2a2fa03da53b63f3fc24d7ea53aead40176979b5/src/storage/lock_manager.rs#L48)
