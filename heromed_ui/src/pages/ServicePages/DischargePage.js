import React, { useState } from 'react'
import ErrorHandler from '../../common/ErrorHandler'
import LoadingHandler from '../../common/LoadingHandler'
import useAxios from '../../hooks/useAxios'
import PatientCardComponent from '../../Components/Cards/ServicesCardComponents/PatientCardComponent'
import EmptyArray from '../../Components/Modals/RelatedDataModals/MicelaneousComponents/EmptyArray'
function DischargePage() {

    const { data, loading, error } = useAxios({
        method: 'get',
        url: '/api/patient'
    })

    return (
        <>
            <div className='linear-bg-content h-[750px] w-full relative overflow-hidden bg-blue-200'>
                {
                    loading ? (
                        <LoadingHandler />
                    ) : (
                        <>
                            <div className='flex flex-col justify-start w-full h-full px-8 py-12 overflow-auto overflow-x-hidden rounded-3x1 gap-4'>
                                {error && (<EmptyArray/>)}
                                {data && data.map((patient) => <PatientCardComponent key={patient.id} cardData={patient} />)}
                            </div>
                        </>
                    )
                }
            </div>
        </>
    )
}

export default DischargePage