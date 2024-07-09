import { Card } from '@/components/ui/card'
import React from 'react'

const Analytics = () => {
    return (
        <div className='grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            <Card className='flex w-full flex-col gap-3 rounded-xl border p-5 shadow'>
                <section className="flex justify-between gap-2">
                    <p className="text-sm">Analytics</p>
                </section>
                <section className="flex flex-col gap-1">
                    <h2 className="text-2xl font-semibold">18,418</h2>
                    <p className="text-xs text-gray-500">development</p>
                </section>
            </Card>
            <Card className='flex w-full flex-col gap-3 rounded-xl border p-5 shadow'>
                <section className="flex justify-between gap-2">
                    <p className="text-sm">Analytics</p>
                </section>
                <section className="flex flex-col gap-1">
                    <h2 className="text-2xl font-semibold">18,418</h2>
                    <p className="text-xs text-gray-500">development</p>
                </section>
            </Card>
            <Card className='flex w-full flex-col gap-3 rounded-xl border p-5 shadow'>
                <section className="flex justify-between gap-2">
                    <p className="text-sm">Analytics</p>
                </section>
                <section className="flex flex-col gap-1">
                    <h2 className="text-2xl font-semibold">18,418</h2>
                    <p className="text-xs text-gray-500">development</p>
                </section>
            </Card>
        </div>
    )
}

export default Analytics