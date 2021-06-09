⚠️：WIP now!

# TiDB Key Tools

A library which can parsing and making what kind of key a string stand for, and explain it for you.

## Why

There are so many kinds of keys in TiDB/PD/TiKV system!
We have encoded key on TiDB, which will sent to TiKV,
and TiKV will make different changes to that key
(eg. encode a timestamp into it) and store them into rocksdb.

Have you ever try to debug TiDB and see such a key in the log:

```
[8, 0, 0, 0, 0, 0, 0, 0, 248, 255, 255, 255, 255, 255, 255, 255, 249]
```

or

```
\x08\xff\xff\xff\xff\xff\xff\xff\xff\xff
```

or

```
0800000000000000F8
```

and other strange, encoded, unintelligible key formats?

Then unless you are as clever as a computer or very familiar with the keys encode rules,
or you may say to yourself "What heck is this!" and spend hours to read the code to find out.

In fact, since there are patterns in keys in TiDB system, no matter how they are encoded,
it should be possible to decoded and explain them with the help a program, and this library should do this job.

Moreover, many behaviour in TiKV is highly related with the encoded key, so this library also
want to help you to make these kinds of keys easier.

## How to use this library

This library is supposed to be write in Rust and built into a wasm library, which can be ported to [TiPedia](https://longfangsong.github.io/tipedia/zh/index.html) and maybe [TiDE](https://github.com/tidb-incubator/tide).

Using Rust instead of JS/TS directly is because Rust can manipulate bytes easier, and we can reuse some code in TiKV.
