import Analytics from '@/components/custom/dashboard/analysis'
import Jobsearch from '@/components/custom/dashboard/jobsearch'
import React from 'react'

const Dashboard = () => {
  return (
    <main className='w-full flex overflow-x-hidden pt-[20px] pb-[15px] px-[10px] flex-col justify-start items-start gap-[4rem] md:gap-[8rem] dashboard'>
      <Analytics />
      <Jobsearch />
    </main>
  )
}

export default Dashboard



// Mr adekunle to help enable jermiah account from backlist on firebase