import React from 'react'

export default function Header({setAdding}) {
  // console.log("setKey",setKey);
  return (
    <div>
        <header>
            <h1> employee Management System</h1>
            <div>
                <button onClick={()=>{
                  setAdding(true)
                  // setKey(null)
                   }} className='round-button'>Add employee</button>
            </div>
        </header>
    </div>
  )
}
