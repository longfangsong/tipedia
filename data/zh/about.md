# Tipedia

## 这是什么

这是一个**非官方**的 TiDB 相关概念的百科，目标收录所有 TiDB 开发/维护/使用过程中可能会碰到的 概念/配置项/其他 等等。

## 为什么会有这个东西

在工作中，无论是 读代码 、review 设计文档、看事故复盘、查监控还是参与他人讨论，我们都会常常碰到我们不甚了解的概念：

（以下内容收集自企业微信）
> What is amend?

> DM 是什么的简称呀。

> 这个 schrodinger_test 是啥？

（以下内容收集自 Slack）

> 请问这个 hot_peer 是做什么用的呀？

> ndv 是啥呀？

> sorry, so does the term "amend transaction" mean the transaction altering the metadata of a table/database?

（以下内容收集自 google doc）

> distinct filter 的含义是什么，搜了下文档没搜到。

~~下面两个是来搞笑的。~~ 就算是搞笑的也很有价值！

（搜集自微信）

> 弱问 413 是什么

> 不知道渡渡鸟是什么

这些提问的人中许多都是经验丰富的优秀工程师，就连他们都不能完全了解整个系统中所有的概念，更不用说像本人这样又蠢又笨的小白😭和想要第一次做贡献的 contributor 了。

在平时如果碰到这些不太了解的概念，我会：

- 查文档，但是

    - 文档更多是面向用户的，有些东西是实现细节或者内部工作流程，文档里并没有

- 看代码，但是

    - 有些制度上的东西和代码没关系

    - 有些简称只是口头上说的，代码里并没有

    - 很多概念都有二义性，而代码里却并没有消歧义页面

      比如 TiKV 和 client-rust 里加起来至少有三种 `Mutation`。

      再比如 Commit 可以指：

        - 事务的一整个 Commit 过程
        - 2pc 的第二阶段
        - raft 的 Commit 过程

      分辨当前上下文中是哪一个概念需要费一番功夫，找到对应的代码又不能直接无脑全文搜索又要费一番功夫

    - 代码分布在多个仓库里，找起来比较麻烦

- 问人，但是

    - 社恐表示拒绝（是我了😭）
    - 不一定有人可以立即回答
    - 打扰他人工作

实际上从 [领域驱动设计](https://zh.wikipedia.org/wiki/%E9%A0%98%E5%9F%9F%E9%A9%85%E5%8B%95%E8%A8%AD%E8%A8%88) 的观点来看，所有这些概念都是我们的 [Ubiquitous Language](https://martinfowler.com/bliki/UbiquitousLanguage.html) 的一部分，我们平时工作一般都是在某个 [Bounded Context](https://martinfowler.com/bliki/BoundedContext.html) 下，对于其中的概念我们都非常熟悉，但是对于超出我们 [Conceptual Contours](http://ddd.fed.wiki.org/view/conceptual-contours) 的概念，我们可能就不太了解了，即使对于从“听明白别人在说什么”到“问题的诊断”，了解这些概念都是必须的。

这个系统的最大目标就是：把某些工程师头脑中的知识传播到整个 TiDB 产研系统，包括研发、实施[^1]、社区 contributor、客户， 等等。

那么对于这个目标来说这个项目和 “源码解析系列”、“文档树” 等相比有什么优势呢？

### Unofficial

这个项目是由我个人维护的一个东西，我也不准备让他成为公司的正式项目。

Unofficial 的优势如下：

- Unofficial = 无压力，和源码解析这类文章要仔细写不同，在 Tipedia 里加词条相对随意，虽然相应地可靠性不一定有源码解析高
- Unofficial = 任何人可编辑，本项目任何人都可以添加/修改词条（通过直接发pr的方式，注意由于 @baipiao-bot 的存在，pr只要发了就会立即被合，不需要任何审核）
- Unofficial = （更有希望）更新快，由于上面两条的原因，任何人发现过时的词条都可以直接去更新，相比源码解析系列（甚至代码的注释，我个人常常觉得为了更新一点注释发一个 pr 不甚值得）更有可能和最新的情况保持同步
- Unofficial = 可以收录一些不太 official 的词条，比如《大沽路宪法》😏

大体上，就是放弃可靠性追求更新速度和更新者的体验。

### “短平快”

本项目的词条内容尽量写的短小一些，并留下指向详细内容（比如文档）的链接。

比如 “如何快速搭建 TiDB 开发集群”，只需写 “使用 `tiup playground` 命令，见[文档](https://docs.pingcap.com/zh/tidb/stable/tiup-playground#playground-%E7%BB%84%E4%BB%B6%E4%BB%8B%E7%BB%8D)” 即可，不需要展开如何安装 tiup 等等。

因为对于有些场景来说，我们对某个概念只需要有大概的了解就行，并不需要非常深入，而文档可能会“强迫”我们读很多细节，浪费我们的时间。所以本项目就希望把选择权交还给读者，想大概了解的看看词条里的说明就行，想深入理解的跟着指向文档和代码的链接走。

## 子项目

### What

收录概念。包括代码里的结构体/enum/变量/组件/配置项等等的名称。解答 “XXX **是什么**” 的问题。

### How

告诉你想要做到一件事应该怎么去做，比如“**如何**给 TiDB 添加一个内存表”，“**如何**打印 TiDB/TiKV 间交换的数据”。把如何做这些事手册化之后，contribution 的门槛就非常低了。（比如我把“如何给 TiDB 添加一个内存表”写好之后，在做 TiDB Transaction related views 的时候，我准备好数据源，然后开一个 issue，就可以直接把加表的任务甩给外部 contributor 做）

### Why(WIP)

解释一些设计上的选择的原因，比如 “**为啥** `statements_summary` 和 `statements_summary_history` 要分成两张表”

### Where(WIP)

帮助找到完成某些特定任务的代码在哪里，比如 “查询过程中 SQL 里的列名**在哪里**被编码为对应KV数据”，“打到 TiKV 上的请求**在哪里**对应到自己上面的某个 region 身上”

### What if(WIP)

告诉我们如果 XXX 时 会发生什么，比如“**如果**一个 TiKV 节点挂掉**会发生什么**”

## 怎么用

### 直接 search 你想知道的东西

在右上角输入你要查的东西就好了。

[![6P4RgJ.png](https://s3.ax1x.com/2021/03/01/6P4RgJ.png)](https://imgtu.com/i/6P4RgJ)
### 贡献你知道的东西

#### 通过 Github Issue

用 [这个模版](https://github.com/longfangsong/tipedia/issues/new?assignees=&labels=contribution&template=contribute-content.md&title=%5BContribute%5D+Title+here) 发一个 issue, 
@baipiao-bot 会 handle 接下来的事情。

#### 通过 Github Pull Request

直接给这个仓库发pr！由于你只是需要写/编辑一个 markdown 文件，你甚至不需要把这个仓库 clone 到本地。在对应语言的对应子项目
下面直接新增/修改就行了。

一般一个 markdown 的内容如下：

```markdown
---
category: 词条类型，比如 concept, component, config-item 等等
aliases: [] 词条的别称和简称
tags: [] 任意 tag 比如 TiDB, TiKV, sig/txn 都是很好的tag
author: longfangsong
last_update: 2021-03-18T00:00:00.00Z
---
# 词条名

内容

## Links

一些指向外部，比如代码、设计文档的链接
```

## 技术特点

本项目从域名到存储到用于管理的bot，全部都是白嫖 GitHub！😏

[^1]: 即以前我们说的 DBA，有些人不喜欢 DBA 这个称呼，个人感觉实施工程师是一个比较好的说法。
