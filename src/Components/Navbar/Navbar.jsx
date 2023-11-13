import React, { useState } from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
import logo from '../Assests/logo.png'
import cart_Icon from '../Assests/cart_icon.png'

const Navbar = () => {

    const [menu,setMenu] = useState("shop");
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">
        <li onClick={() => {setMenu("shop")}}><Link to="/">Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={() => {setMenu("mens")}}><Link to="/mens">Mens</Link>{menu==="mens"?<hr/>:<></>}</li>
        <li onClick={() => {setMenu("womens")}}><Link to="/womens">Womens</Link>{menu==="womens"?<hr/>:<></>}</li>
        <li onClick={() => {setMenu("kids")}}><Link to="/kids">Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login"><button>Login</button></Link>
        <Link to="/cart"><img src={cart_Icon} alt=""/></Link>
        
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  )
}

export default Navbar
