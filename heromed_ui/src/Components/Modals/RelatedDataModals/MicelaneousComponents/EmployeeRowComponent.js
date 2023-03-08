import React, { useState } from 'react';
import JobTitle from '../../../Cards/MicelaneousComponents/JobTitleForCard';
import SectionTitle from '../../../Cards/MicelaneousComponents/SectionTitleForCard';
function EmployeeRowComponent({ rowData }) {
    return (
        <>
            <div className='flex flex-col h-full w-full mt-2 mb-2'>
                <div className='flex flex-row w-full h-full'>
                    <div className='flex flex-col w-1/3 h-full'>
                        <span className='text-sm text-bold font-medium text-center opacity-50'>Employee name</span>
                        <span className='text-sm text-bold font-medium text-center'>{rowData.firstName} {rowData.lastName}</span>
                    </div>
                    <div className='flex flex-col w-1/3 h-full'>
                        <span className='text-sm text-bold font-medium text-center opacity-50'>Job title</span>
                        <span className='text-sm text-bold font-medium text-center'><JobTitle jobId={rowData.jobId} /></span>
                    </div>
                    <div className='flex flex-col w-1/3 h-full'>
                        <span className='text-sm text-bold font-medium text-center opacity-50'>Section</span>
                        <span className='text-sm text-bold font-medium text-center'><SectionTitle sectionId={rowData.sectionId} /></span>
                    </div>
                </div>
                <div className='flex flex-row w-full h-full justify-center'>
                    <span className='border-dotted border-b-[2px] border-gray-400 w-4/5'></span>
                </div>
                <div className='flex flex-row w-full h-full mt-1'>
                    <div className='flex flex-col w-1/2 h-full'>
                        <span className='text-sm text-bold font-medium text-center opacity-50'>Email</span>
                        <span className='text-sm text-bold font-medium text-center'>{rowData.email}</span>
                    </div>
                    <div className='flex flex-col w-1/2 h-full'>
                        <span className='text-sm text-bold font-medium text-center opacity-50'>Phone number</span>
                        <span className='text-sm text-bold font-medium text-center'>{rowData.phoneNumber}</span>
                    </div>
                </div>
            </div>
            <span className='border-double border-b-[2px] border-gray-500 w-full scroll mr-3'></span>
        </>
    )
}

export default EmployeeRowComponent