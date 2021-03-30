---

category: 词条类型，比如 concept, component, config-item 等等
aliases: []
tags: [TiKV]
author: longfangsong
last_update: 2021-03-30T12:26:51Z
---

# Disconnect

当 PD 和 TiKV 的心跳信息丢失超过 20s 后，该 TiKV 的状态会变为 Disconnect 状态，当时间超过 `max-store-down-time` 定义的时间后，该 TiKV 会变为 Down。

## Links

- [AskTUG 上的文章](https://asktug.com/t/topic/37551)
