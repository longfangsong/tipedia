---

category: component
aliases: [TiCDC]
tags: []
author: longfangsong
last_update: 2021-04-01T09:29:33Z
---

# TiCDC

TiCDC 是一款通过拉取 TiKV 变更日志实现的 TiDB 增量数据同步工具，具有将数据还原到与上游任意 TSO 一致状态的能力，同时提供开放数据协议 (TiCDC Open Protocol)，支持其他系统订阅数据变更。

## TiCDC vs TiDB Binlog

见 [TiDB Book](https://book.tidb.io/session2/chapter2/why-cdc.html) 上的说明。

## Links

- [文档](https://docs.pingcap.com/zh/tidb/stable/ticdc-overview)
- [代码仓库](https://github.com/pingcap/ticdc)
