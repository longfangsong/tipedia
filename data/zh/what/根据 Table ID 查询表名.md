---

category: how
aliases: []
tags: [TiDB, SQL]
author: longfangsong
last_update: 2021-06-30T08:56:20Z
---

# 根据 Table ID 查询表名

```sql
SELECT TABLE_NAME FROM tables WHERE TIDB_TABLE_ID=<Table ID>;
```

当然也可以查到一些别的元信息，比如所在数据库、元信息等。

## Links

- [Tables 表的文档](https://docs.pingcap.com/tidb/stable/information-schema-tables)
