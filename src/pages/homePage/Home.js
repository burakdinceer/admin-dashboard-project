import React from 'react'
import { useSelector } from 'react-redux'
import BarChartBox from '../../components/barChartBox/BarChartBox'
import ChartBox from '../../components/chartBox/ChartBox'
import Layout from '../../components/layout/Layout'
import PieChartBox from '../../components/pieChartBox/PieChartBox'
import TopBox from '../../components/topBox/TopBox'
import './home.scss'
const Home = () => {

  const {chartBoxUser,chartBoxProduct,chartBoxRevenue,chartBoxConversion,barChartBoxRevenue,barChartBoxVisit,pieChartData} = useSelector((state) => state.data)
  

  return (
        <Layout>
          <div className='home'>
            <div className='box box1'><TopBox/></div>
            <div className='box box2'><ChartBox data={chartBoxUser} /></div>
            <div className='box box3'><ChartBox data={chartBoxProduct}  /></div>
            <div className='box box4'><PieChartBox data={pieChartData}/></div>
            <div className='box box5'><ChartBox data={chartBoxRevenue}/></div>
            <div className='box box6'><ChartBox data={chartBoxConversion}/></div>
            <div className='box box7'>Box7</div>
            <div className='box box8'><BarChartBox data={barChartBoxRevenue} /></div>
            <div className='box box9'><BarChartBox data={barChartBoxVisit} /></div>
          </div>
        </Layout>
    
  )
}

export default Home