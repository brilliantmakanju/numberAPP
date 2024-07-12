import Profile from '@/components/custom/settings/profile'
import Subcription from '@/components/custom/settings/suscription'
import VerticalTabs from '@/components/custom/vertical_tab'
import React from 'react'

const Settings = () => {

    const tabs = [
        { id: 'profile', label: 'Profile', content: <Profile /> },
        { id: 'subscription', label: 'Subscription', content: <Subcription /> },
        { id: 'application', label: 'Application Settings', content: <Subcription /> },
    ];
    
    return (
        <main className='w-full flex overflow-x-hidden pt-[20px] px-[10px] flex-col justify-start items-center gap-[4rem] pb-[2.5rem] overflow-y-scroll md:gap-[8rem] dashboard'>
            <VerticalTabs tabs={tabs}  />

        </main>
    )
}

export default Settings