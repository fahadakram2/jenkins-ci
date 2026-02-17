pipeline {
    agent any 
    stages {
        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependency') {
            steps {
                dir('frontend') {
                    sh 'npm install'
                }
            }
        }

        stage('Dependency Check') {
            steps {
                dir('frontend') {
                    sh 'npm audit --audit-level=moderate'
                }
            }
        }

        stage('Unit Test') {
            steps {
                dir('frontend') {
                    sh 'npm test -- --watchAll=false'
                }
            }
        }

        stage('Code Coverage') {
            steps {
                dir('frontend') {
                    sh 'npm test -- --coverage --watchAll=false'
                }
            }
        }
    }

    post {
        always {
            echo "Test stage finsihed!"
        }
        success {
            echo "All test stages passed."
        }
        failure {
            echo "some stages failed."
        }
    }
}