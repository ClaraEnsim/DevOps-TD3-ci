pipeline {
   agent any

   stages {
       stage('Checkout') {
           steps {
               checkout scm
           }
       }
       stage('Install Dependencies') {
           steps {
               sh 'echo "npm install"'
           }
       }
       stage('Run Tests') {
           steps {
               sh 'echo "npm test"'
           }
       }
       stage('Build Docker Image') {
           steps {
               sh 'echo "docker build -t my-node-app ."'
           }
       }
       stage('Deploy (Simulated)') {
           steps {
               sh 'echo "docker push my-node-app:latest"'
               sh 'echo "ssh user@your-server \'docker pull my-node-app:latest && docker run -d -p 80:3000 my-node-app\'"'
               echo 'Ceci est une simulation de déploiement avec Jenkins.'
           }
       }
   }
}