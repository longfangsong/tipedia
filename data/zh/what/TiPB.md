---
category: project
aliases: []
tags: [TiDB, protobuf, grpc]
author: longfangsong
last_update: 2021-03-18T00:00:00.00Z
---
# TiPB

TiDB 的 protobuf 文件所在的仓库。

## 辨析

tipb vs kvproto: 请注意 TiKV 是可以脱离 TiDB 独立运行的 kv 数据库，kvproto 是 **TiKV**  的 protobuf 定义。

虽说如此，一部分 tipb 中的请求仍然可以被下推到 TiKV 的coprocessor 上。

## Links
- [仓库地址](https://github.com/pingcap/tipb)
