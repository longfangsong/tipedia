---

category: concept
aliases: []
tags: [TiKV, CDC]
author: longfangsong
last_update: 2021-04-07T10:40:23Z
---

# Delegate

TiKV 上，供下游 CDC 订阅的组件，负责将 [peer](/tipedia/zh/what/Peer.html) 上的 raft commands 转换为 CDC 事件。

## Links

- [代码](https://github.com/tikv/tikv/blob/94816a9d7bc0611c874c092dd184b0f41e18ed2d/components/cdc/src/delegate.rs#L232)
