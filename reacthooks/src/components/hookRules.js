import React, { useState } from 'react'

const hookRules = () => {

    const [myName,setmyName] = useState('Masadi Srinath');
  return (
    <div>
        <h1>{myName}</h1>
    </div>
  )
}

export default hookRules