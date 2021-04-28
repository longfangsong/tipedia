---

category: concept
aliases: []
tags: []
author: longfangsong
last_update: 2021-04-28T06:27:08Z
---

# Short Value

TiKV 的一个优化，如果 value 比较短，则可以直接和 write 记录一起存在 `writeCF` 里，而不用存在 `defaultCF` 里，符合这种条件的 value 就是 Short Value。

目前 Short Value 的大小阈值是 255 bytes。

## Links

- [控制大小阈值的常量](https://github.com/tikv/tikv/blob/3b234d02154d19e1c41230804a94b6c67758d1d0/components/txn_types/src/types.rs#L14)
