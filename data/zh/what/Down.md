---

category: concept
aliases: []
tags: [TiKV]
author: longfangsong
last_update: 2021-03-30T12:25:26Z
---

# Down

表示该 TiKV 与集群失去链接的时间已经超过了 `max-store-down-time` 定义的时间，默认 30 分钟，超过该时间后，相应的 TiKV 会变为 Down，并且开始在存活的 TiKV 上补足各个 Region 的副本。

## Links

- [AskTUG 文章](https://asktug.com/t/topic/37551)
