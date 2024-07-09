import { Card } from '@/components/ui/card'
import { HeartIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Jobsearchcard = () => {
    return (
        <Card className='flex w-full flex-col gap-3 rounded-xl border p-5 shadow'>
            <div className='flex flex-row justify-between items-start'>
                <div className='flex flex-row gap-[14px] justify-start items-start'>
                    <div className='w-[40px]  h-[2.5rem] relative'>
                        <Image src={`/images/logo-bg.png`} alt='Number One Career Logo' width={999} height={999} className={`w-full h-full absolute top-0 left-0`} />
                    </div>
                    <div className='flex flex-col justify-start items-start'>
                        <h2 className="text-xl font-semibold">Software Engineer</h2>
                        <p className="text-sm text-gray-500">Google</p>
                    </div>
                </div>
                <div className='flex flex-row justify-start items-start'>
                    <HeartIcon />
                </div>
            </div>
            <div className='flex w-full flex-col justify-start text-[12px] font-normal md:text-[14px] gap-[10px] items-start'>
                <span>The ideal candidate will have a passion for sales, a deep understanding of social media platforms, and a proven track record of driving business growth through……
                    Skills: Bilingual, Microsoft Word, CRM software, Spanish, Microsoft Excel
                </span>
                <span className='w-full flex text-sm text-gray-500 justify-end items-end'>
                    12d
                </span>
            </div>
        </Card>
    )
}

export default Jobsearchcard