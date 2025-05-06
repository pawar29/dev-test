pipeline {
    agent any
    
    tools {
        nodejs "Node16"  // Use the name you configured in the NodeJS installation
    }
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        
        stage('Lint') {
            steps {
                sh 'npm run lint'
            }
        }
        
        stage('Build') {
            steps {
                sh 'npm run build --prod'
            }
        }
        
        stage('Test') {
            steps {
                sh 'npm run test -- --browsers=ChromeHeadless --watch=false'
            }
        }
    }
    
    post {
        success {
            echo 'Build successful!'
            // Add deployment steps here if needed
        }
        failure {
            echo 'Build failed!'
        }
    }
}
