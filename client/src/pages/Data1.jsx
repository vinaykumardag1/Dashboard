import React from 'react'
import {PieChart} from '@mui/x-charts'
const Data1 = () => {
  return (
    <div className='grid grid-cols-2'>
      <PieChart
      series={[
        {
          data: [
            { id: 0, value: 10, label: 'series A' },
            { id: 1, value: 15, label: 'series B' },
            { id: 2, value: 20, label: 'series C' },
          ],
        },
      ]}
      width={400}
      height={200}
    />
     <PieChart
      series={[
        {
          data: [
            { id: 0, value: 10, label: 'series A' },
            { id: 1, value: 45, label: 'series B' },
            { id: 2, value: 50, label: 'series C' },
          ],
        },
      ]}
      width={400}
      height={200}
    />
     <PieChart
      series={[
        {
          data: [
            { id: 0, value: 130, label: 'series A' },
            { id: 1, value: 135, label: 'series B' },
            { id: 2, value: 220, label: 'series C' },
          ],
        },
      ]}
      width={400}
      height={200}
    />
    
    </div>
  )
}

export default Data1
