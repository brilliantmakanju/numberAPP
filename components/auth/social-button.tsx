"use client"

import React from 'react'
import Image from 'next/image';
import { signIn } from "next-auth/react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { FaGithub, FaGithubAlt } from 'react-icons/fa';

const Social_Login = () => {

    const OnClick = (provider: "google" | "twitter" | "linkedin" | "github") => {
        signIn(provider, {
            redirect: false
        })
    }

    return (
        <Card className="w-full shadow-none border-0 flex flex-col justify-center items-center gap-[14px] ">
            <Button onClick={() => OnClick("google")} className='w-full flex justify-start items-center py-[1.5rem] gap-[5px] rounded-[20px] shadow-none bg-black text-white border hover:bg-black hover:bg-opacity-95 transition-all ease-in-out duration-300' >
                <div className='flex relative justify-center items-center w-[40px] h-[40px] '>
                    <Image
                        width={999}
                        height={999}
                        alt='Google Logo'
                        src={'/svg/logo_google.svg'}
                        className='w-full h-full absolute top-0 left-0'
                    />
                </div>
                <span className='text-[14px] font-semibold '>
                    Continue with Google
                </span>
            </Button>

            <Button onClick={() => OnClick("github")} className='w-full flex justify-start items-center gap-[5px] py-[1.5rem] rounded-[20px] shadow-none' variant={'outline'}>
                <div className='flex relative justify-center items-center w-[40px] h-[40px] '>
                    <Image
                        width={999}
                        height={999}
                        alt='Github Logo'
                        src={'/svg/GitHub-Logo.wine.svg'}
                        className='w-full h-full absolute top-0 left-0'
                    />
                </div>
                <FaGithubAlt />
                <span className='text-[14px] text-[#838181] font-semibold '>
                    Continue with Github
                </span>
            </Button>
        </Card>
    )
}

export default Social_Login