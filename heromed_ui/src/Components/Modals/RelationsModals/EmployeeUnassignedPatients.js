import React from 'react';
import ErrorHandler from '../../../common/ErrorHandler';
import LoadingHandler from '../../../common/LoadingHandler';
import useAxios from '../../../hooks/useAxios';
import EmployeeUnassignedRelationRow from './MicelaneousComponents/EmployeeUnassignedRelationRow';
import EmptyArray from '../RelatedDataModals/MicelaneousComponents/EmptyArray';
function EmployeeUnassignedPatients({employeeId}){
    const {data, loading, error} = useAxios({
        method:'get',
        url:'/api/relation/relation/external/patient/'+employeeId
    })
    

    return (
        <>
            {loading?(
                <LoadingHandler/>
            ):(
                <div className='flex flex-col w-full h-fit overflow-auto '>
                    {error &&(<EmptyArray/>)}
                    {data && data.map((relation) => <EmployeeUnassignedRelationRow key={relation.patientId} relation={relation}/>)}
                </div>
            )}
        </>
    )
}

export default EmployeeUnassignedPatients