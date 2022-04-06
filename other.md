### git 用法

```
  1. git clone (git init)

  2. git pull
    2.1 git pull = git fetch + git merge (git fetch 相当于是从远程获取最新到本地，不会自动 merge)
    2.2 git pull -rebase

  3. git status 查看文件状态(修改、新增、删除、)

  4. git add . 提交所有文件(.可以是后面可加文件名)

  5. git commit -m '提交信息' 提交到远程仓库

  6. git stash (save) 会保存当前工作进度，会把暂存区和工作区的改动保存到一个未完结变更的堆栈中
    6.1 git stash list 查看所有隐藏, 每一行的冒号前面的字符串就是标识此隐藏的 id
    6.1 git stash pop 恢复最新的进度到工作区
    6.1 git stash apply 重新显示标识为 id 的隐藏
    6.1 git stash pop stash@[stash_id] 恢复指定的进度到工作区
    6.1 git stash drop git apply 恢复隐藏后, 需要手动删除 list 列表中的记录

  7. git rebase (git rebase --abort)

  8. git merge (git merge --abort)

  9. git cherry-pick (git cherry-pick --abort)

  10. git log 日志查看

  11. git reflog 查看所有分支的操作记录，包括已删除的分支

  12. git branch 创建分支

  13. git checkout 切换分支
```



### yarn 和 npm 的区别



### 跨域问题
