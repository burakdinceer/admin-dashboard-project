import React from 'react'
import './menu.scss'
import { Link } from 'react-router-dom'
import { menu } from '../../menuData'
const Menu = () => {
  return (
    <div className='menu'>
     {
      menu.map((item) => 
      
      <div className='item'>
      <span>{item.title}</span>
      {
        item.listItem.map((itemList) => 
        <Link className='item-main'>
        <img src={itemList.icon} />
        <span>{itemList.title}</span>
      </Link>

        )
      }
    </div>

      )
     }
      
    </div>
  )
}

export default Menu