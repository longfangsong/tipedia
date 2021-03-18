# Tipedia

## what is this

This is an **unofficial** encyclopedia of TiDB related concepts. The goal is to include all the concepts/configuration items/others that may be encountered during the development/maintenance/use of TiDB.

## Why we need this?

In our work, whether we are reading code, reviewing design documents, reviewing incidents, checking the monitoring statics, or participating in discussions with others, we will often meet up with concepts that we don't understand very well:

(The following content is collected from WeCom)

> What is amend?

> DM 是什么的简称呀。

> 这个 schrodinger_test 是啥？

(The following content is collected from Slack)


> 请问这个 hot_peer 是做什么用的呀？

> ndv 是啥呀？

> sorry, so does the term "amend transaction" mean the transaction altering the metadata of a table/database?

(The following content is collected from google doc)

> distinct filter 的含义是什么，搜了下文档没搜到。

~~ The following two are for fun. ~~ Even the funny ones are valuable!

(Collected from WeChat)

> 弱问 413 是什么

> 不知道渡渡鸟是什么

Many of these questioners are experienced and excellent engineers, even they can't fully understand all the concepts in the entire system, 
let alone a stupid guy like me and those first time contributors.

Before this, if I meet up with concepts that I don’t know much about, I will:

- Check the documentation, but

    - The document is more user-oriented, some things are implementation details or internal workflow, not in the document

- Read the code, but

    - Some things in the system have nothing to do with the code

    - Some abbreviations are just verbal, not in the code

    - Many concepts are ambiguous, but there is no disambiguation page in the code

      For example, there are at least three kinds of `Mutation` in TiKV and client-rust.

      For another example, Commit can refer to:

        - The entire Commit process of the transaction
        - The second stage of 2pc
        - Commit process of raft

      It takes a lot of effort to distinguish which concept is in the current context, and it is also hard to find the corresponding code with brainless full-text search.

    - The code is distributed in multiple repos, which is troublesome to find

- Ask people, but

    - Social phobia guys say no (That's me 😭)
    - Someone who can answer may not available immediately
    - May disturb other people's work

Actually from [Domain Driven Design](https://zh.wikipedia.org/wiki/%E9%A0%98%E5%9F%9F%E9%A9%85%E5%8B%95%E8%A8% AD%E8%A8%88), all of these concepts are part of our [Ubiquitous Language](https://martinfowler.com/bliki/UbiquitousLanguage.html). We usually work in some [Bounded Context](https://martinfowler.com/bliki/BoundedContext.html), we are all very familiar with the concepts, but beyond our [Conceptual Contours](http://ddd.fed.wiki/org/view/conceptual-contours). The concepts may not be well understood by us, even for “understand what others are saying” to “diagnosing problems”, it is necessary to understand these concepts.

The biggest goal of this system is to spread the knowledge in the minds of certain engineers to the entire TiDB production and research system, including R&D, DBAs, community contributors, customers, and so on.

So for this goal, what are the advantages of this project compared with "source code analysis series", "document tree", etc.?

### Unofficial

This project is something that I personally maintain, and I am not going to make it an official project of the company.

The advantages of Unofficial are as follows:

- Unofficial = No pressure, different from writing articles like source code analysis, adding entries in Tipedia is relatively casual, although the reliability may not as high as code analysis.
- Unofficial = Anyone can edit. Anyone in this project can add/modify entries (by sending pr/issue directly, note that due to the existence of @baipiao-bot, pr will be immediately merged as long as it is posted, and no review is required.
- Unofficial = (more hopeful to be) updated frequently. Due to the above two reasons, anyone who finds outdated entries can update directly. Compared with the source code analysis series (and even the code comments, I personally think that to sending a pr for just fixing the comment is not worthy) is more likely to keep up with the latest situation
- Unofficial = Some less official terms can be included, such as "Dagu Road Constitution" 😏

In general, it is to abandon reliability to pursue the update speed and the experience of the updater.

### "Short and fast"

The entry content of this project should be written as short as possible, and links to detailed content (such as documents).

For example, "How to quickly build a TiDB development cluster", just write "Use the `tiup playground` command, see [document](https://docs.pingcap.com/zh/tidb/stable/tiup-playground#playground-%E7%BB%84%E4%BB%B6%E4%BB%8B%E7%BB%8D)" is enough, there is no need to expand how to install tiup and so on.

Because for some scenarios, we only need to have a general understanding of a certain concept, not very in-depth, and the document may "force" us to read a lot of details, wasting our time. Therefore, this project hopes to make the readers choose, they can just glance the description in the entry if just want some basic knowledge, or follow the links to the documentation and code if want to understand it in depth.

## Subproject

### What

Collection concept. Include the names of structures/enum/variables/components/configuration items in the code. Answer the question "What is XXX **".

### How

Tell you what to do if you want to do something, such as "**how** to add a memory table to TiDB", "**how** to print the data exchanged between TiDB/TiKV". After manualizing how to do these things, the threshold of contribution is very low. (For example, after I wrote "How to add a memory table to TiDB", when doing TiDB Transaction related views, I prepared the data source, then opened an issue, and then I could directly throw the task of adding a table to an external contributor. )

### Why

Explain the reasons for some design choices, such as "**why** `statements_summary` and `statements_summary_history` should be divided into two tables"

### Where(WIP)

To help find the code to complete some specific tasks, such as "Where is the column name in the SQL during the query process is encoded as the corresponding KV data", "The request to the TiKV **where** corresponds to To a certain region above me"

### What if(WIP)

Tell us what will happen if XXX, such as "**what happens if **a TiKV node goes down**"

## how to use

### Directly search for what you want to know

Just enter what you want to check in the upper right corner.

[![6P4RgJ.png](https://s3.ax1x.com/2021/03/01/6P4RgJ.png)](https://imgtu.com/i/6P4RgJ)
### Contribute what you know

#### Via Github Issue

Use [this template](https://github.com/longfangsong/tipedia/issues/new?assignees=&labels=contribution&template=contribute-content.md&title=%5BContribute%5D+Title+here) to send an issue,
@baipiao-bot will handle the next thing.

#### Via Github Pull Request

Send pr directly to this warehouse! Since you only need to write/edit a markdown file, you don't even need to clone this repository locally. In the corresponding sub-item of the corresponding language
Just add/modify directly below.

Generally, the content of a markdown is as follows:

```markdown
---
category: entry type, such as concept, component, config-item, etc.
aliases: [] aliases and abbreviations for entries
tags: [] Any tag, TiDB, TiKV, sig/txn are all good tags
author: longfangsong
last_update: 2021-03-18T00:00:00.00Z
---
# Entry name

content

## Links

Some links to external sources, such as code and design documents
```

## Technical Features

From the domain name to the storage to the management bot, all of this project is powered by GitHub and totally free! 😏
