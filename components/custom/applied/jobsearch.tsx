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


const Jobsearch = () => {

    const markdownContent = `
        ## Job Details
        - ** Job Type:** Full Time
        - ** Location:** J.P. Nagar, Bangalore (Work from office)
        - ** Experience:** 0-1 Years
        - ** Salary:** Competitive, based on experience
        ---
        ## Responsibilities
        - Write clean, efficient, and scalable Python code
        - Develop and maintain back-end components of web applications
        - Test and debug code to ensure functionality
        - Integrate applications with third-party services
        - Contribute to code reviews
        - Stay up-to-date on the latest Python trends and technologies
        ---
        ## Qualifications
        - Bachelor's degree in Computer Science or a related field (or equivalent experience)
        - 0-1 years of experience developing with Python
        - Strong understanding of object-oriented programming concepts
        - Familiarity with at least one popular Python framework (e.g., Django, Flask)
        - Experience with version control systems (e.g., Git)
        - Excellent problem-solving and analytical skills
        - Strong communication and collaboration skills
        ---
        ## Bonus Points
        - Experience with web development technologies (e.g., HTML, CSS, JavaScript)
        - Experience with databases (e.g., SQL, NoSQL)
        - Experience with cloud platforms (e.g., AWS, Azure, GCP)
        ---
        ## What We Offer
        - Opportunity to work on challenging and impactful projects
        - Collaborative and supportive work environment
        - Competitive salary and benefits package
        - Chance to learn and grow your skills
    `;

    const times = Array.from({ length: 12 });

    return (
        <section className='w-full flex flex-col gap-[30px] justify-start items-start'>

            {/* <div className='w-full  flex flex-col gap-[10px] md:gap-0 md:flex-row justify-center items-center'>
                <Input placeholder='Search job title ......' className='rounded-l-[14px] py-[20px] rounded-r-[14px] md:rounded-r-[0px] w-full md:w-[25rem] focus-visible:ring-0 ' />
                <button className="bg-black focus-visible:outline-none ring-1 ring-ring font-semibold text-white py-[7.7px] rounded-l-[14px] md:rounded-l-[0px] px-4 rounded-r-[14px] w-full md:w-[8rem] transition-all ease-in-out duration-300 ">
                    Search
                </button>
            </div> */}


            <div className='w-full flex flex-col gap-[20px] justify-start items-start '>
                {/* <div className='w-full flex justify-start items-start '>
                    <div className='flex flex-wrap justify-start items-start gap-[10px] pl-[10px] md:pl-[50px] '>
                        <span className='py-2 px-4 rounded-full bg-black text-white cursor-pointer '>Date</span>
                    </div>
                </div> */}

                <div className='grid w-full grid-cols-1 gap-4 gap-x-4 transition-all sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 pb-[10px] '>
                    {times.map((_, index) => (
                        <Jobsearchcard
                            key={index}
                            liked
                            posted='17d'
                            company='Google'
                            role='Software Engineer'
                            logo='/images/logo-bg.png'
                            description={markdownContent}
                            brief='The ideal candidate will have a passion for sales, a deep understanding of social media platforms, and a proven track record of driving business growth through…… Skills: Bilingual, Microsoft Word, CRM software, Spanish, Microsoft Excel'
                        />
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