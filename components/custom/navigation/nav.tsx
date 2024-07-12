'use client'
import Link from 'next/link'
import Image from 'next/image'
import { X } from 'lucide-react';
import { currentUser } from '@/lib/current_user';
import React, { useEffect, useState } from 'react'
import Nav_Mobile_Sidebar from './nav_mobile_sidebar';
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { signOut } from 'next-auth/react';


const TopNav = () => {

    const [users, setUser] = useState<any>()

    const getSessions = async () => {
        const session = await currentUser()
        setUser(session)
    }

    const [showMenu, setShowMenu] = useState<boolean>(false)

    useEffect(() => {
        getSessions()
    }, [])



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
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Avatar>
                            <AvatarImage src={`${users?.image ? `${users.image}` : 'https://github.com/shadcn.png'}`} />
                            <AvatarFallback>BM</AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        {/* <DropdownMenuLabel>Logout</DropdownMenuLabel> */}
                        <DropdownMenuItem>
                            <Link href={'/setting?active=profile'}>
                                Profile
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Link href={'/setting?active=subscription'}>
                                Subscription
                            </Link>
                        </DropdownMenuItem>
                        
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={() => signOut({
                            callbackUrl: '/',
                        })} className='bg-[#d51515] cursor-pointer text-white focus:bg-[#d51515] focus:text-white duration-300 ease-in-out transition-all '>Logout</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>


            </nav>

            <Nav_Mobile_Sidebar open={showMenu} />

        </>
    )
}

export default TopNav