import React from 'react'
import { Link } from 'react-router-dom'
import { Line, LineChart, ResponsiveContainer, Tooltip } from 'recharts'
import './chartbox.scss'

const ChartBox = (props) => {

 

  return (
    <div className='chartBox'>
        <div className='boxInfo'>
            <div className='title'>
            <img alt='img' src='user.svg'/>
                <span>{props?.data?.title}</span>
            </div>
            <h1>{props.number}</h1>
            <Link style={{color:props?.data?.color}}>View All</Link>
        </div>
        <div className='chartInfo'>
            <div className='chart'>
            <ResponsiveContainer width="100%" height="100%">
        <LineChart data={props?.data?.chartData}>
            <Tooltip
            contentStyle={{background:'transparent',border:'none'}}
            labelStyle={{display:'none'}}
            position={{x:5 , y:70}}
            
            />
          <Line type="monotone" dataKey={props?.data?.dataKey} stroke={props?.data?.color} strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
            </div>
            <div className='texts'>
                <span className='percentage'  style={{color:props?.data?.percentage <0 ? 'tomato' : 'limegreen'}} >{props?.data?.percentage}</span>
                <span className='duration'>this month</span>
            </div>
        </div>
    </div>
  )
}

export default ChartBox