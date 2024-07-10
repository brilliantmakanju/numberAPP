'use client'
import Link from 'next/link'
import Image from 'next/image'
import { X } from 'lucide-react';
import React, { useState } from 'react'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Nav_Mobile_Sidebar from './nav_mobile_sidebar';

const TopNav = () => {

    const [showMenu, setShowMenu] = useState<boolean>(false)

    return (
        <>
            <nav className='w-full flex select-none justify-between border-b-[1px] items-center py-[8px] z-[1] px-[8px]'>
                <Link href={'/dashboard/'} className='hidden md:flex' >
                    <div className={`  my-1 font-medium  cursor-pointer transition-color pl-3 justify-start transition-all ease-in-out duration-300 hidden md:flex `}>
                        <Image src={`/images/logo_with_name.png`} alt='Number One Career Logo' width={999} height={999} className={`w-full h-[1.5rem] `} />
                    </div>
                </Link>
                <div className={` font-medium transition-color pl-3 gap-[20px] justify-start transition-all ease-in-out duration-300 flex md:hidden `}>
                    <span onClick={() => setShowMenu(!showMenu)}>
                        {
                            showMenu ?
                                <X className='w-[30px] h-[40px] cursor-pointer ' />
                                :
                                <HamburgerMenuIcon className='w-[30px] h-[40px] cursor-pointer ' />
                        }
                    </span>
                    <Link href={'/dashboard/'}>
                        <Image src={`/images/logo-bg.png`} alt='Number One Career Logo' width={999} height={999} className={`w-[2rem] cursor-pointer h-[2.5rem] `} />
                    </Link>
                </div>
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>BM</AvatarFallback>
                </Avatar>
            </nav>

            <Nav_Mobile_Sidebar open={showMenu} />

        </>
    )
}

export default TopNav