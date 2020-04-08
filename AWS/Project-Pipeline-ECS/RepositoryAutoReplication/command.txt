Execute the following command in an EC2 instance attached a IAM role with the following policy:
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "VisualEditor0",
            "Effect": "Allow",
            "Action": [
                "codecommit:*",
                "ecr:*",
                "iam:CreateRole",
                "iam:AttachRolePolicy"
            ],
            "Resource": "*"
        }
    ]
}

git config --global credential.helper '!aws codecommit credential-helper $@'
git config --global credential.UseHttpPath true
git clone --mirror https://git-codecommit.ap-southeast-2.amazonaws.com/v1/repos/AWS-DevOps

cd LocalRepository
git remote set-url --push origin https://git-codecommit.us-east-1.amazonaws.com/v1/repos/AWS-DevOps

[root@ip-172-31-6-31 RepoCR]# ls
Dockerfile  LocalRepository  repl_repository.bash

[root@ip-172-31-6-31 LocalRepository]# ../repl_repository.bash
Enumerating objects: 183, done.
Counting objects: 100% (183/183), done.
Compressing objects: 100% (100/100), done.
Writing objects: 100% (183/183), 54.21 MiB | 322.00 KiB/s, done.
Total 183 (delta 56), reused 183 (delta 56)
remote: processing ............
To https://git-codecommit.us-east-1.amazonaws.com/v1/repos/AWS-DevOps
 * [new branch]      master -> master

[root@ip-172-31-6-31 LocalRepository]# ls
branches  config  description  FETCH_HEAD  HEAD  hooks  info  objects  packed-refs  refs
[root@ip-172-31-6-31 LocalRepository]# ../repl_repository.bash
Everything up-to-date

docker build -t repocc .

[root@ip-172-31-6-31 RepoCR]# docker run repocc
Everything up-to-date

[root@ip-172-31-6-31 RepoCR]# docker tag repocc:lyour_ [your_account_id].dkr.ecr.ap-southeast-2.amazonaws.com/repocc

aws ecr get-login --no-include-email

// Then use the generated string to login

docker push [your_account_id].dkr.ecr.ap-southeast-2.amazonaws.com/repocc

We finished here.
The next step is about setting up lambda function which is triggered by CodeCommit.
Please check lambda.js for the code and related screenshots.
