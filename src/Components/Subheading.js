import React from 'react'

import spoon from './Images/spoon.png'

const Subheading = ({title}) => {
  return (
    <div style={{marginBottom:'1rem' }}>
        <p>{title}</p>
        {/* <h1>{props.name}</h1> */}
        <img src={spoon} alt="" />
    </div>
  )
}

export default Subheading