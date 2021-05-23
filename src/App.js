import "./App.css"
import React,{useState,useContext} from 'react';
import End from './components/End'
import Welcome from './components/Welcome'
import Quiz from './components/Quiz'
import {quizcontext} from './helper/quizcontext'

function App() {
  const [showState,setShowState]=useState("Welcome");
  const [score,setScore]=useState(0);
  return (
    
    <div className="App">
      <h1 >QUIZ APP</h1>
      <quizcontext.Provider value={{showState,setShowState,score,setScore}}>
      {showState==="Welcome"&&<Welcome />}
      {showState==="Quiz"&&<Quiz />}
      {showState==="End"&&<End/>}
      </quizcontext.Provider>
    </div>
  );
}

export default App;
