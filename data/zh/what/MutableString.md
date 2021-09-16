---

category: concept
aliases: []
tags: [TiDB, Hack]
author: longfangsong
last_update: 2021-09-16T08:29:50Z
---

# MutableString

将 `[]byte` 低成本（不拷贝内容）地转换到 string。

## Links

- [代码](https://github.com/pingcap/tidb/blob/35ef52c77cd3bec2a24027c53d01a3cf4bc2b621/util/hack/hack.go#L22)

## 太史公曰

~~Use it at your own risk.~~
听我一句劝，别用！
`string(bytes)` is good enough!