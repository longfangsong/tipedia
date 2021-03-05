---
category: 词条类型，比如 concept, component, config-item 等等
aliases: []
tags: []
---
# Protected Rollback

在引入了 [Collapse Rollback](https://longfangsong.github.io/tipedia/#/prerendered/what%2FCollapse%20Rollback.htmlpart) 和悲观事务后，某个事务的 primary key 上的 rollback 记录可能会被 collapse 掉了，造成这个事务的 secondary keys 被意外提交。

为了避免这个情况，我们把这些悲观事务的 primary key 上的 rollback 记录标记为 protected，不 collapse 他们。

## Links

- [引入的 PR](https://github.com/tikv/tikv/pull/5575)
