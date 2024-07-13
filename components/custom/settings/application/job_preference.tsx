"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import ReusableMultiSelect from "@/components/ui/multi-selects"; // Update the import path as necessary
import { jobPreferencesSchema } from "@/lib/schema/schema";


const JobPreferencesForm = ({ onSubmit }: { onSubmit: any }) => {
    const form = useForm({
        resolver: zodResolver(jobPreferencesSchema),
        defaultValues: {
            jobTitles: [],
            workTypes: [],
            relocation: "",
            industries: [],
            salaryRange: "",
            workLocation: "",
            remotePreference: [],
            travelPreference: [],
        },
    });

    return (
        <Form {...form} >
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full flex flex-col justify-start items-start gap-[10px]">
                <h2 className="text-xl font-bold mb-4">Job Preferences</h2>
                <div className="grid grid-cols-1 w-full gap-4 md:grid-cols-2">
                    <FormField
                        control={form.control}
                        name="jobTitles"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Job Titles or Roles</FormLabel>
                                <FormControl>
                                    <ReusableMultiSelect
                                        disabled={false}
                                        value={field.value}
                                        onChange={(selected) => { field.onChange(selected) }}
                                        optionLabel="label"
                                        placeholder="Select job titles"
                                        options={[
                                            { label: "Data Analyst", value: "Data Analyst" },
                                            { label: "Product Manager", value: "Product Manager" },
                                            { label: "Software Developer", value: "Software Developer" },
                                            { label: "Softwsare Deseloper", value: "Softwsare sDeveloper" },

                                        ]}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="industries"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Industries</FormLabel>
                                <FormControl>
                                    <ReusableMultiSelect
                                        disabled={false}
                                        value={field.value}
                                        onChange={(selected) => field.onChange(selected)}
                                        optionLabel="label"
                                        placeholder="Select industries"
                                        options={[
                                            { label: "Technology", value: "Technology" },
                                            { label: "Healthcare", value: "Healthcare" },
                                            { label: "Finance", value: "Finance" },
                                        ]}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="workTypes"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Preferred Work Type</FormLabel>
                                <FormControl>
                                    <ReusableMultiSelect
                                        disabled={false}
                                        value={field.value}
                                        onChange={(selected) => { field.onChange(selected) }}
                                        optionLabel="label"
                                        placeholder="Select work type"
                                        options={[
                                            { label: "Contract", value: "Contract" },
                                            { label: "Full-time", value: "Full-time" },
                                            { label: "Freelance", value: "Freelance" },
                                            { label: "Part-time", value: "Part-time" },

                                        ]}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="workLocation"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Preferred Work Location</FormLabel>
                                <FormControl>
                                    <Input placeholder="New York, USA; London, UK" {...field} className="w-full" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="remotePreference"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Remote Work Preference</FormLabel>
                                <FormControl>
                                    <ReusableMultiSelect
                                        disabled={false}
                                        value={field.value}
                                        onChange={(selected) => field.onChange(selected)}
                                        optionLabel="label"
                                        placeholder="Select remote work preference"
                                        options={[
                                            { label: "Remote", value: "Remote" },
                                            { label: "On-site", value: "On-site" },
                                            { label: "Hybrid", value: "Hybrid" },
                                        ]}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="salaryRange"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Desired Salary Range</FormLabel>
                                <FormControl>
                                    <Input placeholder="$70,000 - $90,000 per year" {...field} className="w-full" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="relocation"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Willingness to Relocate</FormLabel>
                                <FormControl>
                                    <Input placeholder="Yes, within the USA" {...field} className="w-full" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="travelPreference"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Travel Preference</FormLabel>
                                <FormControl>
                                    <ReusableMultiSelect
                                        disabled={false}
                                        value={field.value}
                                        onChange={(selected) => field.onChange(selected)}
                                        optionLabel="label"
                                        placeholder="Select travel preference"
                                        options={[
                                            { label: "Occasionally", value: "Occasionally" },
                                            { label: "Frequently", value: "Frequently" },
                                        ]}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className="flex justify-end w-full mt-[30px] items-center">
                    <Button type="submit">Submit</Button>
                </div>
            </form>
        </Form>
    );
};

export default JobPreferencesForm;
