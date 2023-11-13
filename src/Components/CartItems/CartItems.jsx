import React, { useContext } from 'react'
import './CardItems.css'
import {ShopContext} from '../../Context/ShopContext'
import remove_Icon from '../Assests/cart_cross_icon.png'
const CartItems = () => {
    const {getTotalCartAmt,all_product,cartItems,removeFromCart} = useContext(ShopContext)
  return (
    
    <div className='cartItems'>
        <div className='cartItem-page'>
            <h1>Cart Page</h1>
        </div>
        <div className="cartItems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />

            {all_product.map((e)=>{
                if(cartItems[e.id]>0)
                {
                    return <div>
                        <div className="cartItems-format-main cartItems-format">
                            <img className='cartIcon-product-icon' src={e.image} alt="" />
                            <p>{e.name}</p>
                            <p>₹ {e.new_price}</p>
                            <button className="cartItems-quantity">{cartItems[e.id]}</button>
                            <p>₹ {e.new_price*cartItems[e.id]}</p>
                            <img className="cartItem-remove-icon" src={remove_Icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
                        </div>
                        <hr />
                    </div>
                }
                return null
            })}
            <div className="cartItems-down">
                <div className="cartItems-total">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="cartItems-total-item">
                            <p>Subtotal</p>
                            <p>₹{getTotalCartAmt()}</p>
                        </div>
                        <hr />
                        <div className="cartItems-total-item">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartItems-total-item">
                            <h3>Total</h3>
                            <h3>₹{getTotalCartAmt()}</h3>
                        </div>
                    </div>
                    <button>Proceed to Checkout</button>
                </div>
                <div className="cartItems-promocode">
                    <p>If you have a promo code, Enter it here</p>
                    <div className="cartItems-promobox">
                        <input type="text" placeholder="Promo code" id="" />
                        <button>Submit</button>
                    </div>

                </div>
            </div>
        
    </div>
  )
}

export default CartItems