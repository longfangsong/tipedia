---

category: 词条类型，比如 concept, component, config-item 等等
aliases: []
tags: []
author: longfangsong
last_update: 2021-09-26T04:50:56Z
---

# Load base split

Load Base Split 会基于统计信息自动拆分 Region。通过统计去识别出那些读流量在 10s 内持续超过阈值的 Region，并在合适的位置将这些 Region 拆分。

## Links

- [官方文档](https://docs.pingcap.com/zh/tidb/stable/configure-load-base-split)
