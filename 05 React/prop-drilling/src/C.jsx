import React, { useContext } from 'react'
import { MessageContext } from './context/MessageContext'

const C = () => {
  const message=useContext(MessageContext)
  return (
    <div style={{
          border:"2px solid blue",
          padding:'20px'
        }}>
          C Component
        <p>Message is :{message}</p>
        </div>
  )
}

export default C