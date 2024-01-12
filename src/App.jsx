import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomeComponent from './Componenets/HomeComponent'
import QuizComponent from './Componenets/QuizComponent'
import ResultComponent from './Componenets/ResultComponent'


function App() {


  return (
    <>
      <HomeComponent/>
      <QuizComponent/>
      <ResultComponent/>

    </>
  )
}

export default App
