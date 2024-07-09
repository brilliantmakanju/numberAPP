'use client'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronFirst, ChevronLast, MoreVertical } from "lucide-react"
import Image from 'next/image'
import Link from 'next/link'

const TopNav = () => {
    return (
        <nav className='w-full flex justify-between border-b-[1px] items-center py-[8px] px-[8px]'>
            <Link href={'/dashboard/'}>
                <div className={`  my-1 font-medium  cursor-pointer transition-color pl-3 justify-start transition-all ease-in-out duration-300 hidden md:flex `}>
                    <Image src={`/images/logo_with_name.png`} alt='Number One Career Logo' width={999} height={999} className={`w-full h-[1.5rem] `} />
                </div>
                <div className={`  font-medium  cursor-pointer transition-color pl-3 justify-start transition-all ease-in-out duration-300 flex md:hidden `}>
                    <Image src={`/images/logo-bg.png`} alt='Number One Career Logo' width={999} height={999} className={`w-full h-[2.5rem] `} />
                </div>
            </Link>
            <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>BM</AvatarFallback>
            </Avatar>

        </nav>
    )
}

export default TopNav