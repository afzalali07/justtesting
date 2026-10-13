pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/afzalali07/MEMORY-CARD-GAME.git'
            }
        }

        stage('Install dependencies') {
            steps {
                dir('Parking_slot_Booking') {
                    bat 'npm install'
                }
            }
        }

        stage('Build') {
            steps {
                dir('Parking_slot_Booking') {
                    bat 'npm run build'
                }
            }
        }
    }

    post {
        success {
            echo 'React build successfully completed'
        }
        failure {
            echo 'Build Failure'
        }
    }
}