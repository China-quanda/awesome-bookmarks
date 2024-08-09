# Git新建分支不要有主分支的代码

在Git中，创建新分支时，默认会包含主分支（通常是master或main）的所有代码。如果你想创建一个新分支但不包含主分支的代码，你可以使用以下步骤：

## 1、首先，确保你的本地代码库是最新的。检出到主分支并拉取最新的代码。

```bash
git checkout master
git pull
```

## 2、接下来，创建并切换到新分支，但不移动HEAD。

```bash
git checkout --orphan new_branch
```

## 3、清除新分支上的所有文件。
```bash
git rm -rf .
```

## 4、在新分支添加一个文件。
```bash
touch example.md
```

## 5、添加你想要的新文件到新分支。
```bash
git add example.md
```

## 6、提交这些更改到新分支。
```bash
git commit -m "Initial commit on new_branch"
```

## 7、最后，你可以推送新分支到远程仓库。
```bash
git push -u origin new_branch
```

这样，你就创建了一个不包含主分支代码的新分支`new_branch`。

## 本地操作命令输出：
```bash
# 检出到主分支
quanda@192 testgit % git checkout master
Already on 'master'
Your branch is up to date with 'origin/master'.

# 拉取最新的代码
quanda@192 testgit % git pull
Already up to date.

# 创建并切换到新分支，但不移动HEAD
quanda@192 testgit % git checkout --orphan new_branch
Switched to a new branch 'new_branch'

# 清除新分支上的所有文件。
quanda@192 testgit % git rm -rf .
rm 'master.js'

# 在新分支添加一个文件。
quanda@192 testgit % touch example.md

# 添加你想要的新文件到新分支
quanda@192 testgit % git add example.md

# 提交这些更改到新分支。
quanda@192 testgit % git commit -m "Initial commit on new_branch"
[new_branch (root-commit) c5bc1e1] Initial commit on new_branch
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 example.md

## 推送新分支到远程仓库。
quanda@192 testgit % git push -u origin new_branch
Enumerating objects: 3, done.
Counting objects: 100% (3/3), done.
Writing objects: 100% (3/3), 225 bytes | 225.00 KiB/s, done.
Total 3 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Powered by GITEE.COM [GNK-6.4]
remote: Create a pull request for 'new_branch' on Gitee by visiting:
remote:     https://gitee.com/china-quanda/testgit/pull/new/china-quanda:new_branch...china-quanda:master
To https://gitee.com/china-quanda/testgit.git
 * [new branch]      new_branch -> new_branch
branch 'new_branch' set up to track 'origin/new_branch'.
```

## 附
删除远程: 
```bash
git push origin --delete test_branch
```
删除本地: 
```bash
git branch -d test_branch
```
强制删除本地: 
```bash
git branch -D test_branch
```