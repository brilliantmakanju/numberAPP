'use client'
import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import { Button } from '@/components/ui/button'
import { FaMinus, FaPlus } from "react-icons/fa6"
import { Mastercard, Visa } from 'react-payment-logos/dist/flat';

const Subcription = () => {

    const times = Array.from({ length: 12 });


    return (
        <div className='w-full h-auto  flex flex-col p-[10px]  md:px-[20px] xl:pb-[0px] justify-start items-start'>
            <div className='flex gap-[5px] flex-col justify-start items-start'>
                <h1 className='text-[18px] font-semibold'>Current Plan</h1>
            </div>

            <div className='w-full pb-[18px] mt-[20px] grid grid-cols-1 gap-[20px] '>
                <div className='w-full flex  border rounded-lg shadow flex-col justify-between items-start h-[10rem] px-3 py-3'>
                    <div className='w-full  flex justify-between items-center'>
                        <div className='w-full flex flex-col justify-start items-start'>
                            <h4 className='text-[18px] font-[500]'>Free</h4>
                            {/* <span className='text-[12px] font-[300] text-gray-400'>30 days remaning</span> */}
                        </div>
                        <span className='text-[18px] flex justify-start items-start'>
                            <span className='font-[500] text-black'>$0/</span>
                            <span className='text-gray-400'>month</span>
                        </span>
                    </div>
                    <div className='w-full flex justify-start items-start'>
                        <Button className='w-full bg-black bg-opacity-80 font-semibold py-7' >
                            Upgrade
                        </Button>
                    </div>
                </div>

                {/* <div className='w-full flex border rounded-lg shadow flex-col justify-between items-start h-[10rem] px-3 py-3'>
                    <div className='w-full  flex justify-between items-center'>
                        <div className='w-full flex flex-col justify-start items-start'>
                            <h4 className='text-[18px] font-[500]'>Beginner</h4>
                            <span className='text-[12px] font-[300] text-gray-400'>30 days remaning</span>
                        </div>
                        <span className='text-[18px] flex justify-start items-start'>
                            <span className='font-[500] text-black'>$10/</span>
                            <span className='text-gray-400'>month</span>
                        </span>
                    </div>
                    <div className='w-full flex justify-start items-start'>
                        <Button variant={'outline'} className='w-full py-7 md:w-[20rem]' >
                            Cancel Subscription
                        </Button>
                    </div>
                </div> */}
            </div>

            <div className='flex w-full flex-col justify-start items-start mt-[25px] '>
                <div className='flex gap-[5px] flex-col justify-start items-start'>
                    <h1 className='text-[18px] font-semibold'>Payment Method</h1>
                </div>

                <div className='w-full mt-[20px] grid grid-cols-1 md:grid-cols-2 gap-[20px] '>
                    <div className='w-full flex  border rounded-lg shadow flex-col justify-between items-start h-[10rem] px-3 py-3'>
                        <div className='w-full flex-col flex justify-between items-center'>
                            <div className='w-full flex flex-col justify-start items-start'>
                                <h4 className='text-[14px] font-[300]'>Credit card</h4>
                            </div>
                            <div className='flex mt-[10px] w-full gap-[20px] justify-start items-center'>
                                <Mastercard />
                                <span className='flex justify-start text-[14px] items-center'>**** **** **** <span className='mt-[-5px] ml-[4px]'>8405</span></span>
                            </div>
                        </div>
                        <div className='w-full flex justify-end items-center'>
                            <Button className='w-[40px] p-[-300px] flex justify-center items-center font-[400] rounded-full h-[40px] hover:bg-black hover:text-white transition-all duration-300 ease-in-out bg-white text-black' >
                                <FaMinus />
                            </Button>
                        </div>
                    </div>

                    <div className='w-full flex  border rounded-lg shadow flex-col justify-between items-start h-[10rem] px-3 py-3'>
                        <div className='w-full flex-col flex justify-between items-center'>
                            <div className='w-full flex flex-col justify-start items-start'>
                                <h4 className='text-[14px] font-[300]'>Credit card</h4>
                            </div>
                            <div className='flex mt-[10px] w-full gap-[20px] justify-start items-center'>
                                <Visa />
                                <span className='flex justify-start text-[14px] items-center'>**** **** **** <span className='mt-[-5px] ml-[4px]'>6049</span></span>
                            </div>
                        </div>
                        <div className='w-full flex justify-end items-center'>
                            <Button className='w-[40px] p-[-300px] flex justify-center items-center font-[400] rounded-full h-[40px] hover:bg-black hover:text-white transition-all duration-300 ease-in-out bg-white text-black' >
                                <FaMinus />
                            </Button>
                        </div>
                    </div>

                    <div className='w-full flex  bg-black hover:bg-opacity-95 transition-all ease-in-out duration-300 bg-opacity-90 rounded-lg shadow flex-col justify-center items-center h-[10rem] px-3 py-3'>
                        <Button className='w-[50px] text-[25px] flex justify-center items-center font-[400] rounded-full hover:bg-white hover:text-black transition-all duration-300 ease-in-out h-[50px] bg-white text-black' >
                            <FaPlus />
                        </Button>
                    </div>

                </div>
            </div>

            <div className='flex w-full flex-col justify-start items-start mt-[25px] '>
                <div className='flex gap-[5px] flex-col justify-start items-start'>
                    <h1 className='text-[18px] font-semibold'>Billing History</h1>
                </div>

                <div className='w-full flex mt-[14px] justify-start items-start'>
                    <Table>
                        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
                        <TableHeader>
                            <TableRow className='bg-[black] overflow-hidden text-white'>
                                <TableHead className="w-[140px] text-white">Date</TableHead>
                                <TableHead className=' text-white'>Details</TableHead>
                                <TableHead className=' text-white'>Amount</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {times.map((_, index) => (
                                <TableRow key={index} className='h-[3rem]'>
                                    <TableCell className="font-medium">08/07/2021</TableCell>
                                    <TableCell>Beginner Plan, monthly</TableCell>
                                    <TableCell className="text-left">$250.00</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>

                </div>
            </div>
        </div>
    )
}

export default Subcription