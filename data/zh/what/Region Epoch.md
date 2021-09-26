---

category: concept
aliases: [RegionEpoch]
tags: [PD]
author: longfangsong
last_update: 2021-09-26T11:22:32Z
---

# Region Epoch

可以简单地理解为 region 的版本号，具体结构如下：

```protobuf
message RegionEpoch {
    // Conf change version, auto increment when add or remove peer
    uint64 conf_ver = 1;
    // Region version, auto increment when split or merge
    uint64 version = 2;
}
```

更新规则如下：

- 配置变更的时候， `conf_ver += 1`。
- Split 的时候，原 region 与新 region 的 version 均等于原 region 的 version + 新 region 个数。
- Merge 的时候，两个 region 的 version 均等于这两个 region 的 version 最大值 + 1。

因此如果两个 Region 拥有的范围有重叠，只需比较两者的 version 即可确认两者之间的历史先后顺序，version 大的更新。

## Links

- [相关源码解析](https://pingcap.com/zh/blog/tikv-source-code-reading-20)
- [Protobuf定义](https://github.com/pingcap/kvproto/blob/df6eb226fab0377bf16d0d148a92a23acf61708c/proto/metapb.proto#L57)