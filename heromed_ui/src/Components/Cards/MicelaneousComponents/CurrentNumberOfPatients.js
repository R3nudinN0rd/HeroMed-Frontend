import React from 'react';
import useAxios from '../../../hooks/useAxios';
import LoadingHandler from '../../../common/LoadingHandler';

function CurrentPatients({salonId}){
    const{data, loading} = useAxios({
        method:'get',
        url:'/api/patient/patientSalon/'+salonId,
    })
    return (
        <>
            {loading?(
                <LoadingHandler/>
            ):(
                <>
                    <span className='text-center'>{data.length}</span>
                </>
            )}
        </>
    )
}

export default CurrentPatients