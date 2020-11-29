pipeline {
    agent any 
    stages {
        stage('Build') {
            steps {
                echo 'Build Starts!'
                sh 'cd ./mfp/packages/container'
                sh 'npm install'
                echo 'Build Ends'
            }
        }
		
		stage('Test') {
            steps {
                echo 'Test Starts!'
                echo 'Test Ends'
            }
        }
		
		stage('Deploy') {
            steps {
                echo 'Deploy Starts!'
                sh 'cd ./mfp/packages/marketing'
                sh 'npm run build'
                echo 'Deploy Ends'
            }
        }		
    }
}