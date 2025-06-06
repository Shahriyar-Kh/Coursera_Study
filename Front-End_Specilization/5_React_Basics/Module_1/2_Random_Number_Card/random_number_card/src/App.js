import logo from './logo.svg';
import './App.css';
import Card from "./Card"
import ModeTogler from './ModeTogler';
import Heading from './Heading';
import React, { useState } from 'react';


const randNum=()=>Math.floor(Math.random() * 100)+1;

function App() {
  // code for Heading observing state
  
  const [word,setWord]=React.useState("Eat")
  function handleClick(){
    setWord("Drink")
  }

  return (
    <div className='Card'>
      <h1>Task : Add Three card elements </h1>
      <Card num={randNum()} />
      <Card num={randNum()} />
      <Card num={randNum()} />

      {/* another component */}
      <ModeTogler/>

      {/* another task observing state */}
      <Heading message={word + " at Little lemon"}/>
      <button onClick={handleClick}>Click me</button>
      


    </div>
  )
}

export default App;
