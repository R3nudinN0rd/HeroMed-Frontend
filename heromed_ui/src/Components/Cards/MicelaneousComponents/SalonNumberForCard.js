import React from 'react';
import useAxios from '../../../hooks/useAxios';
import LoadingHandler from '../../../common/LoadingHandler';

function SalonNumber({salonId}){
    const{data, loading} = useAxios({
        method:'get',
        url:`/api/salon/id/${salonId}`,
    })

    return (
        <>
            {loading?(
                <LoadingHandler/>
            ):(
                <>
                    <span className='text-center'>{data.salonNumber}</span>
                </>
            )}
        </>
    )
}

export default SalonNumber