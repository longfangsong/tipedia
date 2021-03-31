---

category: what_if
aliases: []
tags: [PD, tso]
author: longfangsong
last_update: 2021-03-30T12:39:37Z
---

# 向刚刚成为 leader，还未完成 TSO 的同步 & 初始化的 PD 请求了 TSO

会返回错误，TiDB 侧的错误是 "timestamp in memory isn't initialized", "sync hasn't completed yet, wait for a while"。
