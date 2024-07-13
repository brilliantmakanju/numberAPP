import { z } from "zod"

export const personalInformationSchema = z.object({
  preferredName: z.string().min(1, { message: "Preferred name is required" }),
  phone: z.string().min(1, { message: "Phone number is required" }),
  linkedin: z.string().url({ message: "Invalid LinkedIn URL" }),
  address: z.string().min(1, { message: "Address is required" }),
  portfolio: z.string().url({ message: "Invalid portfolio URL" }),
})


export const jobPreferencesSchema = z.object({
  relocation: z.string().optional(),
  salaryRange: z.string().optional(),
  workLocation: z.string().optional(),
  workTypes: z.array(z.string()).nonempty({ message: "Please select work type" }),
  jobTitles: z.array(z.string()).nonempty({ message: "Please select at least one job title." }),
  industries: z.array(z.string()).nonempty({ message: "Please select at least one industry." }),
  travelPreference: z.array(z.string()).nonempty({ message: "Please select at least one travel preference." }),
  remotePreference: z.array(z.string()).nonempty({ message: "Please select at least one remote work preference." }),
});

