pipeline {
    agent any

    tools {
        nodejs 'NodeJs'
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/fahadakram2/jenkins-ci.git'
            }
        }
        stage('Install Dependency') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            sh 'npm run lint'
            sh 'npm test -- --watchAll=false'
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Archieve Build') {
            steps {
                archiveArtifacts artifacts: 'build/**' fingerprint: true
            }
        }
    }
}
