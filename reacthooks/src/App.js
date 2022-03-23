import React,{ useState } from 'react'
import './App.css'
import Basicfrom from './components/forms/basicfrom';
import useStateArray from './components/useStateArray'

export const App = () => {
const [myName,setmyName]=useState('Srinath');
  
  // 
  
  return (
    
    <div >

      <useStateArray/>
      <Basicfrom/>
      
    </div>
    
  )
}

export default App
