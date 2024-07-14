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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { educationSchema, EducationFormData } from "@/lib/schema/schema";

export default function EducationForm({ onSubmit }: { onSubmit: SubmitHandler<EducationFormData> }) {
    const form = useForm<EducationFormData>({
        resolver: zodResolver(educationSchema),
        defaultValues: {
            highestDegree: undefined,
            fieldOfStudy: "",
            institution: "",
            graduationYear: "",
            additionalDegrees: "",
        },
    });

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-5 ">
                <h2 className="text-xl font-bold mb-4">Education</h2>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <FormField
                        control={form.control}
                        name="highestDegree"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Highest Degree Obtained</FormLabel>
                                <FormControl>
                                    <Select value={field.value} onValueChange={field.onChange}>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Select degree" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="High School">High School</SelectItem>
                                            <SelectItem value="Associate's Degree">Associate{`'`}s Degree</SelectItem>
                                            <SelectItem value="Bachelor's Degree">Bachelor{`'`}s Degree</SelectItem>
                                            <SelectItem value="Master's Degree">Master{`'`}s Degree</SelectItem>
                                            <SelectItem value="Doctorate">Doctorate</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="fieldOfStudy"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Field of Study</FormLabel>
                                <FormControl>
                                    <Input placeholder="Computer Science" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="institution"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>University or College</FormLabel>
                                <FormControl>
                                    <Input placeholder="University of California, Berkeley" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="graduationYear"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Graduation Year</FormLabel>
                                <FormControl>
                                    <Input placeholder="2016" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <FormField
                    control={form.control}
                    name="additionalDegrees"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Additional Degrees or Certifications</FormLabel>
                            <FormControl>
                                <Textarea placeholder="Master's in Data Science from Stanford University, graduated in 2018" {...field} />
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
