import React from 'react'
import './Footer.css'
import footer_Logo from '../Assests/logo_big.png'
import insta_Icon from '../Assests/instagram_icon.png'
import pintester_Icon from '../Assests/pintester_icon.png'
import whatsapp_Icon from '../Assests/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-logo">
            <img src={footer_Logo} alt="" />
            <p>SHOPPER</p>
        </div>
        <ul className='footer-links'>
            <li>Company</li>
            <li>Product</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
                <img src={insta_Icon} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={pintester_Icon} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={whatsapp_Icon} alt="" />
            </div>

        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @ 2023 - All rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer