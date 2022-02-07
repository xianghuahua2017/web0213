这是一个react项目
更新一个文件在 branch01分支（https://www.jianshu.com/p/e25c763b9816）
1.创建一个新分支：git branch branch01
2.检查分支是否创建成功：git branch
3.切换到我的新分支：git checkout branch01
4.检查是否切换成功：git branch
5.提交我的改动到新分支上：git add . 
                        git commit -m '备注'
6.检查提交是否成功： git status
7.切换到主分支：git checkout master
8.将新分支提交的改动合并到主分支上：git merge branch01
9.push代码：git push -u origin master
10.最后可以删除这个分支：git branch -D branch01