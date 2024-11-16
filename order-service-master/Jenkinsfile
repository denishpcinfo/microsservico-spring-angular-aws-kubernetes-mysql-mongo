pipeline {
  agent any

  environment {
    DOCKER_REGISTRY = "docker.io"
    DOCKERHUB_CREDENTIALS = credentials('DOCKER_HUB_CREDENTIAL')
    VERSION = "${env.BUILD_ID}"
  }

  tools {
    maven "Maven"
  }

  stages {

    stage('Maven Build'){
      steps{
        sh 'mvn clean package  -DskipTests'
      }
    }

    // stage('Run Tests') {
    //   steps {
    //     sh 'mvn test'
    //   }
    // }

    stage('Docker Build and Push') {
      steps {
          sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
          sh 'docker build -t d3n15tec/order-service:${VERSION} .'
          sh 'docker push d3n15tec/order-service:${VERSION}'
      }
    } 


    stage('Cleanup Workspace') {
      steps {
        deleteDir()
      }
    }

    stage('Update Image Tag in GitOps') {
      steps {
         checkout scmGit(branches: [[name: '*/master']], extensions: [], userRemoteConfigs: [[ credentialsId: 'git-ssh', url: 'git@github.com:denishpcinfodev/order-service-master.git']])
        script {
       sh '''
          sed -i "s/image:.*/image: d3n15tec\\/order-service:${VERSION}/" aws/order-manifest.yml
        '''
          sh 'git checkout master'
          sh 'git add .'
          sh 'git commit -m "Update image tag"'
        sshagent(['git-ssh'])
            {
              sh('git push')
            }
        }
      }
    }

  }

}


