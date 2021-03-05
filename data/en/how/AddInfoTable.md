---
category: handbook
tags: [TiDB, SQL]
---
# Add an infoschema table in TiDB

1. 在 tidb 仓库的 `infoschema/tables.go`，向文件一开始那个大 `enum` 的最后添加一条 `TableXXX = "<表名>"`

2. 在下面的 `tableIDMap` 里为他添加一个 `tableId`

3. 在下面的 `tableXXXCols` 里面添加这个表的 `column` 定义

4. 在下面的 `tableNameToColumns` 里面添加 `TableXXX` 到 `tableXXXCols` 的映射

5. 在 `executor/infoschema_reader.go`，为 `memtableRetriever`，添加一个 `setDataForXXX`，这个函数的主要用途就是把数据转成 [`Datum`](#/prerendered/what%2FDatum.htmlpart) 的样子然后放在 `memtableRetriever` 的 `rows` 里面，这里数据从哪里来我就不管了，你自己决定。

6. 然后在 `memtableRetriever.retrieve` 里的大 `switch` 里面加一个 `case`，`case` 的键就是你在 1. 中写的那个 `TableXXX`，行为就是 `setDataForXXX`。

7. 在 `executor/builder.go` 中的 `executorBuilder.buildMemTable` 里的 `case util.InformationSchemaName.L` 里的那个 `switch` 里面，加上对应的 `case`，一般在最长的那坨 `case` 最后加一条 `strings.ToLower(infoschema.TableXXX)` 就行

注：
如果希望某个表有全集群和单个 TiDB server 节点两个版本，
只需在 `infoschema/cluster.go` 注册单 server 表`XXX`对应的全集群版本：
`CLUSTER_XXX`，然后和对应单机表一起进行 6. 和 7. 两步操作即可。