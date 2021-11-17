---

category: manual
aliases: []
tags: [TiDB, failpoint]
author: longfangsong
last_update: 2021-11-17T09:21:33Z
---

# 如何通过 TiDB 的 HTTP API 启用 failpoint

首先请保证你使用了开启了 failpoint 的 TiDB 二进制，在构建 TiDB 时，先：

```shell
make failpoint-enable
```

再

```shell
make
```

后得到的 TiDB 二进制是开启了 failpoint 的。

在启动 TiDB 集群时，要从环境变量开启用 HTTP 动态更改 failpoint 的功能：

```
export GO_FAILPOINTS="github.com/pingcap/tidb/server/enableTestAPI=return(true)";
tiup playground --db.binpath <开启了 failpoint 的 TiDB 二进制位置>
```

然后 `http://localhost:10080/fail/` 就会列出目前已经打开的各个 failpoint。

要开启更多 failpoint，只需向对应 url put failpoint 的值：

比如设置 `github.com/pingcap/tidb/ddl/createTableErr` failpoint 的 panic：

```bash
curl http://localhost:10080/fail/github.com/pingcap/tidb/ddl/createTableErr -X PUT -d "panic"
```

## tikv client 的 failpoint

tikv/client-go 从 TiDB 完全独立出去之后，开启其中 failpoint 的 url 变为：

```
tikvclient/xxx
```

如：

```bash
curl http://localhost:10080/fail/tikvclient/beforePrewrite -X PUT -d "panic"
```
