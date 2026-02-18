pipeline {
    agent any 

    tools {
        nodejs "NodeJs"
    }

    environment {
        SONAR_SCANNER_HOME = tool 'SonarQube-Scanner-600'
        SONAR_TOKEN = credentials('sonar-token-id')
    }

    stages {

        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Unit Test + Coverage') {
            steps {
                    sh 'npm test -- --coverage --watchAll=false'
            }
        }

        stage('SonarQube Analysis') {
            steps {
               
                    sh '''
                    ${SONAR_SCANNER_HOME}/bin/sonar-scanner \
                    -Dsonar.projectKey=todo-app \
                    -Dsonar.sources=src \
                    -Dsonar.host.url=http://sonarqube:9000 \
                    -Dsonar.javascript.lcov.reportPaths=coverage/lcov.info
                    '''
                
            }
        }
    }

    post {
        always {
            echo "Pipeline finished!"
        }
        success {
            echo "All stages passed ✅"
        }
        failure {
            echo "Pipeline failed ❌"
        }
    }
}
