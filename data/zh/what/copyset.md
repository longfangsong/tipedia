---

category: concept
aliases: []
tags: [scheduling]
author: longfangsong
last_update: 2021-03-31T06:02:44Z
---

# copyset

为了降低多台服务器一起挂掉时数据因为损失了所有副本而丢失的问题，引入了 copyset 的概念。

copyset 指预先划分好的一组服务器，每台服务器位于多个 copyset 中，每次写入数据时，选择任意集群节点为master，然后随机选取其所在的一个 copyset，在其中同步数据。

这样做了之后，将（分片数趋向于无穷大时）必定会丢数据的条件从 “随机挂掉 k 台服务器” 变成了 “当且仅当挂掉一个 copyset 中的 k 台服务器”，故改善了问题。

## Links

- [Paper](https://www.usenix.org/system/files/conference/atc13/atc13-cidon.pdf)
