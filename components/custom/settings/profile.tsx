'use client'
import Image from 'next/image'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { currentUser } from '@/lib/current_user'
import React, { useEffect, useState } from 'react'
import { GitHubLogoIcon } from '@radix-ui/react-icons'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from '@/components/ui/label'

const Profile = () => {

    const [formData, setFormData] = useState({ fname: '', lname: '' });
    const [changename, setChangename] = useState(false)
    const [users, setUser] = useState<any>()


    const getSessions = async () => {
        const session = await currentUser()
        const name = session?.name || ''
        const [first, last] = name.split(' ')
        setFormData({ ...formData, fname: first, lname: last });
        setUser(session)
    }

    useEffect(() => {
        getSessions()
    }, [])


    const handleInputChange = ({ event, name }: {
        event: React.ChangeEvent<HTMLInputElement>,
        name: string,
    }) => {
        const { value } = event.target;
        setFormData({ ...formData, [name]: value })
    };

    return (
        <div className='w-full  h-auto descriptions flex flex-col p-[10px]  md:px-[20px] xl:pb-[0px] justify-start items-start'>
            <div className='w-full gap-[20px] flex flex-col justify-start items-start'>

                <div className='flex justify-start gap-[20px] flex-col items-start pt-[18px] pb-[10px] border-b-2 w-full '>
                    <div className='w-full flex flex-col md:flex-row justify-between  items-center'>
                        <div className='flex justify-start items-center gap-[10px] w-full'>
                            <Avatar className="w-[6rem] h-[6rem]">
                                <AvatarImage src={`${users?.image ? `${users.image}` : 'https://github.com/shadcn.png'}`} />
                                <AvatarFallback>BM</AvatarFallback>
                            </Avatar>
                            <div className="flex gap-[2.5px] flex-col justify-start items-start">
                                <h3 className='text-[16px] font-semibold'>Profile picture</h3>
                                <p className='text-[12px] text-gray-500 dark:text-gray-400'>PNG, JPEG under 15MB</p>
                            </div>
                        </div>
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button variant={'outline'} className='shadow border mt-[20px] w-full md:w-[300px] px-5 text-[#6b6a6a] py-3 '>Upload new picture</Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[425px]">
                                <DialogHeader>
                                    <DialogTitle>Upload Files</DialogTitle>
                                    <DialogDescription>Select the files you would like to upload.</DialogDescription>
                                </DialogHeader>
                                <div className="grid gap-4 py-4">
                                    <div className="grid items-center grid-cols-4 gap-4">
                                        <Label htmlFor="files" className="text-right">
                                            Files
                                        </Label>
                                        <Input id="files" type="file" multiple className="col-span-3 cursor-pointer" />
                                    </div>
                                </div>
                                <DialogFooter>
                                    <Button type="submit">Upload</Button>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>
                    </div>

                    <div className='w-full flex flex-col gap-[14px] pb-[8px]'>
                        <h3 className='text-[16px] font-semibold'>Full name</h3>
                        <div className='w-full flex justify-start items-start gap-[14px]'>
                            <div className='flex flex-col w-full gap-[5px]'>
                                <span className='text-[12px] font-[450]'>First name</span>
                                <Input value={formData.fname}
                                    onChange={(e) => handleInputChange({ event: e, name: 'fname' })} disabled={!changename} aria-disabled={!changename} className='py-5 disabled:bg-opacity-5 disabled:bg-[#a3a2a2] disabled:border disabled:opacity-80 ' />
                            </div>
                            <div className='flex flex-col w-full gap-[5px]'>
                                <span className='text-[12px] font-[450]'>Last name</span>
                                <Input value={formData.lname}
                                    onChange={(e) => handleInputChange({ event: e, name: 'lname' })} disabled={!changename} aria-disabled={!changename} className='py-5 disabled:bg-opacity-5 disabled:bg-[#a3a2a2] disabled:border disabled:opacity-80' />
                            </div>
                        </div>
                        <div className='flex w-full justify-end items-end gap-[10px] '>
                            {
                                changename &&
                                <Button onClick={() => setChangename(false)} className='shadow px-5 text-[#ffffff] py-3'>Save changes</Button>

                            }
                            <Button onClick={() => setChangename(!changename)} variant={'outline'} className='shadow border px-5 text-[#6b6a6a] py-3 '>Change name</Button>
                        </div>
                    </div>
                </div>

                <div className='w-full border-b-2 flex flex-col gap-[14px] pb-[18px]'>
                    <div className='w-full flex justify-start items-start gap-[14px]'>
                        <div className='flex flex-col w-full gap-[5px]'>
                            <span className='text-[12px] font-[450]'>Email</span>
                            <Input value={`${users?.email}`} disabled aria-disabled className='py-5 disabled:bg-opacity-5 disabled:bg-[#a3a2a2] disabled:border disabled:opacity-80' />
                        </div>
                    </div>
                </div>

                <div className='w-full flex flex-col gap-[14px]'>
                    <div className='flex gap-[2.5px] flex-col justify-start items-start'>
                        <h1 className='text-[16px] font-semibold'>Connected Account</h1>
                        <p className='text-[12px] text-gray-500 dark:text-gray-400'>View connected account</p>
                    </div>
                    <div className='w-full flex flex-col justify-start items-start gap-[14px]'>

                        <div className='w-full rounded-lg shadow border py-[14px] px-[20px] flex justify-between items-center'>
                            {users?.access_all?.provider === 'google' ?
                                <div className='flex relative h-[4rem] border rounded-lg w-[4rem] bg-[#e1e0e0] bg-opacity-50 justify-center items-center p-[5px] '>
                                    <Image
                                        width={999}
                                        height={999}
                                        alt='Google Logo'
                                        src={'/svg/logo_google.svg'}
                                        className='w-full h-full'
                                    />
                                </div> :
                                <div className='flex relative h-[4rem] border rounded-lg w-[4rem] bg-[#e1e0e0] bg-opacity-50 justify-center items-center p-[5px] '>
                                    <GitHubLogoIcon className='w-[2rem] h-[2rem] ' />
                                </div>

                            }
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