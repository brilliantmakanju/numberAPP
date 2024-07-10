import VerticalTabs from '@/components/custom/vertical_tab'
import Link from 'next/link'
import React from 'react'

const Settings = () => {
    return (
        <main className='w-full flex overflow-x-hidden pt-[20px] pb-[15px] px-[10px] flex-col justify-start items-center gap-[4rem] md:gap-[8rem] dashboard'>
            <VerticalTabs />
        </main>
    )
}

export default Settings