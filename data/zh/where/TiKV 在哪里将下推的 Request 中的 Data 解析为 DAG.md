---

category: where
aliases: []
tags: []
author: longfangsong
last_update: 2022-01-20T05:13:52Z
---

# 词条名

观察 [`coprocessor::Request`](https://www.tikv.dev/doc/rust-client/tikv_client_proto/coprocessor/struct.Request.html), 可以发现他带了一个二进制的数据 data，而 TiKV 处理的 coprocessor 应当是一个 DAG。

TiKV 会在 [这里](https://github.com/tikv/tikv/blob/3aa6bc32727a8161c47f76e4e3b4e833a0ae6095/src/coprocessor/endpoint.rs#L143) 将这个 data 字段解析成 [DagRequest](https://github.com/pingcap/tipb/blob/3d2699ad59b9cc257cce9b15dcdcd2e141526c82/proto/select.proto#L67)。

