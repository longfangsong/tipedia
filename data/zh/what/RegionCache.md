---

category: concept
aliases: []
tags: []
author: longfangsong
last_update: 2021-03-30T11:59:14Z
---

# RegionCache

TiDB 中用于缓存从 PD 中获取到的 Region 的地址的结构。

注意这一缓存一般情况下的过期时间为 10 min。

## Links

- [代码](https://github.com/pingcap/tidb/blob/005939563448647c97a357b95c5649b1d0ede78f/store/tikv/region_cache.go#L273)
