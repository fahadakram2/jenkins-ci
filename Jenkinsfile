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
    }
}
