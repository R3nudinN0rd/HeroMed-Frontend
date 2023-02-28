import React from 'react';
import useAxios from '../../../hooks/useAxios';
import LoadingHandler from '../../../common/LoadingHandler';

function JobTitle({jobId}){
    const{data, loading} = useAxios({
        method:'get',
        url:`/api/jobs/job/${jobId}`,
    })

    return(
        <>
            {loading?(
                <LoadingHandler/>
            ):(
                <>
                    <span className='text-center'>{data.title}</span>
                </>
            )}
        </>
    )
}

export default JobTitle