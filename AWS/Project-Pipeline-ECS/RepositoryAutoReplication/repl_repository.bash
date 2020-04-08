#!/bin/bash                                                                                                                                                 

git config --global credential.helper '!aws codecommit credential-helper $@'
git config --global credential.UseHttpPath true

git fetch -p origin
git push --mirror
