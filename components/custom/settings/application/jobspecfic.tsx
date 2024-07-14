"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { jobSpecificQuestionsSchema, JobSpecificQuestionsFormData } from "@/lib/schema/schema";
import { useState } from "react";

export default function JobSpecificQuestionsForm({ onSubmit }: { onSubmit: SubmitHandler<JobSpecificQuestionsFormData> }) {
    const [makeChange, setMakeChange] = useState(false)
    const form = useForm<JobSpecificQuestionsFormData>({
        resolver: zodResolver(jobSpecificQuestionsSchema),
        defaultValues: {
            significantAchievement: "",
            problemSolvingApproach: "",
            newSkillAcquisition: "",
            handlingDeadlines: "",
            managingProjects: "",
            stayingUpdated: "",
        },
    });

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-5">
                <h2 className="text-xl font-bold mb-4">Job-Specific Questions</h2>
                <div className="grid grid-cols-1 gap-4">
                    <FormField
                        control={form.control}
                        name="significantAchievement"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Describe a significant achievement in your career and how it benefited your previous employer.</FormLabel>
                                <FormControl>
                                    <Textarea disabled={!makeChange} placeholder="Developed a new feature that increased user engagement by 50%, leading to a significant revenue increase." {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="problemSolvingApproach"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>How do you approach problem-solving in your work? Provide an example.</FormLabel>
                                <FormControl>
                                    <Textarea disabled={!makeChange} placeholder="I use a systematic approach to problem-solving, starting with identifying the root cause. For example, when faced with a critical bug in our software, I conducted a thorough analysis, identified the issue, and implemented a solution that prevented future occurrences." {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="newSkillAcquisition"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Describe a time when you had to learn a new skill quickly for your job. How did you manage it?</FormLabel>
                                <FormControl>
                                    <Textarea placeholder="When our team decided to adopt a new framework, I took an online course, read documentation, and practiced by building small projects to quickly get up to speed." {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="handlingDeadlines"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>How do you handle tight deadlines and high-pressure situations?</FormLabel>
                                <FormControl>
                                    <Textarea disabled={!makeChange} placeholder="I prioritize tasks, maintain open communication with my team, and stay focused on the most critical tasks to ensure deadlines are met." {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="managingProjects"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>What is your process for managing multiple projects simultaneously?</FormLabel>
                                <FormControl>
                                    <Textarea disabled={!makeChange} placeholder="I use project management tools to keep track of tasks and deadlines, prioritize my workload, and ensure I allocate sufficient time for each project." {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="stayingUpdated"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>How do you stay updated with the latest industry trends and developments?</FormLabel>
                                <FormControl>
                                    <Textarea disabled={!makeChange} placeholder="I regularly read industry blogs, attend webinars, and participate in professional development courses." {...field} />
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
