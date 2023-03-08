import React from 'react';
import CurrentPatients from '../../../Cards/MicelaneousComponents/CurrentNumberOfPatients';

function SalonRowComponent({ rowData }) {

    function SalonAvailable() {
        if (rowData.available) return "Available";
        return "Busy";
    }

    return (
        <>
            <div className='flex flex-col h-full w-full mt-2 mb-2'>
                <div className='flex flex-row w-full h-full'>
                    <div className='flex flex-col w-1/3 h-full'>
                        <span className='text-sm text-bold font-medium text-center opacity-50'>Salon number</span>
                        <span className='text-sm text-bold font-medium text-center'>{rowData.salonNumber}</span>
                    </div>
                    <div className='flex flex-col w-1/3 h-full'>
                        <span className='text-sm text-bold font-medium text-center opacity-50'>Floor</span>
                        <span className='text-sm text-bold font-medium text-center'>{rowData.floor}</span>
                    </div>
                    <div className='flex flex-col w-1/3 h-full'>
                        <span className='text-sm text-bold font-medium text-center opacity-50'>Number of beds</span>
                        <span className='text-sm text-bold font-medium text-center'>{rowData.beds}</span>
                    </div>
                </div>
                <div className='flex flex-row w-full h-full justify-center'>
                    <span className='border-dotted border-b-[2px] border-gray-400 w-4/5'></span>
                </div>
                <div className='flex flex-row w-full h-full'>
                    <div className='flex flex-col w-1/2 h-full'>
                        <span className='text-sm text-bold font-medium text-center opacity-50'>Number of patients</span>
                        <span className='text-sm text-bold font-medium text-center'><CurrentPatients salonId={rowData.id} /></span>
                    </div>
                    <div className='flex flex-col w-1/2 h-full'>
                        <span className='text-sm text-bold font-medium text-center opacity-50'>Available</span>
                        <span className='text-sm text-bold font-medium text-center'>{SalonAvailable()}</span>
                    </div>
                </div>
            </div>
            <span className='border-double border-b-[2px] border-gray-500 w-full scroll mr-3'></span>
        </>
    )
}
export default SalonRowComponent