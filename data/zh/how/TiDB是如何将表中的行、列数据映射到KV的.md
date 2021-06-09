---

category: how
aliases: []
tags: [TiDB, TiKV, codec]
author: longfangsong
last_update: 2021-06-09T05:51:48Z
---

# TiDB 是如何将表中的行、列数据映射到KV的

每行数据按照如下规则进行编码成 Key-Value pair：

```
Key: t{tableID}_r{rowID}
Value: [col1, col2, col3, col4]
```

其中 tableID 和 rowID 是其无符号 64 bit 表示 xor 上 0x8000000000000000 的结果，这么做的原因是保证所有的 id 按bit有序。

虽然 ID 实际上不会有负值，但是由于一系列历史遗留原因，TiDB 代码中这里还是用的 int64 类型。

## Encode & Decode

<input id="key-input"></input>

<!-- todo: 选择输出格式 -->
<div id="input-value"></div>

<ul id="explaination"></ul>
<script type="module">
import init, {parse_input, parse_record} from "/tipedia/static/wasm/key-tools/tidb_key_tools.js";
    init();
    $("#key-input").oninput = (e) => {
        const inputBuffer = parse_input(e.target.value);
        const result = parse_record(inputBuffer);
        const content = Array.from(inputBuffer).map(it => it.toString(16)).map(it => it.length < 2 ? `0${it}` : it);
        $("#input-value").innerHTML = content.join(" ");
        $("#explaination").innerHTML = `<li><span style="background: #e3e3e3;font-family: monospace;padding: 2px 6px;">${content[0]}</span>：表 id 前缀 "t"</li>`;
        $("#explaination").innerHTML += `<li><span style="background: #e3e3e3;font-family: monospace;padding: 2px 6px;">${content.slice(1,9).join(" ")}</span>：表 id：${result.table_id}</li>`;
        $("#explaination").innerHTML += `<li><span style="background: #e3e3e3;font-family: monospace;padding: 2px 6px;">${content[9]}</span>：分隔符 "_"</li>`;
        $("#explaination").innerHTML += `<li><span style="background: #e3e3e3;font-family: monospace;padding: 2px 6px;">${content[10]}</span>：行 id 前缀 "r"</li>`;
        $("#explaination").innerHTML += `<li><span style="background: #e3e3e3;font-family: monospace;padding: 2px 6px;">${content.slice(11).join(" ")}</span>：行 id：${result.row_id}</li>`;
    };
</script>

## Links

- [三篇文章了解 TiDB 技术内幕 - 说计算](https://pingcap.com/blog-cn/tidb-internal-2/)
- [编码相关代码](https://github.com/pingcap/tidb/blob/6026b6389195f522634068d513976172866fccd4/tablecodec/tablecodec.go#L102)
