'use client'
import React from 'react'
import Link from "next/link"
import { usePathname } from 'next/navigation'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"


const SidebarLinks = ({ icon, iconOnly, writing, href }: SidebarLinksProps) => {

    const router = usePathname()
    const active = router === href ? true : false



    return (
        <>
            {
                href &&
                <TooltipProvider>
                    <Link href={href} >
                        <Tooltip>
                            <TooltipTrigger className={` flex justify-start items-center py-3 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${active ? "bg-black text-white " : "hover:bg-black hover:text-white text-gray-600"}`}>
                                {icon}

                                {/* {iconOnly && */}
                                    <span className={`overflow-hidden flex justify-start items-center transition-all w-52 ml-3 md:w-0 md:ml-0 lg:w-52 lg:ml-3 `}>{writing}</span>
                                {/* } */}
                            </TooltipTrigger>
                            <TooltipContent sideOffset={18} side={'right'} className='rounded-md px-2 py-1 bg-white text-black text-sm'>
                                {writing}
                            </TooltipContent>
                        </Tooltip>
                    </Link>
                </TooltipProvider>
            }

            {!href &&
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger className={` flex justify-start items-center py-3 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group`}>
                            {icon}

                            {iconOnly &&
                                <span className={`overflow-hidden flex justify-start items-center transition-all ${iconOnly ? "w-52 ml-3" : "w-0"}`}>{writing}</span>
                            }
                        </TooltipTrigger>
                        <TooltipContent sideOffset={18} side={'right'} className='rounded-md px-2 py-1 bg-indigo-100 text-indigo-800 text-sm'>
                            {writing}
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            }


            {/* {iconOnly && (
                <div className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${iconOnly ? "" : "top-2"}`}>

                </div>
            )} */}
        </>

    )
}

export default SidebarLinks