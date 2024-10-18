| 标题                                               | 标签         |
| -------------------------------------------------- | ------------ |
| viewCommitsByString(查看操作特定字符串的 Git 提交) | commit(提交) |

如果你不知道如何操作，那么在 Git 存储库中查找所有操作特定字符串的提交听起来是一项相当棘手的任务。幸运的是，Git 提供了一种直接的方法来搜索操作给定字符串的提交。

使用 `git log -S<string>`，你可以找到所有操作指定 `<string>` 的提交。`-S` 标志用于查找更改指定字符串出现次数的差异。

你还可以将任何其他有效过滤器应用于 `git log` 命令，以进一步缩小搜索结果范围（例如按日期范围）。

> 代码如下:

```shell
# 语法:  git log -S<string>
```

> 使用示例:

```shell
git log -S<string>
# commit aa73321dd115bf10ce08a8ea0d1b5383b79b01d3
# Author: eveningwater <854806732@qq.com>
# Date:   Wed May 29 22:17:26 2024 +0800
#     feat: 修改了js代码段
# ...
```