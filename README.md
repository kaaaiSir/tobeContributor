# tobeContributor
start to be qualified contributor



#### 测试主库已有更改，贡献者仍在之前的节点上，此时如何提交代码：

- 将主库的git地址取名为 upstream 添加为你的一个远程源
    git remote add upstream xxx(主库的git地址)
- 如果贡献者有多个分支，则先切到 与主库对应的主分支
    git checkout main(main为主库的分支)
- 拉取主库的最新代码，(main为主库的分支)
    git fetch upstream main
- 合并主库代码到 当前源的main分支
    git merge upstream main(main为主库的分支)
- 提交代码到贡献者自己的库
    git push
- 在贡献者自己的库中 create pull request 到主库对应的分支上，等待主库自动化测试通过，通过之后等待主库作者通过或驳回。
