#!/usr/bin/env bash

BASE_PATH='/Users/jiangzg/PhpstormProjects/JIGUO'
echo -e "\n切换目录:${BASE_PATH}/jiguo\n"
cd ${BASE_PATH}/jiguo

#清理分支
BRANCH_PREFIX="j-system-auto-build-"
GIT_BRANCH=`git branch`
GIT_BRANCH=(${GIT_BRANCH//\*/ })

for branch in ${GIT_BRANCH[@]}
do
    if [ "${branch:0:${#BRANCH_PREFIX}}" == "${BRANCH_PREFIX}" ];then
        echo 'git branch -D '${branch}
        git branch -D ${branch}
    fi
done

echo '清理完成'




