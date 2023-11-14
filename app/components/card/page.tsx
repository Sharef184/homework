import React from 'react'
import { MdOutlineComment } from 'react-icons/md'
import { BsFillInfoCircleFill } from 'react-icons/bs'

// Components
import BarChart from '../bar-chart/page'
import LineChart from '../line-chart/page'

const Card = () => {
  return ( 

    <div className="flex justify-between">
      <div className="card mx-2 w-screen">
          <div className='chart-title'>
            <h3>Covid-19 Bar Chart</h3>
          </div>
          <div className='chart'>
            <BarChart />
          </div>
          <div className='flex justify-between'>
            <div className='chart-icon'>
              <BsFillInfoCircleFill />
            </div>
            <div className='chart-comments'>
              <MdOutlineComment />
            </div>
          </div>
        </div>
        <div className="card mx-2 w-screen">
          <div className='chart-title'>
            <h3>Covid-19 Line Chart</h3>
          </div>
          <div className='chart'>
            <LineChart />
          </div>
          <div className='flex justify-between'>
            <div className='chart-icon'>
              <BsFillInfoCircleFill />
            </div>
            <div className='chart-comments'>
              <MdOutlineComment />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Card
