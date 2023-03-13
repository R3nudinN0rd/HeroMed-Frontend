import React, { useState } from 'react';
import { MdAdd } from 'react-icons/md';
import EmployeesListHalf from './EmployeeHalf/EmployeesListHalf';
import PatientsListHalf from './PatientHalf/PatientsListHalf'

function AssignementsPage() {

    // const { data, loading, error } = useAxios({
    //     method: 'get',
    //     url: '/api/relation'
    // })


    return (
        <div className='linear-bg-content h-[750px] w-full relative overflow-hidden bg-blue-200'>
           
            <div className='flex flex-row w-full h-full gap-6'>
                <div className='flex flex-col w-1/2 h-full'>
                    <div className='flex flex-row w-full justify-center'>
                        <span className='text-lg text-bold font-medium text-center opacity-50'>Employees</span>
                    </div>
                    <div className='flex flex-col h-full w-full'>
                        <EmployeesListHalf  />
                    </div>
                </div>
                <div className='flex flex-col w-1/2 h-full'>
                    <div className='flex flex-row w-full justify-center'>
                        <span className='text-lg text-bold font-medium text-center opacity-50'>Patients</span>
                    </div>
                    <div className='flex flex-col h-full w-full'>
                        <PatientsListHalf />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AssignementsPage