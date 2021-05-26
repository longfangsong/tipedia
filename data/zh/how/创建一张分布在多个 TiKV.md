---

category: how
aliases: []
tags: [TiKV]
author: longfangsong
last_update: 2021-05-26T06:10:59Z
---

# 创建一张分布在多个 TiKV 上的表

注意：首先请确保你真的使用了有多个（三个以上） TiKV 节点的集群。

使用 Split Region 功能，例如：

```sql
use test; 
create table t(id int NOT NULL PRIMARY KEY, b int); 
SPLIT TABLE t BETWEEN(0) and(3000) REGIONS 3;
```

注意 split 作用在 PRIMARY KEY 上，每个 region 至少要有1000个位置。

如果此时 insert：

```sql
insert into t(id, b) values (100, 1), (1100, 2), (2100, 3);
```
insert 的三条记录就会分别进入三个 tikv 中。

用 `show table t regions;` 并观察 `LEADER_STORE_ID` 可以确认这些 region 已经被打散到多个 TiKV 上。