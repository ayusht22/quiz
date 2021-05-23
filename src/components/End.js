import React,{useContext} from 'react'
import {quizcontext} from '../helper/quizcontext'
export default function End() {
    const {score} =useContext(quizcontext);
    return (
        <div className="end">
           <h1>YOU SCORED {score}</h1> 
        </div>
    )
}
