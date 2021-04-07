---

category: 词条类型，比如 concept, component, config-item 等等
aliases: []
tags: [TiKV, cdc]
author: longfangsong
last_update: 2021-04-07T10:30:34Z
---

# Resolver

Resolver 负责计算出一个时间戳 `resolved_ts`，在这个时间戳之前不可能再有事务 commit。

## Links

- [代码](https://github.com/tikv/tikv/blob/286b519eae461928c9f637952521d76aac263622/components/resolved_ts/src/resolver.rs#L9)
