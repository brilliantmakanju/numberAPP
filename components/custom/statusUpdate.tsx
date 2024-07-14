'use client';

import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from '@/components/ui/select';

type JobStatus = 'applied' | 'interview' | 'offer' | 'hire' | 'rejected';

const jobStatusOptions = ['applied', 'interview', 'offer', 'hire', 'rejected'] as const;

interface StatusUpdateProps {
    currentStatus: JobStatus;
    onChangeStatus: (status: JobStatus) => void;
    endpoint: string;
    jobId: string;
}

const statusSchema = z.object({
    status: z.enum(jobStatusOptions).optional(),
});

type StatusFormData = z.infer<typeof statusSchema>;

const StatusUpdate: React.FC<StatusUpdateProps> = ({ currentStatus, onChangeStatus, endpoint, jobId }) => {
    const [isLoading, setIsLoading] = useState(false);

    const { register, setValue, watch } = useForm<StatusFormData>({
        resolver: zodResolver(statusSchema),
        defaultValues: {
            status: currentStatus,
        },
    });

    const status = watch('status');

    useEffect(() => {
        if (isLoading && status === currentStatus) {
            setIsLoading(false);
        }
    }, [status, currentStatus, isLoading]);

    const handleStatusChange = async (newStatus: JobStatus) => {
        setIsLoading(true);
        try {
            await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ status: newStatus, jobId }),
            });
            onChangeStatus(newStatus);
        } catch (error) {
            console.error('Failed to update status', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex items-center w-[7.5rem] mt-[-15px] gap-4">
            <Select
                {...register('status')}
                onValueChange={(value) => {
                    setValue('status', value as JobStatus);
                    handleStatusChange(value as JobStatus);
                }}
            >
                <SelectTrigger disabled={isLoading} className="w-full border focus:ring-0 focus:ring-transparent focus:ring-offset-0 px-4 py-2">
                    {isLoading ? (
                        <SelectValue key="loading">
                            Saving...
                        </SelectValue>
                    ) : (
                        <SelectValue placeholder="Select Status" />
                    )}
                </SelectTrigger>
                <SelectContent >
                    {jobStatusOptions.map((status) => (
                        <SelectItem key={status} value={status}>
                            {status.charAt(0).toUpperCase() + status.slice(1)}
                        </SelectItem>
                    ))}

                </SelectContent>
            </Select>
        </div>
    );
};

export default StatusUpdate;
