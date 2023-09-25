import React from 'react'
import './topbox.scss'
import { useSelector } from 'react-redux'

const TopBox = () => {

    const {topDealUsers} = useSelector((state) => state.data)

  return (
    <div className='topbox'>
        <h1>Top Deals</h1>
     <div className='list'>
     {
        topDealUsers.map((item) => 
        <div className='listItem'>
            <img src={item.img} alt='img'/>
            <div className='listUser'>
                <span className='userName'>{item.userName}</span>
                <span className='userMail'>{item.email}</span>
            </div>
            <span className='userAmount'>${item.amount}</span>
        </div>
        )
      }
     </div>
    </div>
  )
}

export default TopBox