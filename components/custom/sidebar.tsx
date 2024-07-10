'use client'
import React, { useState } from 'react'
import SidebarLinks from './navigation/links_icon_sidebar'
import { LayoutDashboard, Settings2Icon, Rocket, Bookmark } from "lucide-react";

const Sidebar = () => {

    const [iconOnly, seticonOnly] = useState(true)

    return (
        <header className='hidden md:flex flex-col justify-start items-start w-auto'>
            <aside className={`h-screen transition-all ease-in-out duration-300 w-[250px]'
                   overflow-hidden`}>
                <nav className="h-full flex flex-col bg-white w-auto border-l-0 border-r pt-[10px]" >
                    


                    <div className='h-full flex flex-col justify-between items-start'>
                        <ul className=" flex flex-col justify-start items-start gap-[10px] p-3">
                            <SidebarLinks icon={<LayoutDashboard size={20} />} href='/dashboard' writing='Dashboard' iconOnly={iconOnly} />
                            {/* <SidebarLinks icon={<Bookmark size={20} />} href='/saved' writing='Saved Jobs' iconOnly={iconOnly} /> */}
                            <SidebarLinks icon={<Rocket size={20} />} href='/application' writing='Applied Jobs' iconOnly={iconOnly} />
                        </ul>

                        <div className="border-t flex p-3">
                            <SidebarLinks icon={<Settings2Icon size={20} />} href='/setting' writing='Settings' iconOnly={iconOnly} />
                        </div>
                    </div>
                </nav>
            </aside>
        </header>
    )
}

export default Sidebar