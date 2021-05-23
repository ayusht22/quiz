import React,{useState,useContext} from 'react'
import {quizcontext} from '../helper/quizcontext'
const questions=[
    {
    question:'nickname of gola',
    option1:'gol mol',
    option2:'kabootar',
    option3:'both',
    answer:'option3'
    },
    {
      question:'fav song of gola',
      option1:'montero',
      option2:'saddi galli',
      option3:'happy bday to you ji',
    
      answer:'option3'
    },
    {
      question:"gola's favourite noodles  ",
      option1:'maggi',
      option2:'manchow soupy',
      option3:'yippeeeee',
      
      answer:'option2'
    }
  
  ]
export default function Quiz() {
    const [currentQ,setCurrentQ]=useState(0);
    const {showState,setShowState,score,setScore}=useContext(quizcontext);
    const [ansState,setAnsState]=useState("");
    const [color,setColor]=useState("");
    let id1="";
    let id2="";
    let id3="";
    const handleNext=()=>{
        if(ansState===questions[currentQ].answer)
        {
          setScore(score+1);
          
        }
        if(currentQ+1<questions.length)
        {   id1=" ";
        id2=" ";
        id3=" ";
        setColor("");
           setCurrentQ(currentQ+1);

        }
        else{
           
            setShowState("End");
        }
    }
    const handleClick=(option)=>{
     if(option==="option1"){
      setAnsState("option1");
      setColor("option1");
      id1="b1";
     
     }
    }
    return (
        
        <div className="Quiz">
           
            <h1 id="q">{questions[currentQ].question}</h1>
            <div className="options">
                <button  id={id1} onClick={()=>{handleClick("option1")}}>{questions[currentQ].option1}</button>
                <button  id={id2} onClick={()=>{setAnsState("option2");setColor("option2")}}>{questions[currentQ].option2}</button>
                <button  id={id3} onClick={()=>{setAnsState("option3");setColor("option3")}}>{questions[currentQ].option3}</button>
            </div>
            <button onClick={handleNext}>next q</button>
        </div>
    )
}
