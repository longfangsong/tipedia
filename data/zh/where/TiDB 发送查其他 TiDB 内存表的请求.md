---

category: where
aliases: []
tags: []
author: longfangsong
last_update: 2021-11-02T10:15:37Z
---

# TiDB 发送查其他 TiDB 内存表的请求

TiDB 查其他 TiDB 内存表是通过将 TiDB 也作为一个 store 注册，查询时向其下推 cop 请求来实现的。

这种 cop 请求在[这里](https://github.com/pingcap/tidb/blob/94e30df8e2d8ba2a1a26f153f40067ba3acd78eb/store/copr/coprocessor.go#L161)被构造。

## Links

- [最初引入的 PR](https://github.com/pingcap/tidb/pull/13065)
