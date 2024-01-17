import React from 'react'
import './OrderCard.css'

const OrderCard = ({no, items, amount, link, day, month, year, hour, min}) => {

  return (
    <div className='ordercard' >
        <div className='container' >
            <div className='card'>
            <div className="content">
                <h2>{no}</h2>
                <h3>Order - {no}</h3>
                <p style={{
                  fontWeight: '500'
                }}> Total Items - {items} <br /> Quantity  - {amount} <br />
                Date: {day}-{month}-{year} <br />
                Time - {hour>12 ? hour-12 : hour===0 ? '12' : hour}:{min < 10 ? `0${min}` : min} {hour>11 ? 'PM' : 'AM'}
                </p>
                <a href={`/view/order/${link}`}
                >
                  View
                </a>
            </div>
            </div>
        </div>
    </div>
  )
}

export default OrderCard
