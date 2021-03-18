---
category: go_down
aliases: []
tags: [PD]
author: longfangsong
last_update: 2021-03-18T00:00:00.00Z
---
# PD节点挂掉

- 挂掉少于一半的 PD 节点

  - 不跨数据中心部署情况下：
    
    - 包含 leader
  
      暂停服务数(~10)秒，重新选主后恢复正常服务。
  
    - 不包含 leader
  
      无影响
    
  - 跨数据中心情况下
    
    - Global TSO 挂
  
      对 Local 事务无影响，对 Global 事务参照不跨数据中心部署情况下挂掉 leader 处理。
  
    - Local TSO 挂

      对 Local 事务参照不跨数据中心部署情况下挂掉 leader 处理，允许将其他数据中心的 PD 选为本数据中心的Local TSO。
  
- 挂掉多于一半的 PD 节点

  - 包含 leader
  
    立即停止服务，tidb 一段时间检测不到 pd 就会杀死所有正在执行的 sql 并且拒绝未来的请求
  
  - 不包含 leader
    
    在 leader "发现"(通过心跳包超时)大部分节点不可用(~2秒)后停止服务。
  