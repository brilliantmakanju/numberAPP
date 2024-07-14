'use client'
import React, { useState } from 'react';
// import { PhoneInput } from '@/components/ui/phone';
import { zodResolver } from "@hookform/resolvers/zod"
import PhoneInput from "react-phone-input-2"
import "react-phone-input-2/lib/style.css"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { personalInformationSchema } from '@/lib/schema/schema';


const PersonalInformation = ({ onSubmit }: { onSubmit: any }) => {

    const [makeChange, setMakeChange] = useState(false)

    const form = useForm({
        resolver: zodResolver(personalInformationSchema),
        defaultValues: {
            preferredName: "",
            phone: "",
            linkedin: "",
            address: "",
            portfolio: ""
        },
    })

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-5">
                <h2 className="text-xl font-bold mb-4">Personal Information</h2>
                <div className="grid grid-cols-1 w-full gap-4 md:grid-cols-2">
                    <FormField
                        control={form.control}
                        name="preferredName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Preferred Name or Nickname</FormLabel>
                                <FormControl>
                                    <Input disabled={!makeChange} placeholder="John" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Phone Number</FormLabel>
                                <FormControl>
                                    <PhoneInput
                                        country={'us'}
                                        disabled={!makeChange}
                                        value={field.value}
                                        onChange={field.onChange}
                                        inputStyle={{ width: '100%' }}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="linkedin"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>LinkedIn Profile URL</FormLabel>
                                <FormControl>
                                    <Input disabled={!makeChange} type="url" placeholder="linkedin.com/in/johndoe" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="address"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Current Residential Address</FormLabel>
                                <FormControl>
                                    <Input disabled={!makeChange} placeholder="123 Main St, Anytown, USA" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className='w-full'>

                    <FormField
                        control={form.control}
                        name="portfolio"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Professional Website or Portfolio</FormLabel>
                                <FormControl>
                                    <Input className='w-full' disabled={!makeChange} type="url" placeholder="johndoedesigns.com" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className='flex w-full justify-end items-end gap-[10px] '>
                    {
                        makeChange &&
                        <Button type='submit' onClick={() => setMakeChange(false)} className='shadow px-5 text-[#ffffff] py-3'>Save changes</Button>

                    }
                    <Button type='button' onClick={() => setMakeChange(!makeChange)} variant={'outline'} className='shadow border px-5 text-[#6b6a6a] py-3 '>Change</Button>
                </div>
            </form>
        </Form>
    );
};

export default PersonalInformation;
