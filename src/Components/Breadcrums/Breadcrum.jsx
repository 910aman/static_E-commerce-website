import React from 'react'
import './Breadcrum.css'
import arrow_Icon from '../Assests/breadcrum_arrow.png'

const Breadcrum = (props) => {
    const {product} = props;
  return (
    <div className='breadcrum'>
        Home <img src={arrow_Icon} alt="" /> Shop <img src={arrow_Icon} alt="" />{product.category} <img src={arrow_Icon} alt="" /> {product.name}
    </div>
  )
}

export default Breadcrum