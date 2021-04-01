---

category: concept
aliases: []
tags: [TiKV, Raft]
author: longfangsong
last_update: 2021-04-01T12:11:46Z
---

# Commit Index

Commit Index 标记了目前状态机 commit 到第几个日志项了。

leader该index包含在之后的AppendEntries RPC中。

