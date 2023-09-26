import React from 'react'
import { useSelector } from 'react-redux'
import ChartBox from '../../components/chartBox/ChartBox'
import Layout from '../../components/layout/Layout'
import TopBox from '../../components/topBox/TopBox'
import './home.scss'
const Home = () => {

  const {chartBoxUser,chartBoxProduct,chartBoxRevenue,chartBoxConversion} = useSelector((state) => state.data)
  console.log(chartBoxUser.number)

  return (
        <Layout>
          <div className='home'>
            <div className='box box1'><TopBox/></div>
            <div className='box box2'><ChartBox {...chartBoxUser} /></div>
            <div className='box box3'><ChartBox {...chartBoxProduct} /></div>
            <div className='box box4'>Box4</div>
            <div className='box box5'><ChartBox {...chartBoxRevenue}/></div>
            <div className='box box6'><ChartBox {...chartBoxConversion}/></div>
            <div className='box box7'>Box7</div>
            <div className='box box8'>Box8</div>
            <div className='box box9'>Box9</div>
          </div>
        </Layout>
    
  )
}

export default Home