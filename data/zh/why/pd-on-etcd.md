---
category: design-idea
aliases: []
tags: [PD, etcd]
author: longfangsong
last_update: 2021-03-18T00:00:00.00Z
---
# PD 依赖 etcd

原因主要有：

- 简单方便
  
  最初 TiKV 并未实现 Raft。
  
  时至今日修改的工作量大，可选方案有：
  - 部署特殊的TiKV来支持PD leader选举
    
    在运维层面恐怕很难被接受
  
  - TiKV内部运行特殊的raft group
    
    可能要开辟多个独立的keyspace，而且在运维层面可能还是要区分“带特殊 raft group 的 TiKV”和“普通TiKV”
  
  两种方案都涉及大量工作。
  
  此外下游 PD 的修改量也很大。
  
- 多个不同”阶层“的raft混合在一起运行，可能会相互影响并对问题诊断带来一些障碍。
- etcd 较为稳定
- etcd 有较好的社区支持
- TiKV/TiDB 本身目前不具备一部分 etcd 的功能，如 lease/watch

## Links

- [Twitter 上的讨论](https://twitter.com/lemon_hx/status/1366760653835300866?s=21)
  （评论区捕捉 CTO）