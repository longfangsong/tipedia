# 兼容性表格

|                       | 聚簇索引 | Binlog | pre_split_regions | TiCDC | RawKV | BR    | Lightning | TiFlash | Async commit | 1pc  | Amend Pessimistic Txn |
| --------------------- | -------- | ------ | ----------------- | ----- | ----- | ----- | --------- | ------- | ------------ | ---- | --------------------- |
| 聚簇索引              | -        | v5.1   | ❌                 | ✅     |       |       |           |         |              |      |                       |
| Binlog                | v5.1     | -      |                   |       |       | 🚫[^1] |           |         | 🐢            | 🐢    | ❌                     |
| pre_split_regions     | ❌        |        | -                 |       |       |       |           |         |              |      |                       |
| TiCDC                 | ✅        |        |                   | -     | ❌     | 🚫[^1] |           |         |              |      |                       |
| RawKV                 |          |        |                   | ❌     | -     |       |           |         |              |      |                       |
| BR                    |          | 🚫[^1]  |                   | 🚫[^1] |       | -     |           |         |              |      |                       |
| Lightning             |          |        |                   |       |       |       | -         | 🐢       |              |      |                       |
| TiFlash               |          |        |                   |       |       |       | 🐢         | -       |              |      |                       |
| Async commit          |          | 🐢      |                   |       |       |       |           |         | -            |      |                       |
| 1pc                   |          | 🐢      |                   |       |       |       |           |         |              | -    |                       |
| Amend Pessimistic Txn |          | ❌      |                   |       |       |       |           |         |              |      | -                     |

✅：确定兼容

❌：确定完全不兼容

🚫：使用有一定限制

🐢：一起使用会有效率问题，或者本该使得性能提升的功能不工作

版本号：某版本之后兼容

[^1]: 恢复数据无法由 TiCDC / Drainer 同步到下游

<style>
    table {
        border-collapse: collapse;
    }
    td, th {
        border: solid 1px black;
        padding: 5px;
    }
</style>