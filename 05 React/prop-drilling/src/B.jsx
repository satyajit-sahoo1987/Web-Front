import React from 'react'
import C from './C'

const B = ({message}) => {
  return (
    <div style={{
              border:"2px solid green",
              padding:'20px'
            }}>
              B Component
            <C message={message}/>
            </div>
  )
}

export default B