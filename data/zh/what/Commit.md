---

category: concept
aliases: []
tags: [raft]
author: longfangsong
last_update: 2021-03-23T08:23:19Z
---

# Commit

在 raft 状态机中如果 leader 觉得一条 log 可以被接受了，则认为这条 log commit 成功了。

## 辨析

Commit vs Apply: Commit 指 raft 状态机“判断一条log是否可以接受”的步骤，而 Apply 指实际接受这条 log 的过程。

## Links

- [Raft Paper](https://raft.github.io/raft.pdf)