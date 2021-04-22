---

category: concept
aliases: []
tags: [TiDB]
author: longfangsong
last_update: 2021-04-22T06:20:52Z
---

# SessionManager

一个表示管理 [Session](/tipedia/zh/what/Session.html) 情况的能力的接口。

主要要求实现者支持拿 Process 的信息，杀掉某个 connection 等。

## Links

- [代码](https://github.com/pingcap/tidb/blob/86c8bf05503340493223f54088b7bb705a7ae3bb/util/processinfo.go#L160)

- [引入的 PR](https://github.com/pingcap/tidb/pull/2744)