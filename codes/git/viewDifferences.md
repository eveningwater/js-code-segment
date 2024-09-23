| 标题                                     | 标签                     |
| ---------------------------------------- | ------------------------ |
| viewDifferences(查看 git 之间的不同更改) | branch,commit(分支,提交) |

使用 Git 时，你经常需要查看更改与上次提交之间的差异。这可以帮助你了解你修改了什么、即将提交什么以及自上次提交以来你做了哪些更改。

Git 提供了 `git diff` 命令来帮助你完成此操作，允许你将更改与上次提交进行比较。默认情况下，结果将显示未暂存更改之间的差异，但你可以使用 `--staged` 选项查看暂存更改与上次提交之间的差异。

> 代码如下:

```shell
# 语法: git diff [--staged]
```

> 使用示例:

```shell
git diff
# 显示未暂存的更改和上次提交之间的差异
git diff --staged
# 显示暂存更改和上次提交之间的差异
```