import React from 'react'
//import "./App.css"
import styles from "./Xyz.module.css"

const Xyz = () => {
    console.log("style inside Xyz",styles)
  return (
    <>
    <div>Xyz</div>
    {/* {<p className='bg-green'>sasssss</p>} */}
    <p className={`${styles.textYellow} ${styles['bg-green']} ${styles.underLine}`}>asdasaas</p>
    </>
  )
}

export default Xyz