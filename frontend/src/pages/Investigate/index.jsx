import React from 'react'
import Featured from '../../components/Featured'
import Chart from '../../components/Chart'


const Investigate = () => {
  return (
    <>
      <h1>Investigate</h1>
      <div className="charts">
          <Featured />
          <Chart aspect={2/1} title='Last 6 Month (Revenue)' />
      </div>
    </>
  )
}

export default Investigate
