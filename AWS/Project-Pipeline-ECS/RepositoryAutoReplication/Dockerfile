# Pull the Amazon Linux latest base image
FROM amazonlinux:latest

#Install aws-cli and git command line tools
RUN yum -y install unzip aws-cli
RUN yum -y install git

WORKDIR /home/ec2-user
RUN mkdir LocalRepository

WORKDIR /home/ec2-user/LocalRepository

#Copy Cloned CodeCommit repository to Docker container
COPY ./LocalRepository /home/ec2-user/LocalRepository
#Copy shell script that does the replication

COPY ./repl_repository.bash /home/ec2-user/LocalRepository

RUN chmod ugo+rwx /home/ec2-user/LocalRepository/repl_repository.bash
WORKDIR /home/ec2-user/LocalRepository

#Call this script when Docker starts the container
ENTRYPOINT ["/home/ec2-user/LocalRepository/repl_repository.bash"]
