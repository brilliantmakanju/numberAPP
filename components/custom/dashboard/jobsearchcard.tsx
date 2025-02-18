'use client'
import { Card } from '@/components/ui/card'
import { HeartIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import Markdowns from '../markdown'
import { Button } from '@/components/ui/button'

const Jobsearchcard = ({ logo, role, company, posted, liked, brief, description }: JobSearchCardProps) => {





    return (
        <Dialog>
            <DialogTrigger asChild>
                <Card className='flex w-full flex-col gap-3 rounded-xl border p-5 shadow'>
                    <div className='flex flex-row justify-between items-start'>
                        <div className='flex flex-row gap-[14px] justify-start items-start'>
                            <div className='w-[40px]  h-[2.5rem] relative'>
                                <Image src={`${logo}`} alt='Number One Career Logo' width={999} height={999} className={`w-full h-full absolute top-0 left-0`} />
                            </div>
                            <div className='flex flex-col justify-start items-start'>
                                <h2 className="text-xl font-semibold">{role}</h2>
                                <p className="text-sm text-gray-500">{company}</p>
                            </div>
                        </div>
                        {/* <div className='flex flex-row justify-start items-start'>
                            <HeartIcon />
                        </div> */}
                    </div>
                    <div className='flex w-full flex-col justify-start text-[12px] font-normal md:text-[14px] gap-[10px] items-start'>
                        <span>{brief}
                        </span>
                        <span className='w-full flex text-sm text-gray-500 justify-end items-end'>
                            {posted}
                        </span>
                    </div>
                </Card>
            </DialogTrigger>
            <DialogContent className="h-screen md:h-[50rem] flex flex-col justify-start items-start max-w-full md:max-w-[40rem] overflow-hidden overflow-y-scroll description outline-none ">
                <DialogTitle className='hidden'>{role} - {company} - {posted} </DialogTitle>
                <DialogDescription className='hidden'>
                    Apply Now
                </DialogDescription>
                <div className='flex mt-[20px] pt-[10px] flex-row w-full justify-between items-start'>
                    <div className='flex flex-row gap-[14px] justify-start items-start'>
                        <div className='w-[40px]  h-[2.5rem] relative'>
                            <Image src={`${logo}`} alt='Number One Career Logo' width={999} height={999} className={`w-full h-full absolute top-0 left-0`} />
                        </div>
                        <div className='flex flex-col justify-start items-start'>
                            <h2 className="text-xl font-semibold">{role}</h2>
                            <p className="text-sm text-gray-500">{company}, {posted} </p>
                        </div>
                    </div>
                    {/* <div className='flex flex-row mt-[10px] justify-start items-start'>
                        <HeartIcon size={30} className=' cursor-pointer ' />
                    </div> */}
                </div>
                <div className='flex flex-col justify-start items-start h-full text-[14px] overflow-hidden overflow-y-scroll break-words descriptions w-[105%] sm:w-[102%] md:w-[38.3rem] '>
                    <Markdowns content={description} />
                </div>
                <div className='flex sticky bg-transparent bottom-[-10px] pb-[10px] left-0 justify-center px-[10px] items-center w-full'>
                    <Button className='w-full py-[22.5px] text-[16px] text-white bg-black '>
                        Apply Now
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default Jobsearchcard