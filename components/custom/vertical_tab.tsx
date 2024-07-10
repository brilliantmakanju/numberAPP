'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import Profile from './settings/profile';

// Define tab items with their respective content
const tabs = [
    { id: 'tabs-home03', label: 'Profile', content: <Profile /> },
    { id: 'tabs-settings03', label: 'Security', content: 'Tab 4 content' },
    { id: 'tabs-messages03', label: 'Subscription', content: 'Tab 3 content' },
    { id: 'tabs-profile03', label: 'Application Settings', content: 'Tab 2 content' },
];

const VerticalTabs = () => {
    const router = usePathname();
    const [activeTab, setActiveTab] = useState(getInitialActiveTab());

    function getInitialActiveTab() {
        // const { pathname } = router;
        const tabId = tabs.find(tab => router.includes(tab.id))?.id || tabs[0].id;
        return tabId;
    }

    const handleTabClick = (tabId: string) => {
        setActiveTab(tabId);
    };


    return (
        <div className="flex shadow-lg rounded-lg border ">
            {/* Vertical tab navigation */}
            <ul className="flex w-auto rounded-l-lg py-[10px] pl-[20px] list-none flex-col gap-[2px] justify-start items-start ">
                {tabs.map((tab) => (
                    <li key={tab.id} className=" w-full">
                        <Link
                            href={`#${tab.id}`}
                            onClick={() => handleTabClick(tab.id)}
                            className={`w-full rounded-l-[30px] flex justify-start items-center py-3 ${activeTab === tab.id ? 'bg-black text-white' : 'text-black bg-white hover:bg-black hover:bg-opacity-65 hover:text-white'} transition-all ease-in-out duration-300 px-[30px]`}
                        >
                            {tab.label}
                        </Link>
                    </li>
                ))}
            </ul>

            {/* Tab content */}
            <div className="h-[48rem] w-[40rem] ">
                {tabs.map((tab) => (
                    <div
                        key={`content-${tab.id}`}
                        className={`${activeTab === tab.id ? 'block opacity-100' : 'hidden opacity-0'
                            } transition-all ease-in-out duration-300 rounded-r-lg  bg-white  w-full h-full  `}
                    >
                        {tab.content}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VerticalTabs;
