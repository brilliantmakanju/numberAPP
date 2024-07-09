import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'
import React from 'react'
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import Jobsearchcard from './jobsearchcard'
import { Settings2Icon } from 'lucide-react'


const Jobsearch = () => {

    const times = Array.from({ length: 12 });

    return (
        <section className='w-full flex flex-col gap-[30px] justify-start items-start'>
            
            <div className='w-full  flex flex-col gap-[10px] md:gap-0 md:flex-row justify-center items-center'>
                <Input placeholder='Search job title ......' className='rounded-l-[14px] py-[20px] rounded-r-[14px] md:rounded-r-[0px] w-full md:w-[25rem] focus-visible:ring-0 ' />
                <button className="bg-black focus-visible:outline-none ring-1 ring-ring font-semibold text-white py-[7.7px] rounded-l-[14px] md:rounded-l-[0px] px-4 rounded-r-[14px] w-full md:w-[8rem] transition-all ease-in-out duration-300 ">
                    Search
                </button>
            </div>


            <div className='w-full flex flex-col gap-[20px] justify-start items-start '>
                <div className='w-full flex justify-start items-start '>
                    <div className='flex justify-start items-start ml-3 group relative' tabIndex={0}>
                        <div className='pt-[6px]'>
                            <Settings2Icon size={24} />
                        </div>
                        <div className='w-0 hidden group-focus:shadow  group-focus:w-[250px] rounded-md group-focus:absolute top-[60px] left-[-10px] group-focus:flex flex-col  justify-start items-center gap-[10px] border border-black border-opacity-10 transition-all ease-in-out duration-300 overflow-hidden bg-[white] z-[2]'>
                            <span className='py-2 px-4 w-full text-black cursor-pointer hover:bg-black hover:bg-opacity-80 hover:text-white transition-all ease-in-out duration-300  '>Date</span>
                            <span className='py-2 px-4 w-full text-black cursor-pointer hover:bg-black hover:bg-opacity-80 hover:text-white transition-all ease-in-out duration-300  '>Role</span>
                            <span className='py-2 px-4 w-full text-black cursor-pointer hover:bg-black hover:bg-opacity-80 hover:text-white transition-all ease-in-out duration-300  '>Dev</span>
                            <span className='py-2 px-4 w-full text-black hover:bg-black hover:bg-opacity-80 hover:text-white transition-all ease-in-out duration-300 '>Easy apply</span>
                        </div>
                    </div>
                    <div className='flex flex-wrap justify-start items-start gap-[10px] pl-[10px] md:pl-[50px] '>
                        <span className='py-2 px-4 rounded-full bg-black text-white cursor-pointer '>Date</span>
                        <span className='py-2 px-4 rounded-full bg-[white] text-black cursor-pointer border border-black hover:bg-black hover:bg-opacity-80 hover:text-white transition-all ease-in-out duration-300 '>Easy apply</span>
                        <span className='py-2 px-4 rounded-full bg-[white] text-black cursor-pointer border border-black hover:bg-black hover:bg-opacity-80 hover:text-white transition-all ease-in-out duration-300 '>Easy apply</span>
                        <span className='py-2 px-4 rounded-full bg-[white] text-black cursor-pointer border border-black hover:bg-black hover:bg-opacity-80 hover:text-white transition-all ease-in-out duration-300 '>Easy apply</span>

                    </div>
                </div>

                <div className='grid w-full grid-cols-1 gap-4 gap-x-4 transition-all sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 pb-[10px] '>
                    {times.map((_, index) => (
                        <Jobsearchcard />
                    ))}
                </div>
                <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious href="#" />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">1</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationEllipsis />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationNext href="#" />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>
            {/* <MyComponent key={index} /> */}
        </section>
    )
}

export default Jobsearch