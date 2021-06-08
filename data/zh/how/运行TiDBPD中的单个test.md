---

category: how
aliases: []
tags: [TiDB, PD, Golang]
author: longfangsong
last_update: 2021-04-07T10:12:45Z
---

# 运行 TiDB/PD 中的单个 test

在 TiDB 和 PD 我们使用一个魔改过的 [gocheck](http://labix.org/gocheck) 作为测试框架。

这使得我们可以用 `go test -check.f <...>` 来选择要跑的测试，例如：

```sh
# under tidb repo
go test ./distsql -check.f TestTableRangesToKVRanges
```
会运行 `distsql` 包中所有开头为 `TestTableRangesToKVRanges` 的测试函数。

注意如果启用了 failpoint，则此方法不适用，可以使用：

```sh
key-tools=<包名> make testpkg
```

运行一个包内的测试。