pipeline{
    agent any
    stages{
        stage('Checkout'){
            steps{
                git branch:'main',url:'https://github.com/afzalali07/justtesting.git'
            }
        }
        stage('Install dependencies'){
            steps{
                bat 'npm install'
            }
        }
        stage('Build'){
            steps{
                bat 'npm run build'
            }
        }
    }
    post{
        success{
            echo 'React Build Successfully'
        }
        failure{
            echo 'Build Failure'
        }
    }
}