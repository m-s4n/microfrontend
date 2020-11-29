pipeline {
    agent any 
    stages {
        stage('Build') {
            steps {
                echo 'Build Starts!'
                bat "cd ${workspace}/mfp/packages/container && npm install"
                bat "cd ${workspace}/mfp/packages/container && npm run build"
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
                bat "cd ${workspace}/mfp/packages && move container C:\Users\Seymen\Desktop\deploy
                echo 'Deploy Ends'
            }
        }		
    }
}