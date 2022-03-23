import React from 'react'

const Basicfrom = () => {
  return (
    <>
        <form action=''>

           <div>
                <label htmlFor='email'>Email:</label>
                <input type="text" name="email" id="email"></input>
           </div>

           <div>
                <label htmlFor='password'>Password:</label>
                <input type="text" name="password" id="password"></input>
           </div>

           <button type='submit'>Login</button>

        </form>
    </>
  )
}

export default Basicfrom