---

category: feature
aliases: []
tags: [PD, TiDB, TiKV]
author: longfangsong
last_update: 2021-03-24T08:59:45Z
---

# Follower forward request

若某组件与上游组件的 leader 网络隔离，但与上游组件的 follower 间网络正常、上游组件的follower 和 leader 间网络正常，则对上游组件的请求会转发给 follower，再由 follower 转给 leader。

