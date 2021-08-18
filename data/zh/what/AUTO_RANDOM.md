---

category: concept
aliases: []
tags: [TiDB, SQL]
author: longfangsong
last_update: 2021-08-18T05:09:51Z
---

# AUTO_RANDOM

AUTO_RANDOM 是 TiDB 为了解决 “大批量写数据入 TiDB 时因含有整型自增主键列的表而产生的热点问题” 而引入的一个扩展特性。

AUTO_RANDOM 只能用于主键。

AUTO_RANDOM 的值分配方式是：

除去符号位的最高五位（称为 shard bits）由当前事务的开始时间决定，剩下的位数按照自增的顺序分配。

## Links

- [官方文档](https://docs.pingcap.com/zh/tidb/stable/auto-random)
- [生成 AUTO_RANDOM 值的代码](https://github.com/pingcap/tidb/blob/7755d25aba5120dafde98fff11ab3b98ca4d192f/meta/meta.go#L200)