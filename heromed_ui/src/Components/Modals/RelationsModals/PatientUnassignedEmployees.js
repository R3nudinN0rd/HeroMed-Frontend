import React from 'react';
import useAxios from '../../../hooks/useAxios';
import LoadingHandler from '../../../common/LoadingHandler';
import PatientUnassignedRelationRow from './MicelaneousComponents/PatientUnassignedRelationRow';

function PatientUnassignedEmployees({patientId}){

    const {data, loading, error} = useAxios({
        method:'get',
        url:'/api/relation/relation/external/employee/'+patientId
    })
    return(
        <>
        {loading?(
            <LoadingHandler/>
        ):(
        <div className='flex flex-col w-full h-full overflow-y-auto'>
            {data && data.map((relation) => <PatientUnassignedRelationRow key={relation.employeeId} relation={relation}/>)}
        </div>
        )}
        </>
    )
}
export default PatientUnassignedEmployees