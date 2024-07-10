'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import Profile from './settings/profile';
import Subcription from './settings/suscription';

// Define tab items with their respective content
const tabs = [
    { id: 'tabs-profile', label: 'Profile', content: <Profile /> },
    { id: 'tabs-subscription', label: 'Subscription', content: <Subcription /> },
    { id: 'tabs-application', label: 'Application Settings', content: <Subcription /> },
];

const VerticalTabs = () => {
    const router = usePathname();
    const [activeTab, setActiveTab] = useState(tabs[0].id);

    // function getInitialActiveTab() {
    //     // const { pathname } = router;
    //     console.log(router)
    //     const tabId = tabs.find(tab => router.includes(tab.id))?.id || tabs[0].id;
    //     return tabId;
    // }

    const handleTabClick = (tabId: string) => {
        setActiveTab(tabId);
    };


    return (
        <div className="flex flex-col relative xl:flex-row h-auto w-full">
            {/* Vertical tab navigation */}
            <ul className="flex w-full xl:w-[24rem] static xl:z-[1] xl:sticky bg-white lg:top-0 border rounded-lg shadow overflow-hidden h-[10.9rem] xl:h-[9.22rem] xl:py-[0rem] list-none flex-col justify-start items-start ">
                {tabs.map((tab) => (
                    <li key={tab.id} className=" w-full cursor-pointer">
                        <span
                            onClick={() => handleTabClick(tab.id)}
                            className={`w-full flex justify-start items-center py-3 ${activeTab === tab.id ? 'bg-black text-white' : 'text-black bg-white hover:bg-black hover:bg-opacity-65 hover:text-white'} transition-all ease-in-out duration-300 px-[30px]`}
                        >
                            {tab.label}
                        </span>
                    </li>
                ))}
            </ul>

            {/* Tab content */}
            <div className="h-full bg-white descriptions xl:rounded-r-lg  overflow-hidden overflow-y-scroll w-full ">
                {tabs.map((tab) => (
                    <div
                        key={`content-${tab.id}`}
                        className={`${activeTab === tab.id ? 'block opacity-100' : 'hidden opacity-0'
                            } transition-all ease-in-out duration-300 w-full `}
                    >
                        {tab.content}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VerticalTabs;
