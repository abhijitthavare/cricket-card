import React from 'react'
import Course from './Course'
import "./global.css"
import JSON from "./CricketersData.json"

const Cricket = () => {
  return (
    <div>
      <div>
        <h1 className='a'>CRICKETERS CARD</h1>
      </div>
    <Course payload={JSON}/>
    </div>
  )
}

export default Cricket