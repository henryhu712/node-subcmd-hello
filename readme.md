# 使用 node.js 创建命令行子命令 Hello World

使用 commander 库来创建命令行工具很方便，commander 在 github 上有 1.3 万 star，是一个流行的 node.js 库。

想想 git 命令包括众多的子命令：git add, git commit, git push, 等等，你也创建像 git 一样的一组命令行工具。使用 commander 来创建具有子命令的一组命令很方便，每个子命令是一个单独的 js 文件，默认文件名：

    [主命令]-[子命令].js


## 创建过程

创建一个目录，并初始化：

    mkdir subcmd
    cd subcmd
    npm init

安装 commander

    npm i commander

创建主命令文件 index.js

设置主命令文件权限为 755 （可执行文件）。

创建子命令文件 index-hello.js。子命令文件权限不需要具有可执行。

测试：

    $ ./index.js hello
    Hello World!
