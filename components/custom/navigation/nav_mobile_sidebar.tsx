'use client'
import React, { useState } from 'react'
import SidebarLinks from './links_icon_sidebar';
import { LayoutDashboard, Settings2Icon, Rocket, Bookmark } from "lucide-react";

const Nav_Mobile_Sidebar = ({ open }: NavSideMobile) => {

    const [iconOnly, seticonOnly] = useState(false)

    return (
        <header className={`flex flex-col md:hidden justify-start items-start absolute h-full top-[57px] ${open ? 'w-auto left-0 ' : 'w-auto left-[-100%]' } overflow-hidden transition-all ease-in-out duration-300 z-[2] `}>
            <aside className={`h-[94%] transition-all ease-in-out duration-300 w-[300px] overflow-hidden pb-[13px] `}>
                <nav className="h-full flex flex-col bg-white w-auto border-l-0 border-r pt-[10px]" >
                    <div className='h-full flex flex-col justify-between items-start'>
                        <ul className=" flex flex-col justify-start items-start gap-[10px] p-3">
                            <SidebarLinks icon={<LayoutDashboard size={20} />} href='/dashboard' writing='Dashboard' iconOnly={iconOnly} />
                            <SidebarLinks icon={<Bookmark size={20} />} href='/saved' writing='Saved Jobs' iconOnly={iconOnly} />
                            <SidebarLinks icon={<Rocket size={20} />} href='/application' writing='Application Jobs' iconOnly={iconOnly} />
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

export default Nav_Mobile_Sidebar