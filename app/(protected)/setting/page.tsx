import Analytics from '@/components/custom/dashboard/analysis'
import VerticalTabs from '@/components/custom/vertical_tab'
import Link from 'next/link'
import React from 'react'

const Settings = () => {
    return (
        <main className='w-full flex overflow-x-hidden pt-[20px] px-[10px] flex-col justify-start items-center gap-[4rem] pb-[2.5rem] overflow-y-scroll md:gap-[8rem] dashboard'>
            <VerticalTabs />

        </main>
    )
}

export default Settings