import React from 'react'
import { Bar, BarChart, ResponsiveContainer, Tooltip } from 'recharts'
import './barChartBox.scss'

const BarChartBox = (props) => {



  return (
    <div className='barChart'>
        <h1>{props?.data?.title}</h1>
        <div className='chart'>
        <ResponsiveContainer width="99%" height={150}>
        <BarChart width={150} height={40} data={props?.data?.chartData}>
            <Tooltip
            contentStyle={{background:'#24272F',}}
            labelStyle={{display:'nome'}}
            cursor={{fill:'none'}}
            />
          <Bar dataKey={props?.data?.dataKey} fill={props?.data?.color} />
        </BarChart>
      </ResponsiveContainer>
        </div>
      
    </div>
  )
}

export default BarChartBox