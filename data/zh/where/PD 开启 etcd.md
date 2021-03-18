---
category: where
aliases: []
tags: [PD]
author: longfangsong
last_update: 2021-03-18T00:00:00.00Z
---
# PD 开启 etcd

在 pd-server 启动之后，会立即启动一个 embedded etcd，见 [代码](https://github.com/tikv/pd/blob/f82f2d82c2d6dfbf303c893ec25c5aa68ce72572/server/server.go#L475)。

