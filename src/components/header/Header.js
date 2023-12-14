import React from 'react'

export default function Header() {
  return (
    <header>
      <div className='logo'>
        <span>Game Shop</span>
        <ul className='nav'>
          <li>About</li>
          <li>Contacts</li>
          <li>Profile</li>
        </ul>
      </div>
      <div className='presentation'></div>
    </header>
  )
}
