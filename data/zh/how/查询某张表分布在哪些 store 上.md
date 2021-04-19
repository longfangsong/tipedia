---

category: howto
aliases: []
tags: []
author: longfangsong
last_update: 2021-04-19T02:41:57Z
---

# 查询某张表分布在哪些 store 上

使用 SQL 语句：
```sql
SELECT p.STORE_ID, COUNT(s.REGION_ID) PEER_COUNT FROM INFORMATION_SCHEMA.TIKV_REGION_STATUS s JOIN INFORMATION_SCHEMA.TIKV_REGION_PEERS p on s.REGION_ID = p.REGION_ID WHERE TABLE_NAME = '<table_name>' GROUP BY p.STORE_ID ORDER BY PEER_COUNT DESC;
```
替换掉其中的 `<table_name>` 即可。

如果要筛选出 leader，添加条件 `p.is_leader = 1` 即可。

## Links

本答案引用自[PD Oncall 参考答案](https://docs.google.com/document/d/1LEIFxXYakyw_Gg1qd5KjrgRWc-c9r_1AjEm5pwisdnY/edit#)
