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

export const skillsAndQualificationsSchema = z.object({
  professionalSkills: z.string().nonempty({ message: "Professional skills are required." }),
  certifications: z.string().optional(),
  technologies: z.string().optional(),
  languages: z.array(z.string()).min(1, { message: "Please select at least one language." }),
  softSkills: z.string().optional(),
});


export const experienceSchema = z.object({
  currentRole: z.string().min(1, { message: "Current or most recent job role is required." }),
  responsibilities: z.string().min(1, { message: "Primary responsibilities are required." }),
  achievements: z.string().min(1, { message: "Key achievements are required." }),
  challengingProject: z.string().min(1, { message: "Description of a challenging project is required." }),
  jobHistory: z.array(
    z.object({
      role: z.string().min(1, { message: "Role is required." }),
      company: z.string().min(1, { message: "Company name is required." }),
      dates: z.string().min(1, { message: "Dates of employment are required." }),
    })
  ).optional(),
  alignmentWithDesiredRole: z.string().min(1, { message: "Alignment with desired role is required." }),
});

export const educationSchema = z.object({
  highestDegree: z.enum(["High School", "Associate's Degree", "Bachelor's Degree", "Master's Degree", "Doctorate"]).refine(val => !!val, "Highest degree obtained is required."),
  fieldOfStudy: z.string().min(1, { message: "Field of study is required." }).optional(),
  institution: z.string().min(1, { message: "Institution is required." }).optional(),
  graduationYear: z.string().min(1, { message: "Graduation year is required." }).optional(),
  additionalDegrees: z.string().optional(),
});

export const availabilitySchema = z.object({
  startDate: z.string().min(1, { message: "Availability to start a new job is required." }),
  preferredWorkHours: z.string().min(1, { message: "Preferred work hours are required." }),
  unavailableTimes: z.string().optional(),
  upcomingCommitments: z.string().optional(),
});

export const jobSpecificQuestionsSchema = z.object({
  significantAchievement: z.string().min(1, { message: "A significant achievement is required." }),
  problemSolvingApproach: z.string().min(1, { message: "Description of problem-solving approach is required." }),
  newSkillAcquisition: z.string().min(1, { message: "Description of new skill acquisition is required." }),
  handlingDeadlines: z.string().min(1, { message: "Description of handling deadlines and high-pressure situations is required." }),
  managingProjects: z.string().min(1, { message: "Description of managing multiple projects is required." }),
  stayingUpdated: z.string().min(1, { message: "Description of staying updated with industry trends is required." }),
});

export const behavioralQuestionsSchema = z.object({
  teamwork: z.string().min(1, { message: "Description of teamwork experience is required." }),
  conflictResolution: z.string().min(1, { message: "Description of conflict resolution is required." }),
  initiative: z.string().min(1, { message: "Description of taking initiative is required." }),
  taskPrioritization: z.string().min(1, { message: "Description of task prioritization is required." }),
  adaptability: z.string().min(1, { message: "Description of adaptability to changes is required." }),
});

export const preferencesAndMotivationsSchema = z.object({
  motivation: z.string().min(1, { message: "Motivation to perform well is required." }),
  jobSatisfaction: z.string().min(1, { message: "Job satisfaction aspects are required." }),
  companyCulture: z.string().min(1, { message: "Preferred company culture is required." }),
  careerGoals: z.string().min(1, { message: "Career goals for the next 5 years are required." }),
  nextRoleAchievements: z.string().min(1, { message: "Achievements hoped for in next role are required." }),
});

export type PreferencesAndMotivationsFormData = z.infer<typeof preferencesAndMotivationsSchema>;

export type BehavioralQuestionsFormData = z.infer<typeof behavioralQuestionsSchema>;

export type JobSpecificQuestionsFormData = z.infer<typeof jobSpecificQuestionsSchema>;

export type AvailabilityFormData = z.infer<typeof availabilitySchema>;

export type EducationFormData = z.infer<typeof educationSchema>;

export type ExperienceFormData = z.infer<typeof experienceSchema>;

