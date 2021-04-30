---

category: concept
aliases: []
tags: [TiDB, TiKV]
author: longfangsong
last_update: 2021-04-30T06:59:00Z
---

# Memory Comparable Encoding

Memory Comparable Encoding 是 TiDB 中使用的一种便于在对 key 进行“修饰”（加后缀）之后仍然能保持字典顺序（上升序）的编码方式。

简单来说，就是将 key 按照 8 bytes 一组进行 padding，然后再加入一个 byte，值为 0xFF - 这个组中 padding 占的字节数。

原理：
对 key 加后缀之后，顺序不同只可能出现在一个 key 比另一个短的情况下，通过加 padding 的方式：
- 将原本的由 key 本身的长度进行比较的点强行拉到了一个组的结尾额外添加的 byte 的比较
- 加入的额外 byte “0xFF - 这个组中 padding 占的字节数“，其比较结果始终是原本更短的组更小，所以在这一步就能比较出原本 key 的大小关系，屏蔽了后面添加的后缀的影响

## Links

- [TiDB 中的编码部分代码](https://github.com/pingcap/tidb/blob/86c8bf05503340493223f54088b7bb705a7ae3bb/util/codec/bytes.go#L34)
