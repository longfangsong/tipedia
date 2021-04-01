---

category: concept
aliases: []
tags: [TiKV, raft]
author: longfangsong
last_update: 2021-04-01T11:59:06Z
---

# Apply

Raft 状态机实际“执行”一条 log 的过程。

## 辨析

Commit vs Apply: Commit 指 raft 状态机“判断一条log是否可以接受”的步骤，而 Apply 指实际接受这条 log 的过程。
