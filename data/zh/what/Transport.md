---

category: concept
aliases: []
tags: [TiKV, raft]
author: longfangsong
last_update: 2021-04-07T12:13:37Z
---

# Transport

用于表示派发 RaftMessage 能力的 trait。

“主实现” 是 `ServerTransport`。

## Links

- [Transport trait 代码](https://github.com/tikv/tikv/blob/a79519878d4e80ce1342ebe905e8c8933db42894/components/raftstore/src/store/transport.rs#L10)
- [ServerTransport 代码](https://github.com/tikv/tikv/blob/0f135cbb543c5a19e0344f07e8ccc65fb33eb245/src/server/transport.rs#L12)
