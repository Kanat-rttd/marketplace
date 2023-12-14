import React, { useState } from 'react';
import { FaBasketShopping } from "react-icons/fa6";
import Order from '../order/order'

const showOrders = (props) => {
  let summa = 0
  props.orders.forEach(el => summa += Number.parseFloat(el.price))
  return (
    <div>
      {props.orders.map(el => (
        <Order onDelete={props.onDelete} key={el.id} item={el}/>
      ))}
      <p className='summa'>Сумма: {new Intl.NumberFormat().format(summa)}$</p>
    </div>
  )
}

const showNothing = () => {
  return (
    <div className='empty'>
      <h2>У вас пока нет товров</h2>
    </div>
  )
}

export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false)

  return (
    <header>
      <div className='logo'>
        <span className='logo'>Game Shop</span>
        <ul className='nav'>
          <li>About</li>
          <li>Contacts</li>
          <li>Profile</li>
        </ul>
        <FaBasketShopping onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`} />

        {cartOpen && (
          <div className='shop-cart'>
            {props.orders.length > 0 ?
              showOrders(props) : showNothing()}
          </div>
        )}
      </div>
      <div className='presentation'></div>
    </header>
  )
}