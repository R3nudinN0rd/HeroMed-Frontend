import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useAxios from '../../../hooks/useAxios';
import { url } from '../../../common/Constants';
import EmployeesList from '../RelatedDataModals/EmployeesListComponent'
import PatientsList from '../RelatedDataModals/PatientsListComponent';
import SalonList from '../RelatedDataModals/SalonListComponent';

const SectionRelatedDataBody = (props) => {
    const handleClose = () => {
        props.setIsModalOpen(false);
    }

    const employeesPageRedirect = () => {
        window.location.href = "/employee"
    }

    const patientPageRedirect = () => {
        window.location.href = "/patient"
    }

    const salonPageRedirect = () => {
        window.location.href = "/salon"
    }

    return (
        <div className='flex flex-col w-full h-full items-center bg-slate-200 bg-opacity-0'>
            <div className='flex flex-row w-full h-12 justify-center bg-white'>
                <div className='h-10 bg-blue-900 hover:bg-red-800 rounded-full py-2 hover:px-10 px-5 text-white duration-500 cursor-pointer' type='submit' onClick={() => handleClose()}>
                    <span className='text-white'>
                        <b>Close</b>
                    </span>
                </div>
            </div>
            <div className='flex flex-row w-full h-full mr-4 mb-7'>
                <div className='flex flex-col w-2/6 h-full bg-white rounded shadow-lg p-8 ml-4 mt-4 mb-4 overflow-y-auto'>
                    <div className='flex flex-col w-full justify-center'>
                        <div className='flex flex-row w-full justify-center items-center'>
                            <div className='h-8 bg-blue-500 hover:bg-green-500 rounded-full pt-1 hover:px-10 px-5 text-white duration-500 cursor-pointer items-center' type='submit' onClick={() => employeesPageRedirect()}>
                                <span className='text-xs text-white'>
                                    <b>Go to employees page</b>
                                </span>
                            </div>
                        </div>
                        <div className='flex flex-row w-full justify-center'>
                            <span className='text-lg text-bold font-medium text-center'>Employees</span>

                        </div>
                    </div>
                    <div className='flex flex-col w-full h-full justify-center'>
                        <EmployeesList sectionId={props.cardData.id} />
                    </div>
                </div>
                <div className='flex flex-col w-2/6 h-full bg-white rounded shadow-lg p-8 ml-4 mt-4 mb-4 overflow-y-auto'>
                    <div className='flex flex-col w-full justify-center'>
                        <div className='flex flex-row w-full justify-center items-center'>
                            <div className='h-8 bg-blue-500 hover:bg-green-500 rounded-full pt-1 hover:px-10 px-5 text-white duration-500 cursor-pointer items-center' type='submit' onClick={() => patientPageRedirect()}>
                                <span className='text-xs text-white'>
                                    <b>Go to patients page</b>
                                </span>
                            </div>
                        </div>
                        <div className='flex flex-row w-full justify-center'>
                            <span className='text-lg text-bold font-medium text-center'>Patients</span>
                        </div>
                    </div>
                    <div className='flex flex-col w-full h-full justify-center'>
                        <PatientsList sectionId={props.cardData.id} />
                    </div>
                </div>
                <div className='flex flex-col w-2/6 h-full bg-white rounded shadow-lg p-8 ml-4 mt-4 mb-4 overflow-y-auto'>
                    <div className='flex flex-col w-full justify-center'>
                        <div className='flex flex-row w-full justify-center items-center'>
                            <div className='h-8 bg-blue-500 hover:bg-green-500 rounded-full pt-1 hover:px-10 px-5 text-white duration-500 cursor-pointer items-center' type='submit' onClick={() => salonPageRedirect()}>
                                <span className='text-xs text-white'>
                                    <b>Go to salon page</b>
                                </span>
                            </div>
                        </div>
                        <div className='flex flex-row w-full justify-center'>
                            <span className='text-lg text-bold font-medium text-center'>Salon</span>
                        </div>
                    </div>
                    <div className='flex flex-col w-full h-full justify-center'>
                        <SalonList sectionId={props.cardData.id} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SectionRelatedDataBody