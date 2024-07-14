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
import { preferencesAndMotivationsSchema, PreferencesAndMotivationsFormData } from "@/lib/schema/schema";
import { useState } from "react";

export default function PreferencesAndMotivationsForm({ onSubmit }: { onSubmit: SubmitHandler<PreferencesAndMotivationsFormData> }) {
    const [makeChange, setMakeChange] = useState(false)
    const form = useForm<PreferencesAndMotivationsFormData>({
        resolver: zodResolver(preferencesAndMotivationsSchema),
        defaultValues: {
            motivation: "",
            jobSatisfaction: "",
            companyCulture: "",
            careerGoals: "",
            nextRoleAchievements: "",
        },
    });

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-5">
                <h2 className="text-xl font-bold mb-4">Preferences and Motivations</h2>
                <div className="grid grid-cols-1 gap-4">
                    <FormField
                        control={form.control}
                        name="motivation"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>What motivates you to perform well at your job?</FormLabel>
                                <FormControl>
                                    <Textarea disabled={!makeChange} placeholder="I am motivated by challenging projects that allow me to develop my skills and make a meaningful impact on the company." {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="jobSatisfaction"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>What aspects of a job do you find most satisfying?</FormLabel>
                                <FormControl>
                                    <Textarea disabled={!makeChange} placeholder="I find satisfaction in problem-solving, collaborating with a team, and seeing the positive results of my work." {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="companyCulture"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>What kind of company culture do you thrive in?</FormLabel>
                                <FormControl>
                                    <Textarea disabled={!makeChange} placeholder="I thrive in a collaborative, innovative, and inclusive culture that values continuous learning and professional growth." {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="careerGoals"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>What are your career goals for the next 5 years?</FormLabel>
                                <FormControl>
                                    <Textarea disabled={!makeChange} placeholder="I aim to advance to a senior management role where I can lead strategic initiatives and mentor junior team members." {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="nextRoleAchievements"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>What do you hope to achieve in your next role?</FormLabel>
                                <FormControl>
                                    <Textarea disabled={!makeChange} placeholder="I hope to take on more leadership responsibilities, contribute to high-impact projects, and continue developing my technical and managerial skills." {...field} />
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
