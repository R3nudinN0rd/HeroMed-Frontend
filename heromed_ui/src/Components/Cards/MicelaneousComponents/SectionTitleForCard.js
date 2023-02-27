import React from 'react';
import useAxios from '../../../hooks/useAxios';
import LoadingHandler from '../../../common/LoadingHandler';


function SectionTitle({sectionId}){
    const{data,loading} = useAxios({
        method:'get',
        url:`/api/sections/section/${sectionId}`,
    });

    return (
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

export default SectionTitle