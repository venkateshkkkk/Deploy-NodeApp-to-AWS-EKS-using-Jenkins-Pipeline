pipeline{
    agent any 
    environment{
        DOCKERHUB_CRED='jenkins-dockerhub'
    }
    stages{
      stage("checkout"){
          steps{
              git branch: 'main', credentialsId: 'davorse-token', url: 'https://github.com/venkateshkkkk/Deploy-NodeApp-to-AWS-EKS-using-Jenkins-Pipeline.git'
          }
      }
      stage("build docker image"){
          steps{
              script{
                  sh 'docker build -t venkateshkasa996/nodeapp1 . '
              }
          }
      }
      stage("login and push to dockerhub"){
          steps{
               script {
                    docker.withRegistry('', DOCKERHUB_CRED) {
                        docker.image('venkateshkasa996/nodeapp2').push()              
                        
                    }
          }
          }
      }
 

          
     
      stage("deploy to k8s"){
          steps{
              script{
                  sh "aws eks update-kubeconfig --name my-cluster --region ap-south-1"
               sh "kubectl get nodes"            
              sh 'kubectl apply -f nodejsapp.yaml'
              }
          }
    }
    }
}
