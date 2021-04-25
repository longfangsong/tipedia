---

category: concept
aliases: [TS]
tags: [PD, TiDB, TiKV, txn]
author: longfangsong
last_update: 2021-04-25T05:05:41Z
---

# TimeStamp

TimeStamp 是用于 TiDB 事务系统协调的重要元素，目前设计中的 TimeStamp 分为物理和逻辑两个部分。

物理部分是利用 `UnixNano` 计算得到，保留到 `ms` 精度。

## TimeStamp 解析工具

在下面输入你从日志等来源中看到的 TimeStamp：

<input id="time-input"></input>

解析结果：

<table id="parsed">
    <tr>
        <th style="">物理部分 46 位</th>
        <th style="">逻辑部分 18 位</th>
    </tr>
    <tr style="font-family: monospace;">
        <td style="text-align: right; border: solid 1px;" id="physical-bin">0000000000000000000000000000000000000000000000</td>
        <td style="border: solid 1px;" id="logical-bin">000000000000000000</td>
    </tr>
    <tr>
        <td style="text-align: right; border: solid 1px;" id="physical-parsed">请输入时间戳</td>
        <td style="border: solid 1px;" id="logical-parsed">请输入时间戳</td>
    </tr>
</table>

<script>
$("#time-input").oninput = (e) => {
    const asBigInt = BigInt(e.target.value);
    const binaryStr = asBigInt.toString(2).padStart(64, '0');
    $("#logical-bin").innerHTML = binaryStr.slice(46, 64);
    $("#physical-bin").innerHTML = binaryStr.slice(0, 46);
    $("#logical-parsed").innerHTML = Number("0b"+(binaryStr.toString(2).slice(46, 64)));
    $("#physical-parsed").innerHTML = (new Date(Number(asBigInt >> 18n))).toString();
};
</script>

## Links

- [TiKV 中的 `TimeStamp`](https://tikv.github.io/doc/tikv/storage/mvcc/struct.TimeStamp.html)
- [AskTug 的文章](https://asktug.com/t/topic/2026)
- [pd 中生成 TS 的代码](https://github.com/tikv/pd/blob/85d588391bc2fc4265220c50be41f77e7f5b347f/server/tso/tso.go#L89)
