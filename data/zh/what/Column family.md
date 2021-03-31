---

category: concept
aliases: [CF]
tags: []
author: longfangsong
last_update: 2021-03-31T09:16:02Z
---

# Column family

以一个 key （称为 Row[^1] key） 作为标示的一个 [Column](/tipedia/zh/what/Column-b1fb2562d61cb19ceadd92fd836d470b.html) 的集合。

![Group 37](https://user-images.githubusercontent.com/13777628/113119775-6632c700-9243-11eb-891a-0707a385eeb1.png)

比如，TiKV 中常见的 Column family 有：

- 用于存放实际数据的 "default" Column family
- 用于存放锁信息的 "lock" Column family
- 用于存放 Write intent 的 "write" Column family

## Links

- [Wikipedia](https://en.wikipedia.org/wiki/Standard_column_family)

