---
category: concept
aliases: [Tablet (Spanner，YugabyteDB), Range (CRDB), Raft group]
tags: [TiKV, PD, scheduling]
author: longfangsong
last_update: 2021-03-18T00:00:00.00Z
---
# Region

保存的所有数据中的一部分，这一部分数据作为一个raft group储存在一起。

## Links

- [文档](https://docs.pingcap.com/zh/tidb/stable/glossary/#regionpeerraft-group)
- [Protobuf](https://github.com/pingcap/kvproto/blob/4c02fbeda1da100020c34d5a0eccbfa3cfd17532/proto/metapb.proto#L62)
