FROM amazonlinux:latest
RUN yum install -y java-1.8.0-openjdk
RUN mkdir /home/ec2-user
COPY target/userms-0.0.1-SNAPSHOT.jar /home/ec2-user/userms-0.0.1-SNAPSHOT.jar
EXPOSE 8080/tcp
CMD java -jar -Dspring.profiles.active=dev /home/ec2-user/userms-0.0.1-SNAPSHOT.jar
