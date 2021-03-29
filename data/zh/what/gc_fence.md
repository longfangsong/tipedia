---

category: concept
aliases: []
tags: [tikv, txn, gc]
author: longfangsong
last_update: 2021-03-29T11:57:09Z
---

# gc_fence

为了防止后写入的，和前面某个 commit [overlap](/tipedia/zh/what/Overlapping Rollback.html) 的 rollback 动作把某个已经 GC 掉的 Commit Record “写回来”，造成读到理应已经 GC 掉的数据，我们会在 `Write` 的 `gc_fence` 字段记录：

- 先 commit 后 rollback （所以是[Overlapping Rollback](/zh/what/Overlapping%20Rollback.html)） 的，且
- 类型是`Put` 或 `Delete` 

的 Commit Record 的下一个 类型是 `Put` 或 `Delete` 的 Commit Record 的版本号。



## Links

- [有大量注释和例子的代码](https://github.com/tikv/tikv/blob/f684d82cdb9e30876ca78c09d63990345a83f29a/components/txn_types/src/write.rs#L77)
