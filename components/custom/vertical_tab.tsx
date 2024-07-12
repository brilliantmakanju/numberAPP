'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import {  useSearchParams } from 'next/navigation';

const VerticalTabs = ({ tabs }: VerticalTabsprops) => {
    const router = useSearchParams();
    const activeTabDefault = router.get('active')
    const [activeTab, setActiveTab] = useState<any>(tabs[0].id);

    function getInitialActiveTab() {
        const tabIdFind = tabs.find(tab => tab.id === activeTabDefault)
        if (tabIdFind){
            setActiveTab(tabIdFind.id)
        } else {
            setActiveTab(tabs[0].id);
        }
    }

    const handleTabClick = (tabId: string) => {
        setActiveTab(tabId);
    };

    useEffect(() => {
        getInitialActiveTab()
    }, []);


    return (
        <div className="flex flex-col relative xl:flex-row h-auto w-full">
            {/* Vertical tab navigation */}
            <ul className="flex w-full xl:w-[24rem] static xl:z-[1] xl:sticky bg-white lg:top-0 border rounded-lg shadow overflow-hidden h-[10.9rem] xl:h-[9.22rem] xl:py-[0rem] list-none flex-col justify-start items-start ">
                {tabs.map((tab) => (
                    <li key={tab.id} className=" w-full cursor-pointer">
                        <Link href={`?active=${tab.id}`}>
                            <span
                                onClick={() => handleTabClick(tab.id)}
                                className={`w-full flex justify-start items-center py-3 ${activeTab === tab.id ? 'bg-black text-white' : 'text-black bg-white hover:bg-black hover:bg-opacity-65 hover:text-white'} transition-all ease-in-out duration-300 px-[30px]`}
                            >
                                {tab.label}
                            </span>
                        </Link>
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
