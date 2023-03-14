import React from 'react'
import Body from '../body/Body'
import Navbar from '../navbar/Navbar'
import '../style/style.css'

function Content() {
  return (
    <div className='content-main'>
        <Navbar />
        <Body />
    </div>
  )
}

export default Content