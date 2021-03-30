---

category: concept
aliases: []
tags: [TiKV]
author: longfangsong
last_update: 2021-03-30T12:24:06Z
---

# Offline

当对某个 TiKV 缩容后，该 TiKV 会变为 Offline 状态，该状态只是 TiKV 下线的中间状态，处于该状态的 TiKV 会进行 leader 的 transfter 和 region balance ，当 leader_count/region_count (pd-ctl 获取) 均显示 transfter 或 balance 完毕后，该 TiKV 会由 Offline -> Tombstone。在 Offline 状态时，禁止关闭该 TiKV 服务以及其所在的物理服务器。

## Links

- [AskTUG 上的文章](https://asktug.com/t/topic/37551)
