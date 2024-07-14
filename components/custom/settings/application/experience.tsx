"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFieldArray, SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { experienceSchema, ExperienceFormData } from "@/lib/schema/schema";
import { ExperienceFormProps } from "@/types";
import { useState } from "react";

const ExperienceForm = ({ onSubmit }: ExperienceFormProps) => {
    const [makeChange, setMakeChange] = useState(false)
    const form = useForm<ExperienceFormData>({
        resolver: zodResolver(experienceSchema),
        defaultValues: {
            currentRole: "",
            responsibilities: "",
            achievements: "",
            challengingProject: "",
            jobHistory: [{ role: "", company: "", dates: "" }],
            alignmentWithDesiredRole: "",
        },
    });

    const { fields, append, remove } = useFieldArray({
        control: form.control,
        name: "jobHistory",
    });

    const handleSubmit: SubmitHandler<ExperienceFormData> = (data) => {
        onSubmit(data);
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="w-full space-y-5">
                <h2 className="text-xl font-bold mb-4">Experience</h2>
                <div className="flex flex-col justify-start items-start gap-4 w-full">
                    <FormField
                        control={form.control}
                        name="currentRole"

                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormLabel>Current or Most Recent Job Role</FormLabel>
                                <FormControl>
                                    <Input disabled={!makeChange} className="w-full" placeholder="Senior Software Engineer at TechCorp" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="responsibilities"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormLabel>Primary Responsibilities</FormLabel>
                                <FormControl>
                                    <Textarea disabled={!makeChange} placeholder="Leading a team of developers to build and maintain web applications." {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="achievements"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormLabel>Key Achievements</FormLabel>
                                <FormControl>
                                    <Textarea disabled={!makeChange} placeholder="Increased application performance by 30% through code optimization." {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="challengingProject"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormLabel>Challenging Project</FormLabel>
                                <FormControl>
                                    <Textarea disabled={!makeChange} placeholder="Led the migration of a legacy system to a cloud-based platform, addressing technical challenges through thorough planning and team collaboration." {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    {fields.map((field, index) => (
                        <div key={field.id} className="col-span-1 w-full md:col-span-2">
                            <div className="grid grid-cols-1 w-full md:grid-cols-3 gap-4">
                                <FormField
                                    control={form.control}
                                    name={`jobHistory.${index}.role`}
                                    render={({ field }) => (
                                        <FormItem className="w-full">
                                            <FormLabel>Role</FormLabel>
                                            <FormControl>
                                                <Input disabled={!makeChange} className="w-full" placeholder="Software Developer" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name={`jobHistory.${index}.company`}
                                    render={({ field }) => (
                                        <FormItem className="w-full">
                                            <FormLabel>Company</FormLabel>
                                            <FormControl>
                                                <Input disabled={!makeChange} className="w-full" placeholder="Web Solutions" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name={`jobHistory.${index}.dates`}
                                    render={({ field }) => (
                                        <FormItem className="w-full">
                                            <FormLabel>Dates</FormLabel>
                                            <FormControl>
                                                <Input disabled={!makeChange} className="w-full" placeholder="2018-2020" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <Button type="button" onClick={() => remove(index)} className="mt-2">
                                Remove
                            </Button>
                        </div>
                    ))}
                    <Button type="button" disabled={!makeChange} onClick={() => append({ role: "", company: "", dates: "" })} className="mt-2 disabled:opacity-85 disabled:cursor-not-allowed ">
                        Add Job History
                    </Button>
                    <FormField
                        control={form.control}
                        name="alignmentWithDesiredRole"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormLabel>Alignment with Desired Role</FormLabel>
                                <FormControl>
                                    <Textarea disabled={!makeChange} placeholder="My experience in software development and project management aligns with my goal of becoming a Product Manager." {...field} />
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
}



export default ExperienceForm;
