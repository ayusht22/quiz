import React,{useContext} from 'react'
import {quizcontext} from '../helper/quizcontext'
export default function Welcome() {
    const {showState,setShowState}=useContext(quizcontext);
    return (
        <div className="welcome">
           <button onClick={()=>{setShowState("Quiz")}}>Start Quiz</button>
        </div>
    )
}
