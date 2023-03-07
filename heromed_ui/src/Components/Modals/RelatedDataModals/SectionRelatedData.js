import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useAxios from '../../../hooks/useAxios';
import { url } from '../../../common/Constants';
import EmployeesList from '../RelatedDataModals/EmployeesListComponent'
const SectionRelatedDataBody = (props) => {
    const handleClose = () => {
        props.setIsModalOpen(false);
    }

    return (
        <div className='flex flex-row w-full h-full items-center bg-slate-200 bg-opacity-60'>
            <div className='flex flex-col w-2/6 h-full bg-white rounded shadow-lg p-8 ml-4 mt-4 mb-4 overflow-y-scroll'>
                <div className='flex flex-row w-full justify-center'>
                    <span className='text-lg text-bold font-medium text-center'>Employees</span>
                </div>
                <div className='flex flex-col w-full h-full justify-center'>
                    <EmployeesList/>
                </div>
            </div>
            <div className='w-2/6 max-h-[600px] bg-white rounded shadow-lg p-8 m-1 overflow-y-scroll'>

            </div>
            <div className='w-2/6 max-h-[600px] bg-white rounded shadow-lg p-8 m-1 overflow-y-scroll'>

            </div>
        </div>
    )
}
export default SectionRelatedDataBody