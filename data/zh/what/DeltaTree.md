---

category: concept
aliases: [DT]
tags: [TiFlash]
author: longfangsong
last_update: 2021-04-07T02:47:20Z
---

# DeltaTree

TiFlash 现在使用的列式存储引擎。

Delta Tree 将表数据按照主键进行 range 分区，切分后的数据块称为 Segment；然后 Segment 内部则采用了类似 LSM Tree 的分层结构。

## Links

- [知乎上的文章](https://zhuanlan.zhihu.com/p/164490310)
