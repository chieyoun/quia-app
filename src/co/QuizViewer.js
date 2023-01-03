import React from 'react'
import { useState,useMemo } from 'react';
import Anbutton from '../style/anbutton';
import AnswerCard from '../style/answerCard';
import FlexCenter from '../style/flexcenter';
import cng from '../img/qqqq.jpg';
import ra from '../img/qqqqq.jpg';
import quizzes from '../data/quizzes';


export default function QuizViewer() {
    const [quizindex, setquizindex] = useState(0)
    const [answerscnt, setAnswercnt] = useState(0)

    const {id, question, answers} = useMemo(() => {
        return quizzes[quizindex] || {}
    },[quizindex])

    const onCorrect = (isCorrect) => {
        if(isCorrect) {
            setAnswercnt(answerscnt+1)
            alert('정답')
        } else{
            alert('오답')
        }
        setquizindex(quizindex+1)
    }
    const maxcount = quizzes.length

    const isEnd = quizindex === maxcount
    
    return (
        <FlexCenter
            style={{
                backgroundImage: `url(${ra})`,
                backgroundRepeat: 'repeat',
                height: '100%',
                width: '100%'
            }}>
            {isEnd ? (
                <div>
                    <AnswerCard
                    style={{
                        backgroundImage: `url(${cng})`,
                        width: '500px',
                        height: '300px',
                        backgroundπosition: 'center',
                        backgroundSize: 'cover'
                    }}>
                        <h1 style={{
                            color:'white',
                            marginTop: 170
                            }}>
                                congratulation!<br></br>
                                {(answerscnt/maxcount*100).toFixed(2)}%<br></br> of your answers are correct</h1>
                    </AnswerCard>
                </div>
            ):(
            <div>
                <h3>문제: [{quizindex+1}/{maxcount}] 정답: [{answerscnt}/{maxcount}]</h3>
                <h1> {quizindex+1}. {question} </h1>
                {answers.map(answers => {
                    const {text, isCorrect} = answers
                    return <Anbutton onClick={() => onCorrect(isCorrect)}
                >{text}</Anbutton>
                })}
            
            </div>
            )}
        </FlexCenter>
        
    )
}
