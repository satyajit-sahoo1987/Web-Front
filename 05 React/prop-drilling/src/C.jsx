import React from 'react'

const C = ({message}) => {
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