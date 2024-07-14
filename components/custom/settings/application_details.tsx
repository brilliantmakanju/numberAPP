'use client'
import React, { useState } from 'react'
import PersonalInformation from './application/personal_info';
import JobPreferencesForm from './application/job_preference';
import SkillsAndQualificationsForm from './application/skills_qualifications';
import ExperienceForm from './application/experience';
import EducationForm from './application/education';
import AvailabilityForm from './application/avaliablity';
import JobSpecificQuestionsForm from './application/jobspecfic';
import BehavioralQuestionsForm from './application/behavioralQuestion';
import PreferencesAndMotivationsForm from './application/preferencesAndMotivations';

const ApplicationDetails = () => {

    const handleFormSubmit = (data: any) => {
        console.log("Form Data Submitted: ", data);
        // setFormData(data);
      };
    return (
        <div className='w-full  h-auto descriptions flex flex-col p-[10px] gap-7  md:px-[20px] xl:pb-[0px] justify-start items-start'>

            <PersonalInformation onSubmit={handleFormSubmit} />
            <JobPreferencesForm onSubmit={handleFormSubmit} />
            <SkillsAndQualificationsForm onSubmit={handleFormSubmit} />
            <ExperienceForm onSubmit={handleFormSubmit} />
            <EducationForm onSubmit={handleFormSubmit} />
            <AvailabilityForm onSubmit={handleFormSubmit} />
            <JobSpecificQuestionsForm onSubmit={handleFormSubmit} />
            <BehavioralQuestionsForm onSubmit={handleFormSubmit} />
            <PreferencesAndMotivationsForm onSubmit={handleFormSubmit} />












        </div>
    )
}

export default ApplicationDetails