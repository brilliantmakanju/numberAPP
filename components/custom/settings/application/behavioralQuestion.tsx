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
import { behavioralQuestionsSchema, BehavioralQuestionsFormData } from "@/lib/schema/schema";

export default function BehavioralQuestionsForm({ onSubmit }: { onSubmit: SubmitHandler<BehavioralQuestionsFormData> }) {
    const form = useForm<BehavioralQuestionsFormData>({
        resolver: zodResolver(behavioralQuestionsSchema),
        defaultValues: {
            teamwork: "",
            conflictResolution: "",
            initiative: "",
            taskPrioritization: "",
            adaptability: "",
        },
    });

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
                <h2 className="text-xl font-bold mb-4">Behavioral Questions</h2>
                <div className="grid grid-cols-1 gap-4">
                    <FormField
                        control={form.control}
                        name="teamwork"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Tell us about a time you successfully worked as part of a team.</FormLabel>
                                <FormControl>
                                    <Textarea placeholder="I collaborated with a cross-functional team to launch a new product, ensuring effective communication and teamwork, resulting in a successful launch." {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="conflictResolution"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Describe a situation where you had to resolve a conflict within your team. How did you handle it?</FormLabel>
                                <FormControl>
                                    <Textarea placeholder="I facilitated a meeting to understand each team member's perspective, addressed their concerns, and mediated a compromise that satisfied all parties involved." {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="initiative"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Give an example of when you took initiative in your previous role.</FormLabel>
                                <FormControl>
                                    <Textarea placeholder="I identified a gap in our process that was causing delays, proposed a new workflow, and led the implementation, which improved efficiency by 20%." {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="taskPrioritization"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>How do you prioritize your tasks when you have multiple deadlines?</FormLabel>
                                <FormControl>
                                    <Textarea placeholder="I assess the urgency and impact of each task, create a prioritized to-do list, and allocate time blocks in my schedule to ensure high-priority tasks are completed first." {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="adaptability"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Describe a time when you had to adapt to significant changes in your work environment.</FormLabel>
                                <FormControl>
                                    <Textarea placeholder="When our company shifted to remote work, I quickly adapted by setting up a home office, mastering virtual collaboration tools, and maintaining regular communication with my team." {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className="w-full flex justify-end items-center py-3">
                    <Button type="submit">Submit</Button>
                </div>
            </form>
        </Form>
    );
}
