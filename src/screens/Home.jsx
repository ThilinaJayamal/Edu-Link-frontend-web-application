import React from 'react'
import PieChart from '../components/PieChart'

function Home() {
  const isReady = true;
  return (
    <div className='p-4 pb-24'>

      <div className='max-w-xl mx-auto flex flex-col items-center gap-6 md:flex-row'>
        <div className='max-w-xs'>
          <h3 className='text-center text-lg mb-6 text-blue-900'>Classroom's Attendance Summary</h3>
          <PieChart present={70} late={10} absent={20}/>
        </div>

        <div className='flex-1 flex flex-col justify-center'>
          <h3 className='text-center text-lg mb-6 text-blue-900'>Classroom's state</h3>
          
          <div className={`flex justify-center items-center size-40 bg-white 
          mx-auto rounded-2xl shadow-sm border-r-4 border-t-4
          ${isReady ? 'border-green-600' : 'border-red-600'}`}>
            
            {/** State Text */}
            <span className={`text-xl font-semibold 
              ${isReady ? 'text-green-600' : 'text-red-600'}`}>
              {isReady ? "Ready" : "Wait"}
            </span>

          </div>
        </div>
      </div>


    </div>
  )
}

export default Home