---

category: feature
aliases: []
tags: [TiKV]
author: longfangsong
last_update: 2021-04-01T12:03:37Z
---

# Follower Read

当客户端对一个 Follower 发起读请求的时候，这个 Follower 会请求此时 Leader 的 Commit Index，拿到 Leader 的最新的 Commit Index 后，等本地 Apply 到 Leader 最新的 Commit Index 后，然后将这条数据返回给客户端。

## Links

- [官方博客](https://pingcap.com/blog-cn/follower-read-the-new-features-of-tidb/)
