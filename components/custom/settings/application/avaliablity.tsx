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
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { availabilitySchema, AvailabilityFormData } from "@/lib/schema/schema";

export default function AvailabilityForm({ onSubmit }: { onSubmit: SubmitHandler<AvailabilityFormData> }) {
    const form = useForm<AvailabilityFormData>({
        resolver: zodResolver(availabilitySchema),
        defaultValues: {
            startDate: "",
            preferredWorkHours: "",
            unavailableTimes: "",
            upcomingCommitments: "",
        },
    });

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-5">
                <h2 className="text-xl font-bold mb-4">Availability</h2>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <FormField
                        control={form.control}
                        name="startDate"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>When are you available to start a new job?</FormLabel>
                                <FormControl>
                                    <Input placeholder="Immediately" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="preferredWorkHours"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>What are your preferred work hours?</FormLabel>
                                <FormControl>
                                    <Input placeholder="Standard business hours" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <FormField
                    control={form.control}
                    name="unavailableTimes"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Are there any days or times you are unavailable to work?</FormLabel>
                            <FormControl>
                                <Textarea placeholder="Not available on weekends" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="upcomingCommitments"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Do you have any upcoming commitments that may affect your availability?</FormLabel>
                            <FormControl>
                                <Textarea placeholder="No" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="w-full flex justify-end items-center py-3">
                    <Button type="submit">Submit</Button>
                </div>
            </form>
        </Form>
    );
}
