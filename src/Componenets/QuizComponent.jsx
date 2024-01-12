import React, { Component } from 'react'
import quiz from "../resources/quizQuestion"

export default class QuizComponent extends Component {
  constructor(){
    super()
    this.state={
      question:quiz,
      currentqs:1
    }
  }
  render() {
    let {question,currentqs}=this.state
    let handelNext =()=>{
      this.setState({currentqs:currentqs+1})
    }
    let handelPrevious =()=>{
      this.setState({currentqs:currentqs-1})
    }
     let handelQuit =()=>{
      let quitBox= window.confirm("Are you sure you want to quit ?")
      if (quitBox){
        window.close();
      }
     }
    return (
      <div className='main'>
        <h1 className='text'>Question</h1>
        <h4 className='text' style={{textAlign:"left",marginLeft:"20px"}}>{currentqs+1} of 15</h4>
        <div className='question'>
          <h2 className='text'>{question[currentqs].question}</h2>
        </div>
        <div className="options-container">
        <button className='option'>{question[currentqs].optionA}</button>
          <button className='option'>{question[currentqs].optionB}</button>
          <button className='option'>{question[currentqs].optionC}</button>
          <button className='option'>{question[currentqs].optionD}</button>

    </div>
    <div className="buttons">
      <button className="buttn"  onClick={handelPrevious}style={{borderRadius:"3px"}} disabled={currentqs==0}>Previous</button>
      <button className="buttn" onClick={handelNext} style={{borderRadius:"3px",backgroundColor:"green",}} disabled={currentqs==14}>Next</button>
      <button className="buttn" onClick={handelQuit} style={{borderRadius:"3px",backgroundColor:"red",}}>Quit</button>
  
    </div>
      </div>
    )
  }
}
