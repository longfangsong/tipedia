---

category: concept
aliases: [version, start_version, transaction_id, txn_id]
tags: [TiKV, txn]
author: longfangsong
last_update: 2021-04-01T03:51:33Z
---

# start_ts

事务的开始时间戳，也用于唯一标记一个事务。

## Links

- [Protobuf](https://github.com/pingcap/kvproto/blob/3f221b5992a93085f1dfc933ed576a705c4cff5e/proto/kvrpcpb.proto#L84)

## 太史公曰

其实大部分场合下我更倾向于叫他 `txn_id` 的……
