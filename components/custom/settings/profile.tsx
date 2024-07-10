'use client'
import React from 'react'
import { CameraIcon, LinkedinIcon } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { GitHubLogoIcon } from '@radix-ui/react-icons'

const Profile = () => {
    return (
        <div className='w-full overflow-hidden overflow-y-scroll h-full descriptions flex flex-col p-[10px] justify-start items-center'>
            <div className='w-full gap-[20px] flex flex-col justify-start items-start'>

                <div className='flex gap-[5px] flex-col justify-start items-start'>
                    <h1 className='text-[24px] font-semibold'>Profile</h1>
                    <p className='text-[16px] text-gray-500 dark:text-gray-400'>Edit your profile details</p>
                </div>

                <div className='flex justify-start gap-[20px] flex-col items-start pt-[18px] pb-[10px] border-y-2 w-full '>
                    <div className='w-full flex justify-between  items-center'>
                        <div className='flex justify-start items-center gap-[10px] w-full'>
                            <Avatar className="w-[6rem] h-[6rem]">
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>BM</AvatarFallback>
                            </Avatar>
                            <div className="flex gap-[2.5px] flex-col justify-start items-start">
                                <h3 className='text-[16px] font-semibold'>Profile picture</h3>
                                <p className='text-[12px] text-gray-500 dark:text-gray-400'>PNG, JPEG under 15MB</p>
                            </div>
                        </div>

                        <Button variant={'outline'} className='shadow border px-5 text-[#6b6a6a] py-3 '>Upload new picture</Button>
                    </div>

                    <div className='w-full flex flex-col gap-[14px] pb-[8px]'>
                        <h3 className='text-[16px] font-semibold'>Full name</h3>
                        <div className='w-full flex justify-start items-start gap-[14px]'>
                            <div className='flex flex-col w-full gap-[5px]'>
                                <span className='text-[12px] font-[450]'>First name</span>
                                <Input value={"Brilliant"} disabled aria-disabled className='py-5 disabled:bg-opacity-5 disabled:bg-[#a3a2a2] disabled:border disabled:opacity-80 ' />
                            </div>
                            <div className='flex flex-col w-full gap-[5px]'>
                                <span className='text-[12px] font-[450]'>Last name</span>
                                <Input value={"Makanju"} disabled aria-disabled className='py-5 disabled:bg-opacity-5 disabled:bg-[#a3a2a2] disabled:border disabled:opacity-80' />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-full border-b-2 flex flex-col gap-[14px] pb-[18px]'>
                    <div className='w-full flex justify-start items-start gap-[14px]'>
                        <div className='flex flex-col w-full gap-[5px]'>
                            <span className='text-[12px] font-[450]'>Email</span>
                            <Input value={"brilliantmakanju7@gmail.com"} disabled aria-disabled className='py-5 disabled:bg-opacity-5 disabled:bg-[#a3a2a2] disabled:border disabled:opacity-80' />
                        </div>
                    </div>
                </div>

                <div className='w-full flex flex-col gap-[14px] pb-[18px]'>
                    <div className='flex gap-[2.5px] flex-col justify-start items-start'>
                        <h1 className='text-[16px] font-semibold'>Connected Account</h1>
                        <p className='text-[12px] text-gray-500 dark:text-gray-400'>Manage connected account</p>
                    </div>
                    <div className='w-full flex flex-col justify-start items-start gap-[14px]'>

                        <div className='w-full rounded-lg shadow border py-[14px] px-[20px] flex justify-between items-center'>
                            <div className='flex relative h-[4rem] border rounded-lg w-[4rem] bg-[#e1e0e0] bg-opacity-50 justify-center items-center p-[5px] '>
                                <Image
                                    width={999}
                                    height={999}
                                    alt='Google Logo'
                                    src={'/svg/logo_google.svg'}
                                    className='w-full h-full'
                                />
                            </div>
                            <Button variant={'outline'} className='shadow border-[2px] border-[#4BB543] px-5 text-[#4BB543] py-3 hover:bg-[#4BB543] hover:text-white ' >connected</Button>
                        </div>

                        <div className='w-full rounded-lg shadow border py-[14px] px-[20px] flex justify-between items-center'>
                            <div className='flex relative h-[4rem] border rounded-lg w-[4rem] bg-[#e1e0e0] bg-opacity-50 justify-center items-center p-[5px] '>
                                <GitHubLogoIcon className='w-[2rem] h-[2rem] ' />
                            </div>
                            <Button variant={'outline'} className='shadow border-[2px] border-[#4BB543] px-5 text-[#4BB543] py-3 hover:bg-[#4BB543] hover:text-white ' >connected</Button>
                        </div>

                        {/* <div className='w-full rounded-lg shadow border py-[10px] px-[20px] flex justify-between items-center'>
                            <div className='flex relative h-[4rem] border rounded-lg w-[4rem] bg-[#e1e0e0] bg-opacity-50 justify-center items-center p-[5px] '>
                                <LinkedinIcon size={24} className='w-[2rem] text-[blue] h-[2rem] ' />
                            </div>
                            <Button variant={'outline'} className='shadow border-[2px] border-[#4BB543] px-5 text-[#4BB543] py-3 hover:bg-[#4BB543] hover:text-white ' >connected</Button>
                        </div> */}

                    </div>
                </div>
            </div>

            {/* <div className='flex w-full mt-[30px] px-3 flex-col justify-start items-start gap-[20px]'>
                <div className='w-full flex flex-col justify-start items-start gap-[10px]'>
                    <h3 className='text-[14px] font-semibold'>Full name</h3>
                    <div className='flex flex-col justify-start items-start w-full'>
                        <span className='text-[12px]' >First name</span>
                        <Input value={'Brilliant'} disabled className='text-[14px] shadow disabled:border disabled:opacity-100 disabled:bg-slate-100 ' />
                    </div>
                    <div className='flex flex-col justify-start items-start w-full'>
                        <span className='text-[12px]' >Last Name</span>
                        <Input value={'Makanju'} disabled className='text-[14px] shadow disabled:border disabled:opacity-100 disabled:bg-slate-100 ' />
                    </div>
                </div>

                <div className='w-full flex flex-col justify-start items-start gap-[5px]'>
                    <span className='text-[12px]' >Full Name</span>
                    <Input value={'Brilliant Makanju'} disabled className='text-[14px] disabled:border disabled:border-black disabled:opacity-100 disabled:bg-slate-100 ' />
                </div>

                <div className='w-full flex flex-col justify-start items-start gap-[5px]'>
                    <span className='text-[12px]' >Full Name</span>
                    <Input value={'Brilliant Makanju'} disabled className='text-[14px] disabled:border disabled:border-black disabled:opacity-100 disabled:bg-slate-100 ' />
                </div>

                <div className='w-full flex flex-col justify-start items-start gap-[5px]'>
                    <span className='text-[12px]' >Full Name</span>
                    <Input value={'Brilliant Makanju'} disabled className='text-[14px] disabled:border disabled:border-black disabled:opacity-100 disabled:bg-slate-100 ' />
                </div>
            </div> */}
        </div>
    )
}

export default Profile