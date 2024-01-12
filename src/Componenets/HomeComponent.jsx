import React, { Component } from 'react'

export default class HomeComponent extends Component {
  render() {
    return (
      <div>
        <h1 style={{textAlign:'center',fontWeight:"700",color:"white"}}>Quiz App</h1>
        <button style={{borderRadius:"20px",backgroundColor:"green",}}>Play Now</button>
      </div>
    )
  }
}
