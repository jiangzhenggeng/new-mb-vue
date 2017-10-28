#!/usr/bin/env bash



string=`git status`

findstr='nothing to commit, working tree clean'
#获取当前分支名称
CURRENT_BRANCH=${string:(-${#findstr})}
echo $string
echo $CURRENT_BRANCH
