---

category: concept
aliases: [Write Intent]
tags: [TiKV, txn, mvcc]
author: longfangsong
last_update: 2021-05-03T08:29:11Z
---

# Write

TiKV 的事务模型中，写入到 write CF 的，保存 commit 成功的最后版本等信息的数据结构。

## Encode & Decode

<input id="key-input"></input>

<!-- todo: 选择输出格式 -->
<div id="input-value"></div>

<ul id="explaination"></ul>
<script type="module">
    import init, {Write, parse_input, write_type_to_u8} from "/tipedia/static/wasm/key-tools/tidb_key_tools.js";
    init();
    $("#key-input").oninput = (e) => {
        const inputBuffer = parse_input(e.target.value);
        const write = Write.parse(inputBuffer);
        const parsing_trace = write.parsing_trace;
        $("#input-value").innerHTML = "";
        $("#explaination").innerHTML = "";
        for (let record of parsing_trace) {
            let content = Array.from(inputBuffer.slice(record.start, record.start + record.width))
                .map(it => it.toString(16))
                .map(it => it.length < 2 ? `0${it}` : it)
                .join(" ");
            let explanation = "";
            console.log(content, record.description);
            switch(record.description) {
                case "short_value":
                    explanation += `是 Short Value`;
                    break;
                case "write_type":
                    explanation += `（${String.fromCharCode(inputBuffer[0])} 的 ASCII 码） 标记了这个 Write 的类型是 `;
                    switch(inputBuffer[0]) {
                        case 80:
                            explanation += "Put";
                            break;
                        case 68:
                            explanation += "Delete";
                            break;
                        case 76:
                            explanation += "Lock";
                            break;
                        case 82:
                            explanation += "Rollback";
                            break;
                    }
                    break;
                case "start_ts":
                    explanation += `标记了该 Write 所在的事务的 start_ts: ${write.start_ts[0]}`;
                    const asBigInt = write.start_ts[0];
                    const binaryStr = write.start_ts[0].toString(2).padStart(64, '0');
                    explanation += `
                    <table id="parsed"><tr><th style="">物理部分 46 位</th><th style="">逻辑部分 18 位</th></tr><tr style="font-family: monospace;"><td style="text-align: right; border: solid 1px;" id="physical-bin">${binaryStr.slice(0, 46)}</td><td style="border: solid 1px;" id="logical-bin">${binaryStr.slice(46, 64)}</td></tr><tr><td style="text-align: right; border: solid 1px;" id="physical-parsed">${(new Date(Number(asBigInt >> 18n))).toString()}</td><td style="border: solid 1px;" id="logical-parsed">${Number("0b"+(binaryStr.toString(2).slice(46, 64)))}</td></tr></table>
`;
                    break;
                case "flag:short_value":
                    explanation += `（v 的 ASCII 码） 标记了这个 Write 有 Short Value`;
                    break;
                case "length:short_value":
                    explanation += `（${parseInt(content, 16)}）是 Short Value 的长度`;
                    break;
            }
            $("#input-value").innerHTML += `<span style="background: #e3e3e3;font-family: monospace;padding: 2px 6px; margin: 4px;">${content}</span>`;
            $("#explaination").innerHTML += `<li>
            <span style="background: #e3e3e3;font-family: monospace;padding: 2px 6px;">${content}</span>${explanation}
            </li>`;
        }
    };
</script>

## Links

- [TiKV 文档](https://tikv.github.io/doc/tikv/storage/mvcc/struct.Write.html)
