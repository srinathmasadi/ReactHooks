import React,{ useState } from 'react'
import './App.css'

export const App = () => {
const [myName,setmyName]=useState('Srinath');
  
  const changeName=()=> {
    let val = myName;
    ( val==='Srinath') ? setmyName('Masadi Srinath') :setmyName("Srinath");
    
  }
  
  return (
    
    <div className='div'>
      <h1>{myName}</h1>
      <button className='btn' onClick={changeName}>Click Me</button>
    </div>
    
  )
}

export default App
