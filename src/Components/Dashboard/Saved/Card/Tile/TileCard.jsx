import React from 'react'
import './TileCard.css'

const TileCard = ({no, title, size, quantity, link}) => {

  return (
    <div className='tilecard' >
        <div className='container' >
            <div className='card'>
            <div className="content">
                <h2>{no}</h2>
                <h3>{title}</h3>
                <p style={{
                  fontWeight: '500'
                }}> Size - {size} <br /> Quantity - {quantity} <br /> 
                </p>
                <a href={`/tile/view/${link}`}
                >
                  View
                </a>
            </div>
            </div>
        </div>
    </div>
  )
}

export default TileCard
