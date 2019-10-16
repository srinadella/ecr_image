pipeline {
  environment {
    registry = "625031190962.dkr.ecr.us-east-1.amazonaws.com/sripod"
    registryCredential = 'ecr:us-east-1:ecrCreds'
    dockerImage = ''
    IMAGE = 'node_sample:latest'
    ECRURL = 'https://625031190962.dkr.ecr.us-east-1.amazonaws.com/sripod'
    ECRCRED = 'ecr:eu-central-1:ecrCreds'
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
          dockerImage = docker.build ("$IMAGE")
        }
      }
    }
  
    stage('Deploy Image') {
      steps{
        script {
          sh("eval \$(aws ecr get-login --no-include-email --region us-east-1 | sed 's|https://||')")
          docker.withRegistry(ECRURL, ECRCRED){
            docker.image(IMAGE).push()
          }
        }
      }
    }
  
    stage('Remove Unused docker image') {
      steps{
        sh "docker rmi $IMAGE | true"
      }
    }

  }
}


