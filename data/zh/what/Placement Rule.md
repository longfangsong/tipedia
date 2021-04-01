---

category: feature
aliases: []
tags: [PD]
author: longfangsong
last_update: 2021-04-01T11:28:10Z
---

# Placement Rule

Placement Rules 是 PD 在 4.0 版本引入的试验特性，它是一套副本规则系统，用于指导 PD 针对不同类型的数据生成对应的调度。通过组合不同的调度规则，用户可以精细地控制任何一段连续数据的副本数量、存放位置、主机类型、是否参与 Raft 投票、是否可以担任 Raft leader 等属性。

## Links

- [文档](https://docs.pingcap.com/zh/tidb/stable/configure-placement-rules)
