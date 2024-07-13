'use client'
import React, { useState } from 'react'
import PersonalInformation from './application/personal_info';
import JobPreferencesForm from './application/job_preference';

const ApplicationDetails = () => {

    const handleFormSubmit = (data: any) => {
        console.log("Form Data Submitted: ", data);
        // setFormData(data);
      };
    return (
        <div className='w-full  h-auto descriptions flex flex-col p-[10px]  md:px-[20px] xl:pb-[0px] justify-start items-start'>

            <PersonalInformation onSubmit={handleFormSubmit} />
            <JobPreferencesForm onSubmit={handleFormSubmit} />






        </div>
    )
}

export default ApplicationDetails