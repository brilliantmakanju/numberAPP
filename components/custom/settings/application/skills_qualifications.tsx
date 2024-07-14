import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { useForm, SubmitHandler } from "react-hook-form";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea"
import ReusableMultiSelect from "@/components/ui/multi-selects"; // Update import path as necessary
import { skillsAndQualificationsSchema } from "@/lib/schema/schema"; // Import your Zod schema and TypeScript interfaces
import { SkillsAndQualificationsFormData, SkillsAndQualificationsFormProps } from "@/types";
import { useState } from "react";

const SkillsAndQualificationsForm = ({ onSubmit }: SkillsAndQualificationsFormProps) => {

    const [makeChange, setMakeChange] = useState(false)

    const form = useForm<SkillsAndQualificationsFormData>({
        resolver: zodResolver(skillsAndQualificationsSchema),
        defaultValues: {
            professionalSkills: "",
            certifications: "",
            technologies: "",
            languages: [],
            softSkills: "",
        },
    });

    const handleFormSubmit: SubmitHandler<SkillsAndQualificationsFormData> = (data) => {
        onSubmit(data);
    };

    return (
        <Form{...form} >
            <form onSubmit={form.handleSubmit(handleFormSubmit)} className="w-full space-y-5">
                <h2 className="text-xl font-bold mb-4">Skills and Qualifications</h2>
                <div className="grid grid-cols-1 gap-4">
                    <FormField
                        control={form.control}
                        name="professionalSkills"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Professional Skills</FormLabel>
                                <FormControl>
                                    <Textarea
                                        disabled={!makeChange}
                                        placeholder="Enter your top five professional skills"
                                        {...field}
                                        className="w-full"
                                    />
                                </FormControl>
                                <FormDescription>
                                    Example: Programming, Data Analysis, Project Management
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="certifications"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Certifications or Licenses</FormLabel>
                                <FormControl>
                                    <Textarea
                                        disabled={!makeChange}
                                        placeholder="List your certifications or licenses"
                                        {...field}
                                        className="w-full"
                                    />
                                </FormControl>
                                <FormDescription>
                                    Example: Scrum Master, Google Analytics
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="technologies"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Proficient Technologies</FormLabel>
                                <FormControl>
                                    <Textarea
                                        disabled={!makeChange}
                                        placeholder="Enter software, tools, or technologies you are proficient in"
                                        {...field}
                                        className="w-full"
                                    />
                                </FormControl>
                                <FormDescription>
                                    Example: Python, SQL, Tableau
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="languages"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Languages</FormLabel>
                                <FormControl>
                                    <ReusableMultiSelect
                                        value={field.value}
                                        disabled={!makeChange}
                                        onChange={(selected: any) => field.onChange(selected)}
                                        optionLabel="label"
                                        placeholder="Select languages"
                                        options={[
                                            { label: "English", value: "English" },
                                            { label: "Spanish", value: "Spanish" },
                                            { label: "French", value: "French" },
                                            { label: "German", value: "German" },
                                            { label: "Mandarin", value: "Mandarin" },
                                        ]}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="softSkills"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Soft Skills</FormLabel>
                                <FormControl>
                                    <Textarea
                                        disabled={!makeChange}
                                        placeholder="Enter your soft skills"
                                        {...field}
                                        className="w-full"
                                    />
                                </FormControl>
                                <FormDescription>
                                    Example: Communication, Teamwork, Problem-Solving
                                </FormDescription>
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

export default SkillsAndQualificationsForm;
