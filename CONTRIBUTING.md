# Contributing to Atom

:+1::tada: 首先感谢您的 contribute! :tada::+1:

下面是一些向这个项目**本身**贡献代码的指导。
如果你只是想向pedia中添加一个条目，请用 [这个模版](https://github.com/longfangsong/tipedia/issues/new?assignees=&labels=contribution&template=contribute-content.md&title=%5BContribute%5D+Title+here) 发一个 issue！ 

## 前端

前端是一个 trival 的 react 项目，clone 下来代码直接

```shell
yarn run
```
就好了。

注意所有由 markdown 渲染得到的文件都是由 `Page` 组件通过 `dangerouslySetInnerHTML` 加载的。在通过 CI 编译和部署项目时会自动由 `/data` 生成 `/public/data`，项目内的 `/public/data`
仅供调试时观看效果。

## “后端”

严格来说这个项目没有后端，所有的数据都储存在前端。

但是为了把把用户编写的 markdown 文件渲染成 html 供前端直接 `fetch`，以及使用 bot 进行内容管理，我们需要一个这样的东西：

[static-wiki](https://github.com/longfangsong/static-wiki/)

其中 `md_translator` 用于将 `/data` 中的 markdown 文件编译为 html 文件（由于不是完整的html，扩展名为 `.htmlpart`），同时收集一个 `json` 文件作为搜索的 index。

`github_wiki_bot` 就是用于进行内容管理的 bot 了。
