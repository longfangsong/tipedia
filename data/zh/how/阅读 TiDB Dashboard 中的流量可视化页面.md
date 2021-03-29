---

category: ui
aliases: []
tags: [UI, dashboard]
author: longfangsong
last_update: 2021-03-29T03:41:39Z
---

# 阅读 TiDB Dashboard 中的流量可视化页面

大体上我们主要关注上面的热力图：
- 纵轴代表 {数据库, 表, Bucket}，Bucket 代表一个或多个 [Region](/tipedia/zh/what/Region.html)，流量较小的大量相邻 Region 会被压缩为一个 Bucket。
- 横轴代表时间
- 中间的方块越亮代表对应 Bucket 上的流量越大

## Todo

- Dashboard如何处理 Region 分裂？比如一个很热的，独占 Bucket 的 Region 分裂为两个仍然很热的 Region。

## Links

- [官方文档](https://docs.pingcap.com/zh/tidb/stable/dashboard-key-visualizer)
