'use client'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CameraIcon } from 'lucide-react'

const Profile = () => {
    return (
        <div className='w-full flex flex-col p-[10px] relative pt-[40px] justify-start items-center'>
            <div className='flex justify-center items-center relative'>
                <Avatar className='w-[10rem] h-[10rem]'>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback className='text-[40px]' >BM</AvatarFallback>
                </Avatar>
                <CameraIcon className='absolute bottom-[.5rem] right-[5px] text-white bg-[black] p-[6px] rounded-full' size={40} />
            </div>
        </div>
    )
}

export default Profile