pipeline {
  environment {
    registry = "625031190962.dkr.ecr.us-east-1.amazonaws.com/sripod"
    registryCredential = 'ecr:us-east-1:ecrCreds'
    dockerImage = ''
  }
  agent any
  stages {
    stage('Cloning Git') {
      steps {
        checkout scm
      }
    }
    stage('Building image') {
      steps{
        script {
          dockerImage = docker.build registry + ":$BUILD_NUMBER"
        }
      }
    }
    stage('Deploy Image') {
      steps{
        script {
          docker.withRegistry( '', registryCredential ) {
            dockerImage.push()
          }
        }
      }
    }
    stage('Remove Unused docker image') {
      steps{
        sh "docker rmi $registry:$BUILD_NUMBER"
      }
    }
  }
}


