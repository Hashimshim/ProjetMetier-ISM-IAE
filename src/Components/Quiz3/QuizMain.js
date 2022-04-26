import React, {Component} from 'react';
import Question from './question/Question';
import Answer from './answer/Answer';
import './QuizMain.css';
import {Button} from '@chakra-ui/react'

export default class Quiz extends Component {

    // initiating the local state
    state = {
        quiestions: {
            1: '1- Quelles qualités sont les plus requises pour le métier de contrôleur de gestion social ?',
            2: '2- Avec quels diplômes peut-on exercer ce métier ?',
            3: "3- Qu’est-ce qu’un bilan social ?",
            4: "4- Quelles perspectives d’évolution vous paraissent les plus envisageables pour un contrôleur de gestion sociale ?"
        },
        answers: {
            1: {
                1: 'Ecoute et conseil ',
                2: 'Rigueur et aisance avec les chiffres ',
                3: 'Être méthodique et organisé '
            },
            2: {
                1: 'Master en marketing digital ',
                2: 'Master en droit ',
                3: 'Master en audit et contrôle de gestion / RH '
            },
            3: {
                1: 'Un document qui recense différents indicateurs et données chiffrées évaluant la performance sociale d’une entreprise ',
                2: 'Un document produit en fin de période de clôture comptable ',
                3: 'Un reporting évaluant le respect des normes RSE et le développement durable par une entreprise',
            },
            4:{
                1:"Directeur commercial",
                2:"Chargé de recrutement ",
                3:"Consultant RH indépendant "
            }
        },
        correctAnswers: {
            1: '2',
            2: '3',
            3: '1',
            4:'3'
        },
        correctAnswer: 0,
        clickedAnswer: 0,
        step: 1,
        score: 0
    }

    // the method that checks the correct answer
    checkAnswer = answer => {
        const { correctAnswers, step, score } = this.state;
        if(answer === correctAnswers[step]){
            this.setState({
                score: score + 1,
                correctAnswer: correctAnswers[step],
                clickedAnswer: answer
            });
        }else{
            this.setState({
                correctAnswer: 0,
                clickedAnswer: answer
            });
        }
    }

    // method to move to the next question
    nextStep = (step) => {
        this.setState({
            step: step + 1,
            correctAnswer: 0,
            clickedAnswer: 0
        });
    }
    // methode to retake test
    resetStep = (step) => {
        this.setState({
            step: 1,
            correctAnswer: 0,
            clickedAnswer: 0,
            score:0
        });
    }

    render(){
        let { quiestions, answers, correctAnswer, clickedAnswer, step, score } = this.state;
        return(
            <div className="Content">
                {step <= Object.keys(quiestions).length ? 
                    (<>
                        <Question
                            question={quiestions[step]}
                        />
                        <Answer
                            answer={answers[step]}
                            step={step}
                            checkAnswer={this.checkAnswer}
                            correctAnswer={correctAnswer}
                            clickedAnswer={clickedAnswer}
                        />
                        <button
                        className="NextStep"
                        disabled={
                            clickedAnswer && Object.keys(quiestions).length >= step
                            ? false : true
                        }
                        onClick={() => this.nextStep(step)}>Suivant</button>
                    </>) : (
                        <div className="finalPage">
                            <h1>Vous avez fini le quiz!</h1>
                            <p>Votre score est: {score} of {Object.keys(quiestions).length}</p>
                            <Button rounded={'full'}
                            size={'lg'}
                fontWeight={'normal'}
                px={6}
                colorScheme={'purple'}
                bg={'purple.400'}
                _hover={{ bg: 'purple.500' }} onClick={() => this.resetStep(step)}>Réessayer</Button>
                        </div>
                    )
                }
            </div>
        );
    }
}