---

category: concept
aliases: []
tags: [TiKV, raft]
author: longfangsong
last_update: 2021-04-07T12:21:07Z
---

# RaftMessage

其他 [Peer](/tipedia/zh/what/Peer.html) 发送过来关于 Raft 状态机本身的消息，包括心跳、日志、投票消息等。

## Links

- [Protobuf 定义](https://github.com/pingcap/kvproto/blob/df6eb226fab0377bf16d0d148a92a23acf61708c/proto/raft_serverpb.proto#L12)
