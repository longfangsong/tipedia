---

category: howto
aliases: []
tags: []
author: longfangsong
last_update: 2021-04-19T02:41:57Z
---

# 查询某张表分布在哪些 Store 上
## 法1

```sql
show table t regions;
```

即可。

## 法2
使用 SQL 语句：
```sql
SELECT p.STORE_ID, COUNT(s.REGION_ID) PEER_COUNT FROM INFORMATION_SCHEMA.TIKV_REGION_STATUS s JOIN INFORMATION_SCHEMA.TIKV_REGION_PEERS p on s.REGION_ID = p.REGION_ID WHERE TABLE_NAME = '<table_name>' GROUP BY p.STORE_ID ORDER BY PEER_COUNT DESC;
```
替换掉其中的 `<table_name>` 即可。

如果要筛选出 leader，添加条件 `p.is_leader = 1` 即可。

另外表上的 `index` 可能并不和表本身分布在同一个 [Store](/tipedia/zh/what/Store.html) 上，查 `index` 分布的 SQL 如下：

```sql
select count(s.region_id) cnt, s.index_name, p.store_id from INFORMATION_SCHEMA.TIKV_REGION_STATUS s join INFORMATION_SCHEMA.tikv_region_peers p on s.region_id = p.region_id where s.table_name = '<table_name>' group by index_name, p.store_id order by index_name,cnt desc;
```

同样可以添加条件 `p.is_leader = 1` 来筛选出 leader。

## Links

方法2引用自[PD Oncall 参考答案](https://docs.google.com/document/d/1LEIFxXYakyw_Gg1qd5KjrgRWc-c9r_1AjEm5pwisdnY/edit#)
