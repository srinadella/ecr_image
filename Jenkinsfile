pipeline {
  environment {
    registry = "https://625031190962.dkr.ecr.us-east-1.amazonaws.com"
    tagURI = ""
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
          // dockerImage = docker.build  "nodePod:$BUILD_NUMBER"
          docker.withRegistry( $registry, $registryCredential ) {
            docker.image(registry + ":$BUILD_NUMBER").push('latest')
          }
        }
      }
    }
    // stage('Tag Image') {
    //   steps{
    //     script {        
    //         dockerImage.tag(registry + ":$BUILD_NUMBER")
    //     }
    //   }
    // }
    // stage('Deploy Image') {
    //   steps{
    //     script {
    //       docker.withRegistry( $registry, $registryCredential ) {
    //         dockerImage.push()
    //       }
    //     }
    //   }
    // }
    stage('Remove Unused docker image') {
      steps{
        sh "docker rmi $registry:$BUILD_NUMBER"
      }
    }
  }
}