---

category: pattern
aliases: []
tags: [TiDB, testing]
author: longfangsong
last_update: 2021-10-11T06:46:02Z
---

# Testing Knob

Testing Knob 是 TiDB 中一种常见的用于方便测试的 Pattern，具体指在设计 `struct` 时事先埋下一些供测试时调用，用于修改或者观察对象内部状态等的点，同时处理业务逻辑时也要相应地添加和这些埋的点的交互。

这一 Pattern 的优点：
- 大大方便了测试

这一 Pattern 的缺点：
- 给正常的结构体设计和业务流程处理增加了大量噪音
