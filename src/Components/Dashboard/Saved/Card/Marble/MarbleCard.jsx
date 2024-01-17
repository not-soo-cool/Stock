import React from 'react'
import './MarbleCard.css'

const MarbleCard = ({no, link, title, size, quantity}) => {

  return (
    <div className='marblecard' >
        <div className='container' >
            <div className='card'>
            <div className="content">
                <h2>{no}</h2>
                <h3>{title}</h3>
                <p style={{
                  fontWeight: '500'
                }}> Size - {size} <br /> Quantity - {quantity} <br /> 
                </p>
                <a href= {`/marble/view/${link}`}>
                  View
                </a>
            </div>
            </div>
        </div>
    </div>
  )
}

export default MarbleCard
