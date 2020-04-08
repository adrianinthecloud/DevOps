# Creating CI/CD pipeline for a Spring boot microservice using CodeCommit, CodeBuild, CodeDeploy, ECS fargate, etc
Purpose: This is a demonstration of building CI/CD pipeline for a cross-region, high availability and scalable project.

AWS-DevOps folder contains the following files:
1. Spring boot microservice project to build
2. taskdef.json for ECS task definition
3. appspec.yaml for deployment
4. buildspec.yml for CodeBuild

Other folders contain lambda code, screenshots of configuration and execution results, etc.

# Each Code Commit will trigger two pipelines:
1. CI/CD pipeline for build jar file, Docker image and deploy to ECS fargate
2. Cross-Region replication of repository to avoid the latency of pulling code

# Steps for CI/CD pipeline in this project:
1. Trigger the pipeline after each commit to AWS CodeCommit
2. CodeBuild builds jar file of Spring Boot microservice, which is used to create the Docker image and push to ECR
3. Deploy the Docker image to ECS fargate with email notification during the deploy process to ask for manual approval

# Steps and commands for Cross-Region replications of repository in the RepositoryAutoReplication folder.

Route 53 configuration is for multi-region architecture purpose.
