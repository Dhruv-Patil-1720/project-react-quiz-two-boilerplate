import React, { Component } from 'react'

export default class ResultComponent extends Component {
  
  render() {
    // const details = [
    //   { title: "Total no of Questions", value: 15 },
    //   { title: "No. of attempted Questions", value: 10 },
    //   { title: "No. of Correct Answers", value: 5 },
    //   { title: "No. of Incorrect Answers", value: 5 },
    // ];

    return (
          
      <div className='container'>
      <h1 className='result'>Result</h1>
      <div className="result-box">
        <h3>You Need more practice!</h3>
        <h1>Your score is 20%</h1>
        <div className='summary'>
          <p>Total number of Questions</p>
          <p>15</p>
        </div>
        <div className='summary'>
          <p>Number of Attempted Questions</p>
          <p>9</p>
        </div>
        <div className='summary'>
          <p>Number of Correct Answers</p>
          <p>3</p>
        </div>
        <div className='summary'>
          <p>Number of Wrong Answers</p>
          <p>6</p>
        </div>
      </div>
      <div className="action">
        <button className='play-again'>Play Again</button>
        <button className='back'>Back to Home</button>
      </div>
      </div>
      
    )
  }
}

